<script lang="ts">
	import { ArrowLeft, ArrowRight, Clock, Code2, Terminal } from 'lucide-svelte';
	import ScrollReveal from '$lib/components/ScrollReveal.svelte';

	let { data } = $props();

	const featured = $derived(data.posts[0]);
	const rest = $derived(data.posts.slice(1));

	function formatDate(value: string | null) {
		if (!value) return 'Draft';
		return new Intl.DateTimeFormat('en', {
			month: 'short',
			day: 'numeric',
			year: 'numeric'
		}).format(new Date(value));
	}
</script>

<svelte:head>
	<title>Blog | Ghulam Mohiuddin</title>
	<meta
		name="description"
		content="Technical essays, build notes, and practical code-focused writing by Ghulam Mohiuddin."
	/>
</svelte:head>

<div class="pt-[70px]">
	<section class="py-[90px]">
		<div class="mx-auto max-w-[1200px] px-6 lg:px-14">
			<ScrollReveal>
				<div class="grid gap-10 lg:grid-cols-[1fr_360px] lg:items-end">
					<div>
						<span class="mb-4 block font-mono text-[13px] tracking-[0.12em] text-green">
							// Blog
						</span>
						<h1
							class="font-display font-extrabold leading-[0.9] tracking-[-0.04em] text-text"
							style="font-size: clamp(56px, 7vw, 100px);"
						>
							Field notes for builders.
						</h1>
						<p class="mt-6 max-w-[660px] font-body text-[15px] font-light leading-[1.85] text-subtext0">
							Deep dives on applied AI, SvelteKit, iOS engineering, architecture decisions,
							and the small implementation details that make software feel robust.
						</p>
					</div>
					<div class="rounded-lg border border-surface0 bg-mantle/70 p-5">
						<div class="flex items-center gap-3 text-green">
							<Terminal size={18} />
							<span class="font-mono text-[11px] uppercase tracking-[0.16em]">Reader mode</span>
						</div>
						<p class="mt-4 font-body text-[14px] leading-7 text-subtext0">
							Articles are formatted for code-heavy reading: generous measure, durable contrast,
							visible metadata, and responsive cards that stay easy to scan on mobile.
						</p>
					</div>
				</div>
			</ScrollReveal>

			{#if !data.isConfigured}
				<div class="mt-12 rounded-lg border border-yellow/30 bg-yellow/10 p-5 text-yellow">
					<p class="font-body text-[14px]">
						Supabase is not configured yet. Add <code>SUPABASE_URL</code> and
						<code>SUPABASE_ANON_KEY</code> to start loading posts.
					</p>
				</div>
			{:else if data.posts.length === 0}
				<div class="mt-12 rounded-lg border border-surface0 bg-mantle/70 p-8">
					<Code2 size={28} class="text-green" />
					<h2 class="mt-5 font-display text-3xl font-bold text-text">No posts published yet.</h2>
					<p class="mt-3 max-w-[560px] text-[15px] leading-7 text-subtext0">
						Publish the first article from the admin panel and it will show up here.
					</p>
				</div>
			{:else}
				<div class="mt-14 space-y-10">
					{#if featured}
						<ScrollReveal>
							<a
								href={`/blog/${featured.slug}`}
								class="group grid overflow-hidden rounded-lg border border-surface0 bg-mantle/70 transition hover:border-green/60 md:grid-cols-[1fr_420px]"
							>
								<div class="p-6 md:p-8 lg:p-10">
									<div class="mb-5 flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-[0.12em] text-overlay1">
										<span class="text-green">Featured</span>
										<span>{formatDate(featured.published_at)}</span>
										<span class="flex items-center gap-1.5"><Clock size={13} /> {featured.reading_time} min</span>
									</div>
									<h2 class="font-display text-[clamp(32px,4vw,58px)] font-bold leading-[1.02] tracking-[-0.03em] text-text transition group-hover:text-green">
										{featured.title}
									</h2>
									<p class="mt-5 max-w-[650px] text-[15px] leading-8 text-subtext0">
										{featured.excerpt}
									</p>
									<div class="mt-8 flex flex-wrap gap-2">
										{#each featured.tags ?? [] as tag}
											<span class="pill">{tag}</span>
										{/each}
									</div>
								</div>
								<div class="relative min-h-[260px] border-t border-surface0 bg-base md:border-l md:border-t-0">
									{#if featured.cover_image}
										<img
											src={featured.cover_image}
											alt=""
											class="h-full min-h-[260px] w-full object-cover opacity-90 transition duration-500 group-hover:scale-[1.03]"
										/>
									{:else}
										<div class="flex h-full min-h-[260px] items-center justify-center bg-[linear-gradient(135deg,rgba(37,211,102,0.14),rgba(203,166,247,0.14),rgba(137,180,250,0.12))]">
											<Code2 size={74} class="text-green/80" />
										</div>
									{/if}
								</div>
							</a>
						</ScrollReveal>
					{/if}

					<div class="grid gap-4 md:grid-cols-2">
						{#each rest as post, index}
							<ScrollReveal delay={index * 0.06}>
								<a
									href={`/blog/${post.slug}`}
									class="group flex h-full min-h-[310px] flex-col justify-between rounded-lg border border-surface0 bg-mantle/70 p-6 transition hover:-translate-y-1 hover:border-green/60"
								>
									<div>
										<div class="mb-5 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.12em] text-overlay1">
											<span>{formatDate(post.published_at)}</span>
											<span class="flex items-center gap-1.5"><Clock size={13} /> {post.reading_time} min</span>
										</div>
										<h2 class="font-display text-[clamp(26px,3vw,36px)] font-bold leading-tight text-text transition group-hover:text-green">
											{post.title}
										</h2>
										<p class="mt-4 text-[14px] leading-7 text-subtext0">{post.excerpt}</p>
									</div>
									<div class="mt-8 flex flex-wrap gap-2">
										{#each post.tags ?? [] as tag}
											<span class="pill">{tag}</span>
										{/each}
									</div>
								</a>
							</ScrollReveal>
						{/each}
					</div>
				</div>

				{#if data.totalPages > 1}
					<nav class="mt-12 flex items-center justify-between border-t border-surface0 pt-6">
						{#if data.page > 1}
							<a class="flex items-center gap-2 text-green transition hover:text-text" href={`/blog?page=${data.page - 1}`}>
								<ArrowLeft size={16} />
								Newer
							</a>
						{:else}
							<span></span>
						{/if}
						<span class="font-mono text-[12px] text-overlay1">Page {data.page} of {data.totalPages}</span>
						{#if data.page < data.totalPages}
							<a class="flex items-center gap-2 text-green transition hover:text-text" href={`/blog?page=${data.page + 1}`}>
								Older
								<ArrowRight size={16} />
							</a>
						{/if}
					</nav>
				{/if}
			{/if}
		</div>
	</section>
</div>
