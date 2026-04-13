<script>
	import { projects, skillCategories, socialLinks, reviews } from '$lib/data';
	import profile from '$lib/assets/profile.png';
	import { onMount } from 'svelte';

	// Dynamically import project screenshots
	const imageModules = import.meta.glob('$lib/assets/**/*.PNG', { eager: true });

	function getImageUrl(screenshotPath) {
		if (!screenshotPath || screenshotPath.startsWith('http')) return screenshotPath;
		const fullPath = `/src/lib/assets/${screenshotPath}`;
		const module = imageModules[fullPath];
		return module ? module.default : screenshotPath;
	}

	// Typewriter effect
	let currentRoleIndex = $state(0);
	let displayText = $state('');
	let isDeleting = $state(false);
	const roles = ['AI Engineer', 'iOS Developer', 'Full-Stack Builder', 'ML Researcher'];

	onMount(() => {
		let timeout;
		const typeSpeed = 80;
		const deleteSpeed = 40;
		const pauseTime = 2000;

		function type() {
			const currentRole = roles[currentRoleIndex];

			if (!isDeleting) {
				displayText = currentRole.substring(0, displayText.length + 1);
				if (displayText === currentRole) {
					timeout = setTimeout(() => {
						isDeleting = true;
						type();
					}, pauseTime);
					return;
				}
			} else {
				displayText = currentRole.substring(0, displayText.length - 1);
				if (displayText === '') {
					isDeleting = false;
					currentRoleIndex = (currentRoleIndex + 1) % roles.length;
				}
			}

			timeout = setTimeout(type, isDeleting ? deleteSpeed : typeSpeed);
		}

		type();

		// Re-observe reveals after mount (layout observer may miss dynamically rendered content)
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('revealed');
					}
				});
			},
			{ threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
		);

		document.querySelectorAll('.reveal, .reveal-scale').forEach((el) => {
			observer.observe(el);
		});

		return () => {
			clearTimeout(timeout);
			observer.disconnect();
		};
	});
</script>

