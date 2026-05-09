<script lang="ts">
	import { Edit3, LogOut, Plus, RadioTower } from 'lucide-svelte';

	let { data } = $props();

	function formatDate(value: string | null) {
		if (!value) return 'Not published';
		return new Intl.DateTimeFormat('en', {
			month: 'short',
			day: 'numeric',
			year: 'numeric'
		}).format(new Date(value));
	}
</script>

<svelte:head>
	<title>Admin | Blog</title>
</svelte:head>

<div class="pt-[70px]">
	<section class="py-[80px]">
		<div class="mx-auto max-w-[1200px] px-6 lg:px-14">
			<div class="flex flex-col gap-6 border-b border-surface0 pb-8 md:flex-row md:items-end md:justify-between">
				<div>
					<span class="mb-4 block font-mono text-[13px] tracking-[0.12em] text-green">
						// Publishing desk
					</span>
					<h1 class="font-display text-[clamp(44px,6vw,82px)] font-extrabold leading-[0.94] tracking-[-0.04em] text-text">
						Blog admin
					</h1>
				</div>
				<div class="flex flex-wrap gap-3">
					<a
						href="/admin/posts/new"
						class="inline-flex items-center gap-2 rounded-md bg-green px-4 py-3 font-mono text-[12px] font-bold uppercase tracking-[0.12em] text-crust transition hover:brightness-110"
					>
						<Plus size={16} />
						New post
					</a>
					<a
						href="/admin/logout"
						class="inline-flex items-center gap-2 rounded-md border border-surface1 px-4 py-3 font-mono text-[12px] uppercase tracking-[0.12em] text-subtext1 transition hover:border-red hover:text-red"
					>
						<LogOut size={16} />
						Log out
					</a>
				</div>
			</div>

			<div class="mt-8 overflow-hidden rounded-lg border border-surface0 bg-mantle/70">
				{#if data.posts.length === 0}
					<div class="p-8">
						<RadioTower size={30} class="text-green" />
						<h2 class="mt-5 font-display text-3xl font-bold text-text">No posts yet.</h2>
						<p class="mt-3 max-w-[560px] text-[15px] leading-7 text-subtext0">
							Create the first draft and shape the blog from there.
						</p>
					</div>
				{:else}
					<div class="divide-y divide-surface0">
						{#each data.posts as post}
							<a
								href={`/admin/posts/${post.id}/edit`}
								class="grid gap-4 p-5 transition hover:bg-surface0/35 md:grid-cols-[1fr_140px_120px_44px] md:items-center"
							>
								<div>
									<div class="mb-2 flex flex-wrap gap-2">
										<span class="rounded-full border border-surface1 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-subtext1">
											{post.status}
										</span>
										{#each post.tags ?? [] as tag}
											<span class="rounded-full border border-green/25 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-green">
												{tag}
											</span>
										{/each}
									</div>
									<h2 class="font-display text-2xl font-bold text-text">{post.title}</h2>
									<p class="mt-2 line-clamp-2 text-sm leading-6 text-subtext0">{post.excerpt}</p>
								</div>
								<span class="font-mono text-[12px] text-overlay1">{formatDate(post.published_at)}</span>
								<span class="font-mono text-[12px] text-overlay1">{post.reading_time} min read</span>
								<span class="flex h-10 w-10 items-center justify-center rounded-md border border-surface1 text-green">
									<Edit3 size={16} />
								</span>
							</a>
						{/each}
					</div>
				{/if}
			</div>
		</div>
	</section>
</div>
