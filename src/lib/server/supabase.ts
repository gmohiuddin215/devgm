import { env } from '$env/dynamic/private';
import { createClient, type Session, type SupabaseClient } from '@supabase/supabase-js';
import type { RequestEvent } from '@sveltejs/kit';

export type BlogPostStatus = 'draft' | 'published';

export type BlogPost = {
	id: string;
	slug: string;
	title: string;
	excerpt: string;
	content: string;
	status: BlogPostStatus;
	tags: string[];
	cover_image: string | null;
	reading_time: number;
	published_at: string | null;
	created_at: string;
	updated_at: string;
};

export type BlogPostInput = {
	title: string;
	slug: string;
	excerpt: string;
	content: string;
	status: BlogPostStatus;
	tags: string[];
	cover_image: string | null;
	reading_time: number;
	published_at: string | null;
};

type Database = {
	public: {
		Tables: {
			blog_posts: {
				Row: BlogPost;
				Insert: BlogPostInput;
				Update: Partial<BlogPostInput>;
				Relationships: [];
			};
		};
		Views: Record<string, never>;
		Functions: Record<string, never>;
		Enums: Record<string, never>;
		CompositeTypes: Record<string, never>;
	};
};

export const BLOG_PAGE_SIZE = 6;

const ACCESS_COOKIE = 'gm-blog-access-token';
const REFRESH_COOKIE = 'gm-blog-refresh-token';
const SELECT_COLUMNS =
	'id,slug,title,excerpt,content,status,tags,cover_image,reading_time,published_at,created_at,updated_at';
const DEFAULT_IMAGE_BUCKET = 'blog-images';

export function isSupabaseConfigured() {
	return Boolean(env.SUPABASE_URL && env.SUPABASE_ANON_KEY);
}

export function isAllowedAdmin(user: App.Locals['user']) {
	const allowlist = env.BLOG_ADMIN_EMAILS?.split(',')
		.map((email) => email.trim().toLowerCase())
		.filter(Boolean);

	if (!allowlist?.length) return Boolean(user);
	return Boolean(user?.email && allowlist.includes(user.email.toLowerCase()));
}

function getSupabase(accessToken?: string): SupabaseClient<Database> {
	if (!env.SUPABASE_URL || !env.SUPABASE_ANON_KEY) {
		throw new Error('Supabase is not configured. Add SUPABASE_URL and SUPABASE_ANON_KEY.');
	}

	return createClient<Database>(env.SUPABASE_URL, env.SUPABASE_ANON_KEY, {
		auth: {
			autoRefreshToken: false,
			detectSessionInUrl: false,
			persistSession: false
		},
		global: accessToken
			? {
					headers: {
						Authorization: `Bearer ${accessToken}`
					}
				}
			: undefined
	});
}

function throwIfSupabaseError(error: { message: string } | null) {
	if (error) throw new Error(error.message);
}