<!-- ════════════════════════════════════════════════════════ -->
<!-- HERO SECTION                                            -->
<!-- ════════════════════════════════════════════════════════ -->
<section id="home" class="relative flex min-h-screen items-center overflow-hidden pb-20 pt-24 lg:pt-2">
	<!-- Ambient Glow Orbs -->
	<div class="pointer-events-none absolute top-1/4 -left-40 h-96 w-96 rounded-full opacity-30 blur-[120px]" style="background: radial-gradient(circle, rgba(0,240,255,0.3), transparent 70%);"></div>
	<div class="pointer-events-none absolute -right-40 bottom-1/4 h-96 w-96 rounded-full opacity-20 blur-[120px]" style="background: radial-gradient(circle, rgba(124,58,237,0.3), transparent 70%);"></div>

	<div class="relative z-10 container mx-auto px-4">
		<div class="mx-auto max-w-5xl">
			<div class="grid items-center gap-16 lg:grid-cols-2">
				<!-- Left: Content -->
				<div>
					<div class="glass-panel mb-8 inline-flex items-center rounded-full border px-5 py-2.5" style="animation: fadeInUp 0.6s ease-out 0.2s both;">
						<span class="mr-3 h-2 w-2 rounded-full bg-emerald-400" style="animation: pulseGlow 2s infinite;"></span>
						<span class="text-sm font-medium tracking-wide text-white/70">Available for new projects</span>
					</div>

					<h1 class="mb-4 font-display text-5xl leading-[1.1] font-bold md:text-7xl" style="animation: fadeInUp 0.6s ease-out 0.3s both;">
						<span class="gradient-text">Ghulam</span><br/>
						<span class="gradient-text">Mohiuddin</span>
					</h1>

					<div class="mb-8 flex items-center gap-2 font-display text-xl md:text-2xl" style="animation: fadeInUp 0.6s ease-out 0.4s both;">
						<span class="text-white/40">I'm a</span>
						<span class="text-glow text-neon-cyan font-semibold">{displayText}</span>
						<span class="inline-block w-0.5 h-7 bg-neon-cyan" style="animation: blink 1s step-end infinite;"></span>
					</div>

					<p class="mb-10 max-w-xl text-lg leading-relaxed text-white/50" style="animation: fadeInUp 0.6s ease-out 0.5s both;">
						Building intelligent systems at the intersection of AI and mobile. 
						Turning complex ML models into seamless, production-ready experiences.
					</p>

					<div class="flex flex-wrap gap-4" style="animation: fadeInUp 0.6s ease-out 0.6s both;">
						<a
							href="#contact"
							class="glass-button-primary group flex items-center gap-2 rounded-full px-8 py-4 font-semibold tracking-wide"
						>
							<span class="relative z-10">Get In Touch</span>
							<svg
								class="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								><path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M17 8l4 4m0 0l-4 4m4-4H3"
								></path></svg
							>
						</a>
						<a href="#projects" class="glass-button rounded-full px-8 py-4 font-medium">
							View My Work
						</a>
					</div>
				</div>

				<!-- Right: AI Code Block -->
				<div class="hidden lg:block" style="animation: fadeInUp 0.8s ease-out 0.5s both;">
					<div class="animated-border-card">
						<div
							class="glass-panel relative rounded-3xl p-6 transition-all duration-700"
						>
							<!-- Window Header -->
							<div class="mb-6 flex items-center justify-between border-b border-white/5 pb-4">
								<div class="flex gap-2">
									<div class="h-3 w-3 rounded-full bg-red-500/80"></div>
									<div class="h-3 w-3 rounded-full bg-yellow-500/80"></div>
									<div class="h-3 w-3 rounded-full bg-green-500/80"></div>
								</div>
								<div class="font-mono text-xs text-white/30">neural_network.py</div>
							</div>

							<!-- Code Content -->
							<div class="space-y-3 font-mono text-sm">
								<div class="flex">
									<span class="w-8 text-white/20 select-none">01</span>
									<p>
										<span class="font-bold text-violet-400">import</span>
										<span class="text-white/80">torch</span>
									</p>
								</div>
								<div class="flex">
									<span class="w-8 text-white/20 select-none">02</span>
									<p>
										<span class="font-bold text-violet-400">import</span>
										<span class="text-white/80">torch.nn</span>
										<span class="font-bold text-violet-400"> as</span>
										<span class="text-white/80"> nn</span>
									</p>
								</div>
								<div class="flex">
									<span class="w-8 text-white/20 select-none">03</span>
									<p>&nbsp;</p>
								</div>
								<div class="flex">
									<span class="w-8 text-white/20 select-none">04</span>
									<p class="text-white/80">
										<span class="font-bold text-violet-400">class</span>
										<span class="text-cyan-300"> Transformer</span>(<span class="text-cyan-300">nn.Module</span>):
									</p>
								</div>
								<div class="flex">
									<span class="w-8 text-white/20 select-none">05</span>
									<p class="pl-4 text-white/80">
										<span class="font-bold text-violet-400">def</span>
										<span class="text-yellow-300"> __init__</span>(<span class="text-orange-400">self</span>):
									</p>
								</div>
								<div class="flex">
									<span class="w-8 text-white/20 select-none">06</span>
									<p class="pl-8 text-white/80">
										<span class="text-orange-400">self</span>.attention =
										<span class="text-cyan-300">nn</span>.MultiheadAttention(
									</p>
								</div>
								<div class="flex">
									<span class="w-8 text-white/20 select-none">07</span>
									<p class="pl-12 text-white/80">
										embed_dim=<span class="text-emerald-400">512</span>,
										num_heads=<span class="text-emerald-400">8</span>
									</p>
								</div>
								<div class="flex">
									<span class="w-8 text-white/20 select-none">08</span>
									<p class="pl-8 text-white/80">)</p>
								</div>
								<div class="flex">
									<span class="w-8 text-white/20 select-none">09</span>
									<p class="pl-4 text-white/80">
										<span class="font-bold text-violet-400">def</span>
										<span class="text-yellow-300"> forward</span>(<span class="text-orange-400">self</span>, x):
									</p>
								</div>
								<div class="flex">
									<span class="w-8 text-white/20 select-none">10</span>
									<p class="pl-8 text-white/80">
										<span class="font-bold text-violet-400">return</span>
										<span class="text-orange-400"> self</span>.attention(x, x, x)
									</p>
								</div>
							</div>

							<!-- Glow effect -->
							<div class="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-tr from-neon-cyan/5 to-neon-violet/5"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- ════════════════════════════════════════════════════════ -->
