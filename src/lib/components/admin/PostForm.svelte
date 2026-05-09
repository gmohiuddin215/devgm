<script lang="ts">
	import { CalendarClock, Eye, FileText, Link, Save, Tags } from 'lucide-svelte';
	import HugeRTEEditor from './HugeRTEEditor.svelte';
	import type { BlogPost } from '$lib/server/supabase';

	let {
		post = null,
		errors = {},
		submitLabel = 'Save post'
	}: {
		post?: BlogPost | null;
		errors?: Record<string, string>;
		submitLabel?: string;
	} = $props();

	let content = $state(post?.content ?? '<p></p>');
	let title = $state(post?.title ?? '');
	let slug = $state(post?.slug ?? '');
	let status = $state(post?.status ?? 'draft');

	const publishedAt = post?.published_at
		? new Date(post.published_at).toISOString().slice(0, 16)
		: '';
	const tags = post?.tags?.join(', ') ?? '';

	function syncSlug() {
		if (slug) return;
		slug = title
			.toLowerCase()
			.trim()
			.replace(/['"]/g, '')
			.replace(/[^a-z0-9]+/g, '-')
			.replace(/^-+|-+$/g, '')
			.slice(0, 80);
	}
</script>

<form method="POST" class="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
	<div class="space-y-6">
		<div class="rounded-lg border border-surface0 bg-mantle/70 p-5">
			<label for="title" class="font-mono text-[11px] uppercase tracking-[0.14em] text-overlay1">
				Title
			</label>
			<input
				id="title"
				name="title"
				bind:value={title}
				onblur={syncSlug}
				class="mt-3 w-full border-0 bg-transparent p-0 font-display text-[clamp(30px,4vw,54px)] font-bold leading-[1.05] text-text outline-none placeholder:text-surface2"
				placeholder="Build notes, architecture, lessons..."
			/>
			{#if errors.title}<p class="mt-2 text-sm text-red">{errors.title}</p>{/if}
		</div>

		<div class="rounded-lg border border-surface0 bg-mantle/70 p-5">
			<label for="excerpt" class="font-mono text-[11px] uppercase tracking-[0.14em] text-overlay1">
				Excerpt
			</label>
			<textarea
				id="excerpt"
				name="excerpt"
				rows="3"
				class="mt-3 w-full resize-none rounded-md border border-surface0 bg-base/80 px-4 py-3 text-[15px] leading-7 text-text outline-none transition placeholder:text-overlay0 focus:border-green"
				placeholder="A sharp, useful summary for the blog index and SEO."
			>{post?.excerpt ?? ''}</textarea>
			{#if errors.excerpt}<p class="mt-2 text-sm text-red">{errors.excerpt}</p>{/if}
		</div>

		<div class="rounded-lg border border-surface0 bg-mantle/70 p-5">
			<HugeRTEEditor bind:value={content} />
			{#if errors.content}<p class="mt-2 text-sm text-red">{errors.content}</p>{/if}
		</div>
	</div>

	<aside class="space-y-4 lg:sticky lg:top-24 lg:self-start">
		<div class="rounded-lg border border-green/25 bg-green/10 p-4">
			<div class="flex items-center gap-2 text-green">
				<Save size={16} />
				<span class="font-mono text-[11px] uppercase tracking-[0.14em]">Publish controls</span>
			</div>
			<button
				type="submit"
				class="mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-green px-4 py-3 font-mono text-[12px] font-bold uppercase tracking-[0.12em] text-crust transition hover:brightness-110"
			>
				<Save size={16} />
				{submitLabel}
			</button>
			<a
				href="/admin"
				class="mt-3 flex w-full items-center justify-center gap-2 rounded-md border border-surface1 px-4 py-3 font-mono text-[12px] uppercase tracking-[0.12em] text-subtext1 transition hover:border-green hover:text-green"
			>
				<Eye size={16} />
				All posts
			</a>
		</div>

		<div class="rounded-lg border border-surface0 bg-mantle/70 p-4">
			<label for="status" class="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-overlay1">
				<FileText size={14} />
				Status
			</label>
			<select
				id="status"
				name="status"
				bind:value={status}
				class="mt-3 w-full rounded-md border border-surface0 bg-base px-3 py-2 text-text outline-none focus:border-green"
			>
				<option value="draft">Draft</option>
				<option value="published">Published</option>
			</select>
		</div>

		<div class="rounded-lg border border-surface0 bg-mantle/70 p-4">
			<label for="slug" class="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-overlay1">
				<Link size={14} />
				Slug
			</label>
			<input
				id="slug"
				name="slug"
				bind:value={slug}
				class="mt-3 w-full rounded-md border border-surface0 bg-base px-3 py-2 font-mono text-[13px] text-text outline-none focus:border-green"
				placeholder="my-article-slug"
			/>
			{#if errors.slug}<p class="mt-2 text-sm text-red">{errors.slug}</p>{/if}
		</div>

		<div class="rounded-lg border border-surface0 bg-mantle/70 p-4">
			<label for="tags" class="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-overlay1">
				<Tags size={14} />
				Tags
			</label>
			<input
				id="tags"
				name="tags"
				value={tags}
				class="mt-3 w-full rounded-md border border-surface0 bg-base px-3 py-2 text-text outline-none focus:border-green"
				placeholder="SvelteKit, Supabase, AI"
			/>
		</div>

		<div class="rounded-lg border border-surface0 bg-mantle/70 p-4">
			<label for="published_at" class="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-overlay1">
				<CalendarClock size={14} />
				Publish date
			</label>
			<input
				id="published_at"
				name="published_at"
				type="datetime-local"
				value={publishedAt}
				class="mt-3 w-full rounded-md border border-surface0 bg-base px-3 py-2 text-text outline-none focus:border-green"
			/>
		</div>

		<div class="rounded-lg border border-surface0 bg-mantle/70 p-4">
			<label for="cover_image" class="font-mono text-[11px] uppercase tracking-[0.14em] text-overlay1">
				Cover image URL
			</label>
			<input
				id="cover_image"
				name="cover_image"
				value={post?.cover_image ?? ''}
				class="mt-3 w-full rounded-md border border-surface0 bg-base px-3 py-2 text-text outline-none focus:border-green"
				placeholder="https://..."
			/>
		</div>
	</aside>
</form>
