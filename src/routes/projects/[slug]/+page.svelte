<script>
	export let data;
	const { project } = data;
	let currentScreenshotIndex = 0;
	
	// Lightbox state
	let lightboxOpen = false;
	let lightboxIndex = 0;

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
	
	// Lightbox functions
	function openLightbox(index) {
		lightboxIndex = index;
		lightboxOpen = true;
		document.body.style.overflow = 'hidden';
	}
	
	function closeLightbox() {
		lightboxOpen = false;
		document.body.style.overflow = '';
	}
	
	function nextImage() {
		if (lightboxIndex < project.screenshots.length - 1) {
			lightboxIndex++;
		}
	}
	
	function prevImage() {
		if (lightboxIndex > 0) {
			lightboxIndex--;
		}
	}
	
	function handleKeydown(event) {
		if (!lightboxOpen) return;
		
		if (event.key === 'Escape') {
			closeLightbox();
		} else if (event.key === 'ArrowRight') {
			nextImage();
		} else if (event.key === 'ArrowLeft') {
			prevImage();
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

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
							<button
								type="button"
								on:click={() => openLightbox(i)}
								class="group relative overflow-hidden rounded-2xl bg-gray-800/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 cursor-pointer border-0"
							>
								<img
									src={getImageUrl(screenshot)}
									alt="App Screenshot {i + 1}"
									class="h-auto w-full object-contain"
									loading="lazy"
								/>
								<!-- Hover overlay -->
								<div class="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
									<svg class="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
									</svg>
								</div>
							</button>
						{/each}
					</div>
				</section>
			{/if}
		</div>
	</div>
</div>

<!-- Lightbox Modal -->
{#if lightboxOpen}
	<div
		class="fixed inset-0 z-50 flex items-center justify-center"
		on:click={closeLightbox}
		on:keydown={(e) => e.key === 'Escape' && closeLightbox()}
		role="dialog"
		aria-modal="true"
		tabindex="-1"
	>
		<!-- Backdrop with blur -->
		<div class="absolute inset-0 bg-black/20 backdrop-blur-xl"></div>
		
		<!-- Close button -->
		<button
			type="button"
			on:click={closeLightbox}
			class="glass-panel absolute top-6 right-6 z-10 rounded-full bg-white/10 p-3 text-white transition-all hover:bg-white/20 hover:scale-110"
		>
			<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
			</svg>
		</button>
		
		<!-- Image counter -->
		<div class="glass-panel absolute top-6 left-6 z-10 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
			{lightboxIndex + 1} / {project.screenshots.length}
		</div>
		
		<!-- Previous button -->
		{#if lightboxIndex > 0}
			<button
				type="button"
				on:click|stopPropagation={prevImage}
				class="glass-panel absolute left-4 z-10 rounded-full bg-white/10 p-4 text-white transition-all hover:bg-white/20 hover:scale-110 md:left-8"
			>
				<svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
				</svg>
			</button>
		{/if}
		
		<!-- Next button -->
		{#if lightboxIndex < project.screenshots.length - 1}
			<button
				type="button"
				on:click|stopPropagation={nextImage}
				class="glass-panel absolute right-4 z-10 rounded-full bg-white/10 p-4 text-white transition-all hover:bg-white/20 hover:scale-110 md:right-8"
			>
				<svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
				</svg>
			</button>
		{/if}
		
		<!-- Image container -->
		<div
			class="relative z-0 flex max-h-[90vh] max-w-[90vw] items-center justify-center"
			on:click|stopPropagation
			on:keydown|stopPropagation
			role="img"
			tabindex="-1"
		>
			<img
				src={getImageUrl(project.screenshots[lightboxIndex])}
				alt="App Screenshot {lightboxIndex + 1}"
				class="max-h-[90vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl"
			/>
		</div>
	</div>
{/if}
