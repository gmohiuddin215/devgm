<script lang="ts">
	import { ArrowLeft, Clock } from 'lucide-svelte';

	let { data } = $props();

	function formatDate(value: string | null) {
		if (!value) return '';
		return new Intl.DateTimeFormat('en', {
			month: 'long',
			day: 'numeric',
			year: 'numeric'
		}).format(new Date(value));
	}
</script>

<svelte:head>
	<title>{data.post.title} | Blog</title>
	<meta name="description" content={data.post.excerpt} />
</svelte:head>

<div class="pt-[70px]">
	<article class="py-[72px]">
		<div class="mx-auto max-w-[980px] px-6 lg:px-14">
			<a
				href="/blog"
				class="mb-10 inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.12em] text-green transition hover:text-text"
			>
				<ArrowLeft size={16} />
				All posts
			</a>

			<header>
				<div class="mb-5 flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-[0.12em] text-overlay1">
					<span>{formatDate(data.post.published_at)}</span>
					<span class="flex items-center gap-1.5"><Clock size={13} /> {data.post.reading_time} min read</span>
				</div>
				<h1
					class="font-display font-extrabold leading-[0.98] tracking-[-0.04em] text-text"
					style="font-size: clamp(44px, 6vw, 86px);"
				>
					{data.post.title}
				</h1>
				<p class="mt-6 max-w-[760px] text-[17px] font-light leading-8 text-subtext0">
					{data.post.excerpt}
				</p>
				<div class="mt-7 flex flex-wrap gap-2">
					{#each data.post.tags ?? [] as tag}
						<span class="pill">{tag}</span>
					{/each}
				</div>
			</header>

			{#if data.post.cover_image}
				<img
					src={data.post.cover_image}
					alt=""
					class="mt-12 max-h-[520px] w-full rounded-lg border border-surface0 object-cover"
				/>
			{/if}

			<div class="blog-content mt-12">
				{@html data.post.content}
			</div>
		</div>
	</article>
</div>

<style>
	.blog-content :global(*) {
		max-width: 100%;
	}

	.blog-content :global(p),
	.blog-content :global(li) {
		color: var(--subtext0);
		font-size: 16px;
		line-height: 1.9;
	}

	.blog-content :global(p) {
		margin: 1.25rem 0;
	}

	.blog-content :global(h2),
	.blog-content :global(h3),
	.blog-content :global(h4) {
		color: var(--text);
		font-family: var(--font-bricolage);
		font-weight: 700;
		letter-spacing: 0;
		line-height: 1.12;
		margin: 2.4rem 0 1rem;
	}

	.blog-content :global(h2) {
		font-size: clamp(30px, 4vw, 44px);
	}

	.blog-content :global(h3) {
		font-size: clamp(24px, 3vw, 32px);
	}

	.blog-content :global(a) {
		color: var(--green);
		text-decoration: underline;
		text-decoration-color: rgba(37, 211, 102, 0.35);
		text-underline-offset: 4px;
	}

	.blog-content :global(pre) {
		overflow-x: auto;
		border: 1px solid var(--surface0);
		border-radius: 8px;
		background: #11111b;
		padding: 1.1rem;
		margin: 1.5rem 0;
	}

	.blog-content :global(code) {
		color: var(--teal);
		font-family: var(--font-jetbrains);
		font-size: 0.9em;
	}

	.blog-content :global(:not(pre) > code) {
		border: 1px solid var(--surface0);
		border-radius: 5px;
		background: rgba(148, 226, 213, 0.08);
		padding: 0.12rem 0.35rem;
	}

	.blog-content :global(blockquote) {
		border-left: 3px solid var(--green);
		color: var(--subtext1);
		margin: 1.6rem 0;
		padding: 0.25rem 0 0.25rem 1.25rem;
	}

	.blog-content :global(img) {
		border: 1px solid var(--surface0);
		border-radius: 8px;
		margin: 1.75rem 0;
	}

	.blog-content :global(table) {
		border-collapse: collapse;
		display: block;
		margin: 1.5rem 0;
		overflow-x: auto;
		width: 100%;
	}

	.blog-content :global(th),
	.blog-content :global(td) {
		border: 1px solid var(--surface0);
		padding: 0.75rem;
		text-align: left;
	}
</style>
