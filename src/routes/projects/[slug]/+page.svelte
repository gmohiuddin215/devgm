<script>
	export let data;
	const { project } = data;
</script>

<svelte:head>
	<title>{project.title} | Case Study</title>
</svelte:head>

<div class="min-h-screen pb-20 pt-32">
	<div
		class="absolute -inset-0.5 h-full w-full bg-gradient-to-r from-green-500 via-cyan-500 to-purple-500 opacity-20"
	></div>
	<div class="container mx-auto max-w-5xl px-4">
		<a
			href="/#projects"
			class="glass-button mb-12 inline-flex items-center rounded-full px-4 py-2 text-purple-500 transition-colors hover:text-purple-300"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="mr-2 h-5 w-5"
				viewBox="0 0 20 20"
				fill="currentColor"
			>
				<path
					fill-rule="evenodd"
					d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
					clip-rule="evenodd"
				/>
			</svg>
			Back to Projects
		</a>

		<header class="relative mb-16">
			<div
				class="absolute -left-20 -top-20 -z-10 h-64 w-64 rounded-full bg-purple-500/20 blur-[80px]"
			></div>
			<h1 class="mb-8 text-5xl font-bold leading-tight text-black md:text-7xl">{project.title}</h1>
			<p class="max-w-3xl text-2xl font-light leading-relaxed text-black/75">
				{project.description}
			</p>
		</header>

		<div class="mb-20 grid gap-8 md:grid-cols-3">
			<div class="glass-panel rounded-3xl border border-green-500/1 bg-green-500/10 p-8">
				<h3 class="mb-4 text-xs font-bold uppercase tracking-widest text-purple-400">Role</h3>
				<p class="text-lg font-medium text-green-500">Senior iOS Developer</p>
			</div>
			<div class="glass-panel rounded-3xl border border-green-500/10 bg-green-500/10 p-8 md:col-span-2">
				<h3 class="mb-6 text-xs font-bold uppercase tracking-widest text-purple-400">Technologies</h3>
				<div class="flex flex-wrap gap-3">
					{#each project.technologies as tech}
						<span class="glass-button rounded-full text-sm text-green-500">
							{tech}
						</span>
					{/each}
				</div>
			</div>
		</div>

		<div class="space-y-16">
			<section class="glass-panel rounded-3xl border border-white/5">
				<h2 class="mb-8 flex items-center text-3xl font-bold text-black">
					<span class="mr-4 h-8 w-2 rounded-full bg-gradient-to-b from-green-500 to-purple-500"
					></span>
					Overview
				</h2>
				<div class="prose prose-invert max-w-none text-lg leading-relaxed text-black/75">
					<p>{project.detailedDescription}</p>
				</div>
			</section>
		</div>
	</div>
</div>