<!-- ABOUT SECTION                                           -->
<!-- ════════════════════════════════════════════════════════ -->
<section id="about" class="relative py-32">
	<div class="relative z-10 container mx-auto px-4">
		<div class="flex flex-col items-center gap-16 md:flex-row">
			<!-- Profile Image -->
			<div class="md:w-5/12 reveal">
				<div class="group relative">
					<!-- Animated glow ring -->
					<div
						class="absolute -inset-4 rounded-2xl opacity-40 blur-xl transition duration-500 group-hover:opacity-70"
						style="background: linear-gradient(135deg, rgba(0,240,255,0.3), rgba(124,58,237,0.3));"
					></div>
					<div class="glass-panel relative overflow-hidden rounded-2xl p-2">
						<img
							src={profile}
							alt="Ghulam Mohiuddin"
							class="h-auto w-full transform rounded-xl transition duration-700 group-hover:scale-105"
						/>
					</div>
				</div>
			</div>

			<!-- About Content -->
			<div class="md:w-7/12">
				<h2 class="mb-2 font-display text-sm font-semibold uppercase tracking-widest text-neon-cyan/70 reveal">About Me</h2>
				<h3 class="mb-8 font-display text-4xl font-bold md:text-5xl reveal reveal-delay-1">
					<span class="gradient-text-subtle">From iOS to AI</span>
				</h3>
				<p class="mb-6 text-lg leading-relaxed text-white/50 reveal reveal-delay-2">
					I'm Ghulam Mohiuddin — a developer who spent 4+ years mastering iOS engineering with Swift & SwiftUI, 
					and is now channeling that expertise into AI Engineering. I'm building at the intersection of 
					intelligent systems and beautiful user experiences.
				</p>
				<p class="mb-10 text-lg leading-relaxed text-white/50 reveal reveal-delay-3">
					My journey spans from crafting AR experiences with RealityKit to building RAG pipelines with LangChain, 
					from shipping apps to millions on the App Store to training ML models with PyTorch. 
					I believe the best AI products are the ones people actually love to use.
				</p>

				<!-- Skill Categories -->
				<div class="space-y-6">
					{#each skillCategories as cat, i}
						<div class="reveal" style="transition-delay: {0.3 + i * 0.1}s;">
							<div class="mb-3 flex items-center gap-3">
								<span class="text-xl">{cat.icon}</span>
								<h4 class="font-display text-sm font-semibold uppercase tracking-wider text-white/60">{cat.category}</h4>
							</div>
							<div class="flex flex-wrap gap-2">
								{#each cat.skills as skill}
									<span
										class="glass-button rounded-full px-4 py-1.5 text-xs font-medium text-white/70 transition-colors hover:text-white"
									>
										{skill}
									</span>
								{/each}
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<!-- ════════════════════════════════════════════════════════ -->
<!-- PROJECTS SECTION                                        -->
<!-- ════════════════════════════════════════════════════════ -->
<section id="projects" class="relative py-32">
	<div class="relative z-10 container mx-auto px-4">
		<div class="mb-20 text-center">
			<h2 class="mb-2 font-display text-sm font-semibold uppercase tracking-widest text-neon-cyan/70 reveal">Portfolio</h2>
			<h3 class="mb-6 font-display text-4xl font-bold md:text-5xl reveal reveal-delay-1">
				<span class="gradient-text-subtle">Selected Work</span>
			</h3>
			<p class="mx-auto max-w-2xl text-white/40 reveal reveal-delay-2">
				A collection of projects showcasing my journey through iOS development and AI engineering.
			</p>
		</div>

		<div class="grid gap-8 md:grid-cols-2">
			{#each projects as project, i}
				<div class="reveal" style="transition-delay: {i * 0.08}s;">
					<div class="animated-border-card group">
						<div
							class="glass-panel-hover relative flex h-full flex-col rounded-3xl p-8"
						>
							<!-- Content row: Text left, Screenshot preview right -->
							<div class="mb-6 flex gap-6">
								<!-- Left: Title, description, tags -->
								<div class="flex flex-1 flex-col min-w-0">
									<div class="mb-3">
										<div class="rounded-full px-3 py-1 font-mono text-xs text-neon-cyan/60 inline-block" style="background: rgba(0,240,255,0.06); border: 1px solid rgba(0,240,255,0.1);">
											iOS App
										</div>
									</div>

									<h3 class="mb-3 font-display text-2xl font-bold text-white transition-colors">
										{project.title}
									</h3>

									<p class="mb-4 flex-1 leading-relaxed text-white/40 text-sm">
										{project.description}
									</p>

									<div class="flex flex-wrap gap-2">
										{#each project.technologies.slice(0, 3) as tech}
											<span
												class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/50"
											>
												{tech}
											</span>
										{/each}
										{#if project.technologies.length > 3}
											<span
												class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/50"
												>+{project.technologies.length - 3}</span
											>
										{/if}
									</div>
								</div>

								<!-- Right: Screenshot preview -->
								{#if project.screenshots && project.screenshots.length > 0 && !project.screenshots[0].startsWith('http')}
									<div class="hidden sm:block w-28 shrink-0 self-center">
										<div class="overflow-hidden rounded-xl border border-white/5 shadow-lg shadow-black/20 bg-black/50">
											<img
												src={getImageUrl(project.screenshots[0])}
												alt="{project.title} preview"
												class="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
												loading="lazy"
											/>
										</div>
									</div>
								{/if}
							</div>

							<!-- Button -->
							<a
								href="/projects/{project.slug}"
								class="glass-button flex w-full items-center justify-center gap-2 rounded-xl py-3 text-center font-medium text-white/70 transition-all hover:text-white"
							>
								View Case Study
								<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"
									><path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M9 5l7 7-7 7"
									></path></svg
								>
							</a>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ════════════════════════════════════════════════════════ -->
<!-- REVIEWS SECTION                                         -->
<!-- ════════════════════════════════════════════════════════ -->
<section id="reviews" class="relative py-32">
	<div class="relative z-10 container mx-auto px-4">
		<div class="mb-20 text-center">
			<h2 class="mb-2 font-display text-sm font-semibold uppercase tracking-widest text-neon-cyan/70 reveal">Testimonials</h2>
			<h3 class="mb-6 font-display text-4xl font-bold md:text-5xl reveal reveal-delay-1">
				<span class="gradient-text-subtle">Client Reviews</span>
			</h3>
			<p class="mx-auto max-w-2xl text-white/40 reveal reveal-delay-2">What people are saying about working with me.</p>
		</div>

		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
			{#each reviews as review, i}
				<div class="reveal" style="transition-delay: {i * 0.1}s;">
					<div class="animated-border-card group">
						<div
							class="glass-panel-hover relative flex h-full flex-col rounded-3xl p-8"
						>
							<!-- Quote mark -->
							<div class="mb-6 font-display text-4xl text-neon-cyan/20">"</div>
							
							<p class="mb-8 flex-1 leading-relaxed text-white/50 italic">
								{review.text}
							</p>

							<div class="flex items-center gap-4 border-t border-white/5 pt-6">
								<img
									src={review.image}
									alt={review.name}
									class="h-12 w-12 rounded-full border border-white/10"
								/>
								<div>
									<h4 class="font-display font-bold text-white">{review.name}</h4>
									<p class="text-xs text-white/40">{review.role} at {review.company}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ════════════════════════════════════════════════════════ -->
<!-- CONTACT SECTION                                         -->
<!-- ════════════════════════════════════════════════════════ -->
<section id="contact" class="relative py-32">
	<div class="relative z-10 container mx-auto px-4">
		<div class="mb-20 text-center">
			<h2 class="mb-2 font-display text-sm font-semibold uppercase tracking-widest text-neon-cyan/70 reveal">Contact</h2>
			<h3 class="mb-6 font-display text-4xl font-bold md:text-5xl reveal reveal-delay-1">
				<span class="gradient-text-subtle">Let's Build Together</span>
			</h3>
			<p class="mx-auto max-w-2xl text-white/40 reveal reveal-delay-2">
				Looking for an AI engineer or iOS developer? Let's talk — I'm always 
				excited about new challenges and collaborations.
			</p>
		</div>

		<div class="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			<!-- Fiverr -->
			<a
				href={socialLinks.fiverr}
				target="_blank"
				rel="noopener noreferrer"
				class="reveal group"
				style="transition-delay: 0.1s;"
			>
				<div class="animated-border-card">
					<div class="glass-panel-hover relative flex flex-col items-center justify-center gap-4 rounded-3xl p-8 text-center">
						<div
							class="flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110"
							style="background: rgba(29,191,115,0.1); border: 1px solid rgba(29,191,115,0.15);"
						>
							<svg
								class="h-8 w-8"
								fill="#1DBF73"
								viewBox="-2.5 -2 24 24"
								xmlns="http://www.w3.org/2000/svg"
								preserveAspectRatio="xMinYMin"
							>
								<path
									d="M16.25 16.25v-10h-10v-.625c0-1.034.841-1.875 1.875-1.875H10V0H8.125A5.632 5.632 0 0 0 2.5 5.625v.625H0V10h2.5v6.25H0V20h8.75v-3.75h-2.5V10h6.285v6.25H10V20h8.75v-3.75h-2.5z"
								/>
								<circle cx="14.375" cy="1.875" r="1.875" />
							</svg>
						</div>
						<div>
							<h3 class="mb-1 font-display text-lg font-bold text-white">Fiverr</h3>
							<p class="text-sm text-white/30">Hire me for gigs</p>
						</div>
					</div>
				</div>
			</a>

			<!-- Upwork -->
			<a
				href={socialLinks.upwork}
				target="_blank"
				rel="noopener noreferrer"
				class="reveal group"
				style="transition-delay: 0.15s;"
			>
				<div class="animated-border-card">
					<div class="glass-panel-hover relative flex flex-col items-center justify-center gap-4 rounded-3xl p-8 text-center">
						<div
							class="flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110"
							style="background: rgba(20,168,0,0.1); border: 1px solid rgba(20,168,0,0.15);"
						>
							<svg
								class="h-8 w-8"
								fill="#14a800"
								viewBox="0 0 32 32"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M24.75 17.542c-1.469 0-2.849-0.62-4.099-1.635l0.302-1.432 0.010-0.057c0.276-1.521 1.13-4.078 3.786-4.078 1.99 0 3.604 1.615 3.604 3.604 0 1.984-1.615 3.599-3.604 3.599zM24.75 6.693c-3.385 0-6.016 2.198-7.083 5.818-1.625-2.443-2.865-5.38-3.583-7.854h-3.646v9.484c-0.005 1.875-1.521 3.391-3.396 3.396-1.875-0.005-3.391-1.526-3.396-3.396v-9.484h-3.646v9.484c0 3.885 3.161 7.068 7.042 7.068 3.885 0 7.042-3.182 7.042-7.068v-1.589c0.708 1.474 1.578 2.974 2.635 4.297l-2.234 10.495h3.729l1.62-7.615c1.417 0.906 3.047 1.479 4.917 1.479 4 0 7.25-3.271 7.25-7.266 0-4-3.25-7.25-7.25-7.25z"
								/>
							</svg>
						</div>
						<div>
							<h3 class="mb-1 font-display text-lg font-bold text-white">Upwork</h3>
							<p class="text-sm text-white/30">Professional contracts</p>
						</div>
					</div>
				</div>
			</a>

			<!-- LinkedIn -->
			<a
				href={socialLinks.linkedin}
				target="_blank"
				rel="noopener noreferrer"
				class="reveal group"
				style="transition-delay: 0.2s;"
			>
				<div class="animated-border-card">
					<div class="glass-panel-hover relative flex flex-col items-center justify-center gap-4 rounded-3xl p-8 text-center">
						<div
							class="flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110"
							style="background: rgba(0,119,181,0.1); border: 1px solid rgba(0,119,181,0.15);"
						>
							<svg class="h-8 w-8" fill="#0077B5" viewBox="0 0 24 24">
								<path
									d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
								/>
							</svg>
						</div>
						<div>
							<h3 class="mb-1 font-display text-lg font-bold text-white">LinkedIn</h3>
							<p class="text-sm text-white/30">Connect professionally</p>
						</div>
					</div>
				</div>
			</a>

			<!-- GitHub -->
			<a
				href={socialLinks.github}
				target="_blank"
				rel="noopener noreferrer"
				class="reveal group"
				style="transition-delay: 0.25s;"
			>
				<div class="animated-border-card">
					<div class="glass-panel-hover relative flex flex-col items-center justify-center gap-4 rounded-3xl p-8 text-center">
						<div
							class="flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110"
							style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.08);"
						>
							<svg class="h-8 w-8" fill="white" viewBox="0 0 24 24">
								<path
									fill-rule="evenodd"
									d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
						<div>
							<h3 class="mb-1 font-display text-lg font-bold text-white">GitHub</h3>
							<p class="text-sm text-white/30">Check my code</p>
						</div>
					</div>
				</div>
			</a>

			<!-- Contra -->
			<a
				href={socialLinks.contra}
				target="_blank"
				rel="noopener noreferrer"
				class="reveal group"
				style="transition-delay: 0.3s;"
			>
				<div class="animated-border-card">
					<div class="glass-panel-hover relative flex flex-col items-center justify-center gap-4 rounded-3xl p-8 text-center">
						<div
							class="flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110"
							style="background: rgba(255,190,11,0.1); border: 1px solid rgba(255,190,11,0.15);"
						>
							<svg class="h-8 w-8" viewBox="0 0 24 24" fill="#FFBE0B">
								<path d="M12 2C10.5 7 7 10.5 2 12C7 13.5 10.5 17 12 22C13.5 17 17 13.5 22 12C17 10.5 13.5 7 12 2Z"/>
							</svg>
						</div>
						<div>
							<h3 class="mb-1 font-display text-lg font-bold text-white">Contra</h3>
							<p class="text-sm text-white/30">Commission-free hiring</p>
						</div>
					</div>
				</div>
			</a>

			<!-- Email -->
			<a
				href={socialLinks.email}
				class="reveal group"
				style="transition-delay: 0.35s;"
			>
				<div class="animated-border-card">
					<div class="glass-panel-hover relative flex flex-col items-center justify-center gap-4 rounded-3xl p-8 text-center">
						<div
							class="flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110"
							style="background: rgba(124,58,237,0.1); border: 1px solid rgba(124,58,237,0.15);"
						>
							<svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="#7c3aed">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
								/>
							</svg>
						</div>
						<div>
							<h3 class="mb-1 font-display text-lg font-bold text-white">Email</h3>
							<p class="text-sm text-white/30">g.mohiuddin215@gmail.com</p>
						</div>
					</div>
				</div>
			</a>
		</div>
	</div>
</section>
