import { BLOG_PAGE_SIZE, isSupabaseConfigured, listPublishedPosts } from '$lib/server/supabase';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
	const page = Math.max(1, Number(url.searchParams.get('page') ?? '1') || 1);
	const { posts, total } = await listPublishedPosts(page, BLOG_PAGE_SIZE);

	return {
		posts,
		page,
		pageSize: BLOG_PAGE_SIZE,
		total,
		totalPages: Math.max(1, Math.ceil(total / BLOG_PAGE_SIZE)),
		isConfigured: isSupabaseConfigured()
	};
};
