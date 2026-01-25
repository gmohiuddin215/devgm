<script>
	export let data;
	const { project } = data;
	let currentScreenshotIndex = 0;
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

			<!-- Right Column: App Preview (Hidden for now) -->
			<!-- 
			<div>
				<div class="relative mx-auto max-w-[300px]">
					<div
						class="pointer-events-none absolute inset-0 z-20 rounded-[3rem] border-8 border-gray-900 shadow shadow-white"
					>
						<div
							class="absolute top-2 left-1/2 h-6 w-20 -translate-x-1/2 rounded-xl bg-gray-900"
						></div>
					</div>
					<div class="relative z-10 aspect-[9/19.5] overflow-hidden rounded-[3rem] bg-gray-900">
						<div
							class="scrollbar-hide flex h-full touch-pan-x snap-x snap-mandatory overflow-x-auto"
							style="scroll-behavior: smooth;"
							on:scroll={(e) => {
								const target = e.currentTarget;
								const scrollLeft = target.scrollLeft;
								const width = target.clientWidth;
								currentScreenshotIndex = Math.round(scrollLeft / width);
							}}
						>
							{#each project.screenshots as screenshot}
								<div class="relative h-full w-full flex-shrink-0 snap-center">
									<img
										src={screenshot}
										alt="App Screenshot"
										class="h-full w-full object-cover"
										draggable="false"
									/>
								</div>
							{/each}
						</div>
						<div
							class="pointer-events-none absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1 rounded-full bg-black/50 px-2 py-1 backdrop-blur-md"
						>
							{#each project.screenshots as _, i}
								<div
									class="h-1.5 w-1.5 rounded-full transition-all duration-300 {i ===
									currentScreenshotIndex
										? 'scale-125 bg-white'
										: 'bg-white/50'}"
								></div>
							{/each}
						</div>
					</div>
					<div
						class="pointer-events-none absolute inset-0 z-30 rounded-[3rem] bg-gradient-to-tr from-white/10 to-transparent opacity-50"
					></div>
				</div>
			</div>
			-->
		</div>
	</div>
</div>
