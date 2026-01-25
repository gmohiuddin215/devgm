<script>
	export let data;
	const { project } = data;
	let currentScreenshotIndex = 0;

	// Dynamically import images from assets folder
	const imageModules = import.meta.glob('$lib/assets/**/*.PNG', { eager: true });
	
	function getImageUrl(screenshotPath) {
		// Check if it's a full URL (placeholder or external)
		if (screenshotPath.startsWith('http')) {
			return screenshotPath;
		}
		// Build the full import path
		const fullPath = `/src/lib/assets/${screenshotPath}`;
		const module = imageModules[fullPath];
		return module ? module.default : screenshotPath;
	}
</script>

<svelte:head>
	<title>{project.title} | Case Study</title>
</svelte:head>

<div class="min-h-screen pt-32 pb-20">
	<div class="container mx-auto max-w-5xl px-4">
		<header class="relative mb-16">
			<div
				class="absolute -top-20 -left-20 -z-10 h-64 w-64 rounded-full bg-purple-500/20 blur-[80px]"
			></div>
			<h1 class="mb-8 text-5xl leading-tight font-bold text-white md:text-7xl">{project.title}</h1>
			<p class="max-w-3xl text-2xl leading-relaxed font-light text-white/75">
				{project.description}
			</p>
		</header>

		<div class="grid items-start gap-12">
			<!-- Left Column: Role/Techs + Overview -->
			<div class="space-y-20">
				<!-- Role & Techs (Original Structure) -->
				<div class="grid gap-8 md:grid-cols-3">
					<div class="glass-panel rounded-3xl border border-cyan-500/1 bg-cyan-500/10 p-8">
						<h3 class="mb-4 text-xs font-bold tracking-widest text-white uppercase">Role</h3>
						<p class="text-lg font-medium text-white">Senior iOS Developer</p>
					</div>
					<div
						class="glass-panel rounded-3xl border border-cyan-500/10 bg-cyan-500/10 p-8 md:col-span-2"
					>
						<h3 class="mb-6 text-xs font-bold tracking-widest text-white uppercase">
							Technologies
						</h3>
						<div class="flex flex-wrap gap-3">
							{#each project.technologies as tech}
								<span class="glass-button rounded-full px-4 py-2 text-sm text-white">
									{tech}
								</span>
							{/each}
						</div>
					</div>
				</div>

				<!-- Overview -->
				<div class="space-y-16">
					<section class="glass-panel rounded-3xl border border-white/5 p-8">
						<h2 class="mb-8 text-2xl font-bold text-white">Overview</h2>
						<div class="prose max-w-none text-lg leading-relaxed text-white/75 prose-invert">
							<p>{project.detailedDescription}</p>
						</div>
					</section>

					{#if project.appStoreUrl}
						<a
							href={project.appStoreUrl}
							target="_blank"
							rel="noopener noreferrer"
							class="glass-button-primary group inline-flex items-center gap-3 rounded-full px-8 py-4 font-semibold tracking-wide transition-all hover:scale-105"
						>
							<svg class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
								<path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
							</svg>
							Download on App Store
							<svg
								class="h-5 w-5 transition-transform group-hover:translate-x-1"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M17 8l4 4m0 0l-4 4m4-4H3"
								></path>
							</svg>
						</a>
					{/if}
				</div>
			</div>

			<!-- Screenshots Gallery -->
			{#if project.screenshots && project.screenshots.length > 0 && !project.screenshots[0].startsWith('http')}
				<section class="mt-16">
					<h2 class="mb-8 text-2xl font-bold text-white">App Screenshots</h2>
					<div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
						{#each project.screenshots as screenshot, i}
							<div class="group relative overflow-hidden rounded-2xl bg-gray-800/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
								<img
									src={getImageUrl(screenshot)}
									alt="App Screenshot {i + 1}"
									class="h-auto w-full object-contain"
									loading="lazy"
								/>
							</div>
						{/each}
					</div>
				</section>
			{/if}
		</div>
	</div>
</div>