export function slugify(value: string) {
	return value
		.toLowerCase()
		.trim()
		.replace(/['"]/g, '')
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '')
		.slice(0, 80);
}

export function estimateReadingTime(html: string) {
	const text = html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
	const words = text ? text.split(' ').length : 0;
	return Math.max(1, Math.ceil(words / 220));
}

export function normalizeTags(value: string) {
	return value
		.split(',')
		.map((tag) => tag.trim())
		.filter(Boolean)
		.slice(0, 8);
}

export function postInputFromForm(formData: FormData): BlogPostInput {
	const title = String(formData.get('title') ?? '').trim();
	const content = String(formData.get('content') ?? '').trim();
	const status = String(formData.get('status') ?? 'draft') === 'published' ? 'published' : 'draft';
	const publishedAtValue = String(formData.get('published_at') ?? '').trim();
	const coverImage = String(formData.get('cover_image') ?? '').trim();

	return {
		title,
		slug: slugify(String(formData.get('slug') ?? title)),
		excerpt: String(formData.get('excerpt') ?? '').trim(),
		content,
		status,
		tags: normalizeTags(String(formData.get('tags') ?? '')),
		cover_image: coverImage || null,
		reading_time: estimateReadingTime(content),
		published_at:
			status === 'published'
				? publishedAtValue
					? new Date(publishedAtValue).toISOString()
					: new Date().toISOString()
				: null
	};
}

export function validatePostInput(input: BlogPostInput) {
	const errors: Record<string, string> = {};

	if (!input.title) errors.title = 'Add a title.';
	if (!input.slug) errors.slug = 'Add a URL slug.';
	if (!input.excerpt) errors.excerpt = 'Add a short excerpt.';
	if (!input.content || input.content === '<p></p>') errors.content = 'Write the article body.';

	return errors;
}

export async function listPublishedPosts(page = 1, pageSize = BLOG_PAGE_SIZE) {
	if (!isSupabaseConfigured()) {
		return { posts: [] as BlogPost[], total: 0 };
	}

	const from = Math.max(0, (page - 1) * pageSize);
	const to = from + pageSize - 1;
	const { data, error, count } = await getSupabase()
		.from('blog_posts')
		.select(SELECT_COLUMNS, { count: 'exact' })
		.eq('status', 'published')
		.order('published_at', { ascending: false, nullsFirst: false })
		.order('created_at', { ascending: false })
		.range(from, to);

	throwIfSupabaseError(error);

	return { posts: data ?? [], total: count ?? data?.length ?? 0 };
}

export async function getPublishedPost(slug: string) {
	if (!isSupabaseConfigured()) return null;

	const { data, error } = await getSupabase()
		.from('blog_posts')
		.select(SELECT_COLUMNS)
		.eq('slug', slug)
		.eq('status', 'published')
		.maybeSingle();

	throwIfSupabaseError(error);
	return data;
}

export async function listAdminPosts(accessToken: string) {
	const { data, error } = await getSupabase(accessToken)
		.from('blog_posts')
		.select(SELECT_COLUMNS)
		.order('updated_at', { ascending: false });

	throwIfSupabaseError(error);
	return data ?? [];
}

export async function getAdminPost(accessToken: string, id: string) {
	const { data, error } = await getSupabase(accessToken)
		.from('blog_posts')
		.select(SELECT_COLUMNS)
		.eq('id', id)
		.maybeSingle();

	throwIfSupabaseError(error);
	return data;
}

export async function createPost(accessToken: string, input: BlogPostInput) {
	const { data, error } = await getSupabase(accessToken)
		.from('blog_posts')
		.insert(input)
		.select(SELECT_COLUMNS)
		.single();

	throwIfSupabaseError(error);
	if (!data) throw new Error('Supabase did not return the created post.');
	return data;
}

export async function updatePost(accessToken: string, id: string, input: BlogPostInput) {
	const { data, error } = await getSupabase(accessToken)
		.from('blog_posts')
		.update(input)
		.eq('id', id)
		.select(SELECT_COLUMNS)
		.single();

	throwIfSupabaseError(error);
	if (!data) throw new Error('Supabase did not return the updated post.');
	return data;
}

export async function uploadBlogImage(accessToken: string, file: File) {
	if (!file.type.startsWith('image/')) {
		throw new Error('Only image files can be uploaded.');
	}

	if (file.size > 5 * 1024 * 1024) {
		throw new Error('Images must be smaller than 5MB.');
	}

	const extension = file.name.split('.').pop()?.toLowerCase() || 'png';
	const bucket = env.SUPABASE_BLOG_IMAGES_BUCKET || DEFAULT_IMAGE_BUCKET;
	const path = `${new Date().getFullYear()}/${crypto.randomUUID()}.${extension}`;
	const supabase = getSupabase(accessToken);
	const { error } = await supabase.storage.from(bucket).upload(path, file, {
		contentType: file.type,
		cacheControl: '31536000',
		upsert: false
	});

	throwIfSupabaseError(error);

	const { data } = supabase.storage.from(bucket).getPublicUrl(path);
	return data.publicUrl;
}

export async function loginWithPassword(email: string, password: string) {
	const { data, error } = await getSupabase().auth.signInWithPassword({ email, password });

	if (error || !data.session) {
		throw new Error('Invalid email or password.');
	}

	return data.session;
}

export function setSessionCookies(event: RequestEvent, session: Session) {
	const secure = event.url.protocol === 'https:';
	const expiresIn = session.expires_in ?? 60 * 60;

	event.cookies.set(ACCESS_COOKIE, session.access_token, {
		path: '/',
		httpOnly: true,
		sameSite: 'lax',
		secure,
		maxAge: expiresIn
	});

	event.cookies.set(REFRESH_COOKIE, session.refresh_token, {
		path: '/',
		httpOnly: true,
		sameSite: 'lax',
		secure,
		maxAge: 60 * 60 * 24 * 30
	});
}

export function clearSessionCookies(event: RequestEvent) {
	event.cookies.delete(ACCESS_COOKIE, { path: '/' });
	event.cookies.delete(REFRESH_COOKIE, { path: '/' });
}

export function getAccessToken(event: RequestEvent) {
	return event.cookies.get(ACCESS_COOKIE) ?? null;
}

export async function resolveSession(event: RequestEvent) {
	if (!isSupabaseConfigured()) return null;

	const accessToken = event.cookies.get(ACCESS_COOKIE);
	const refreshToken = event.cookies.get(REFRESH_COOKIE);

	if (accessToken) {
		const { data } = await getSupabase(accessToken).auth.getUser(accessToken);
		if (data.user) {
			return {
				id: data.user.id,
				email: data.user.email
			};
		}
	}

	if (!refreshToken) return null;

	const { data, error } = await getSupabase().auth.refreshSession({
		refresh_token: refreshToken
	});

	if (error || !data.session || !data.user) return null;

	setSessionCookies(event, data.session);

	return {
		id: data.user.id,
		email: data.user.email
	};
}
