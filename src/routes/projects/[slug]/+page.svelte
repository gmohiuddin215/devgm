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
		<a
			href="/#projects"
			class="glass-button mb-12 inline-flex items-center rounded-full px-4 py-2 text-white transition-colors hover:text-white/80"
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
				class="absolute -top-20 -left-20 -z-10 h-64 w-64 rounded-full bg-purple-500/20 blur-[80px]"
			></div>
			<h1 class="mb-8 text-5xl leading-tight font-bold text-white md:text-7xl">{project.title}</h1>
			<p class="max-w-3xl text-2xl leading-relaxed font-light text-white/75">
				{project.description}
			</p>
		</header>

		<div class="grid items-start gap-12 md:grid-cols-[1.5fr_1fr]">
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
						<h2 class="mb-8 flex items-center text-3xl font-bold text-white">
							<span class="mr-4 h-8 w-2 rounded-full bg-gradient-to-b from-cyan-400 to-purple-500"
							></span>
							Overview
						</h2>
						<div class="prose max-w-none text-lg leading-relaxed text-white/75 prose-invert">
							<p>{project.detailedDescription}</p>
						</div>
					</section>
				</div>
			</div>

			<!-- Right Column: App Preview -->
			<div>
				<div class="relative mx-auto max-w-[300px]">
					<!-- iPhone Frame -->
					<div
						class="pointer-events-none absolute inset-0 z-20 rounded-[3rem] border-8 border-gray-900 shadow shadow-white"
					>
						<!-- Notch -->
						<div
							class="absolute top-0 left-1/2 h-6 w-32 -translate-x-1/2 rounded-b-xl bg-gray-900"
						></div>
					</div>

					<!-- Screen Content -->
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

						<!-- Swipe Indicator -->
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

					<!-- Reflection/Glass Effect -->
					<div
						class="pointer-events-none absolute inset-0 z-30 rounded-[3rem] bg-gradient-to-tr from-white/10 to-transparent opacity-50"
					></div>
				</div>
			</div>
		</div>
	</div>
</div>
