<script>
	import { projects, skills, socialLinks, reviews } from '$lib/data';
	import profile from '$lib/assets/profile.png';
</script>

<!-- Hero Section -->
<div class="group relative">
	<section id="home" class="relative flex min-h-screen items-center overflow-hidden pb-20 pt-12 lg:pt-2">
		<div class="relative z-10 container mx-auto px-4">
			<div class="mx-auto max-w-6xl">
				<div class="grid items-center gap-16 md:grid-cols-2">
					<div>
						<div class="glass-panel mb-8 inline-flex items-center rounded-full border px-4 py-2">
							<span class="mr-3 h-2 w-2 animate-pulse rounded-full bg-green-500"></span>
							<span class="text-sm font-medium tracking-wide">Available for new projects</span>
						</div>

						<h1 class="mb-8 text-5xl leading-tight font-bold md:text-7xl">
							Building <br />
							iOS Apps
						</h1>

						<p class="mb-10 max-w-xl text-xl leading-relaxed font-light text-white/75">
							Senior iOS Developer crafting futuristic, high-performance applications with Swift &
							SwiftUI. Turning complex ideas into seamless, fluid realities.
						</p>

						<div class="flex flex-wrap gap-6">
							<a
								href="#contact"
								class="glass-button-primary group flex items-center gap-2 rounded-full px-8 py-4 font-semibold tracking-wide"
							>
								Get In Touch
								<svg
									class="h-5 w-5 transition-transform group-hover:translate-x-1"
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

					<div class="perspective-1000 relative hidden md:block">
						<div
							class="glass-panel group relative rotate-x-6 rotate-y-16 transform rounded-3xl bg-gray-900 p-6 shadow-2xl transition-all duration-700 hover:rotate-x-0 hover:rotate-y-0"
						>
							<!-- Decorative header -->
							<div class="mb-6 flex items-center justify-between border-b border-white/5 pb-4">
								<div class="flex gap-2">
									<div class="h-3 w-3 rounded-full bg-red-500"></div>
									<div class="h-3 w-3 rounded-full bg-yellow-500"></div>
									<div class="h-3 w-3 rounded-full bg-green-500"></div>
								</div>
								<div class="font-mono text-xs text-white/50">Portfolio.swift</div>
							</div>

							<!-- Code content -->
							<div class="space-y-4 font-mono text-sm">
								<div class="flex">
									<span class="w-8 text-white/50">01</span>
									<p class="font-bold text-pink-400">
										import <span class="font-normal text-white">SwiftUI</span>
									</p>
								</div>
								<div class="flex">
									<span class="w-8 text-white/50">02</span>
									<p>&nbsp;</p>
								</div>
								<div class="flex">
									<span class="w-8 text-white/50">03</span>
									<p class="text-white">
										<span class="font-bold text-pink-400">struct</span>
										<span class="text-cyan-300">Developer</span>:
										<span class="text-white">View</span> &#123;
									</p>
								</div>
								<div class="flex">
									<span class="w-8 text-white/50">04</span>
									<p class="pl-4 font-normal text-white">
										<span class="font-bold text-pink-400">let</span> name =
										<span class="text-orange-400">"Ghulam"</span>
									</p>
								</div>
								<div class="flex">
									<span class="w-8 text-white/50">05</span>
									<p class="pl-4 font-normal text-white">
										<span class="font-bold text-pink-400">let</span> role =
										<span class="text-orange-400">"Senior iOS Dev"</span>
									</p>
								</div>
								<div class="flex">
									<span class="w-8 text-white/50">06</span>
									<p class="pl-4 font-normal text-white">
										<span class="font-bold text-pink-400">var</span>
										<span class="text-cyan-400">body</span>:
										<span class="font-bold text-pink-400">some</span>
										<span class="text-purple-300">View</span> &#123;
									</p>
								</div>
								<div class="flex">
									<span class="w-8 text-white/50">07</span>
									<p class="pl-8 font-normal text-white">
										<span class="text-purple-300">Text</span>(<span class="text-orange-400"
											>"Hello, World!"</span
										>)
									</p>
								</div>
								<div class="flex">
									<span class="w-8 text-white/50">08</span>
									<p class="pl-12 text-purple-500">.font(.largeTitle)</p>
								</div>
								<div class="flex">
									<span class="w-8 text-white/50">09</span>
									<p class="pl-12 text-purple-500">.glassEffect()</p>
								</div>
								<div class="flex">
									<span class="w-8 text-white/50">10</span>
									<p class="pl-4 text-white">&#125;</p>
								</div>
							</div>

							<!-- Glow effect behind code -->
							<div
								class="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-tr from-purple-500/10 to-purple-500/10"
							></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>

<!-- About Section -->
<section id="about" class="relative py-32">
	<div class="relative z-10 container mx-auto px-4">
		<div class="flex flex-col items-center gap-16 md:flex-row">
			<div class="md:w-1/2">
				<div class="group relative">
					<div
						class="absolute -inset-4 rounded-2xl bg-gradient-to-r from-green-500 to-purple-600 opacity-30 blur-xl transition duration-500 group-hover:opacity-60"
					></div>
					<div class="glass-panel relative overflow-hidden rounded-2xl p-2">
						<img
							src={profile}
							alt="Profile"
							class="h-auto w-full transform rounded-xl transition duration-700 group-hover:scale-105"
						/>
					</div>
				</div>
			</div>
			<div class="md:w-1/2">
				<h2 class="mb-8 flex items-center gap-4 text-5xl font-bold">About Me</h2>
				<p class="mb-6 text-lg leading-relaxed">
					Hello! I'm Ghulam Mohiuddin, a passionate iOS developer with over 4 years of experience in
					creating beautiful and functional applications. I specialize in Swift, SwiftUI, and modern
					iOS frameworks.
				</p>
				<p class="mb-8 text-lg leading-relaxed">
					I have extensive experience with advanced technologies like SceneKit, RealityKit, and
					integrating AI solutions using the ChatGPT API. My goal is to build products that are not
					only visually appealing but also provide real value to users through innovative features
					and seamless performance.
				</p>

				<h3 class="mb-6 text-xl font-bold text-white/90">Tech Stack</h3>
				<div class="flex flex-wrap gap-3">
					{#each skills as skill}
						<div
							class="glass-button rounded-full border border-white px-4 py-2 text-sm text-white transition-colors hover:border-white hover:text-white"
						>
							{skill.name}
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Projects Section -->
<section id="projects" class="relative py-32">
	<div class="relative z-10 container mx-auto px-4">
		<div class="mb-20 text-center">
			<h2 class="mb-6 text-4xl font-bold md:text-5xl">Selected Works</h2>
			<p class="mx-auto max-w-2xl text-white/75">
				A collection of projects that showcase my passion for design and engineering.
			</p>
		</div>

		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each projects as project}
				<div class="group relative">
					<div
						class="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 blur transition duration-500 group-hover:opacity-50"
					></div>
					<div
						class="glass-panel relative flex h-full flex-col rounded-3xl p-8 transition-transform duration-500 hover:-translate-y-2"
					>
						<div class="mb-6 flex items-start justify-between">
							<div class="rounded-2xl bg-white/10 p-3 text-white">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-8 w-8"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="1.5"
										d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
									/>
								</svg>
							</div>
							<div class="rounded-full bg-white/10 px-3 py-1 font-mono text-xs text-white">
								iOS App
							</div>
						</div>

						<h3 class="mb-3 text-2xl font-bold text-white transition-colors">
							{project.title}
						</h3>

						<p class="mb-6 flex-1 leading-relaxed text-white/75">
							{project.description}
						</p>

						<div class="mb-8 flex flex-wrap gap-2">
							{#each project.technologies.slice(0, 3) as tech}
								<span
									class="rounded-full border border-white/50 bg-white/20 px-3 py-1 text-xs font-medium text-white"
								>
									{tech}
								</span>
							{/each}
							{#if project.technologies.length > 3}
								<span
									class="rounded-full border border-white/50 bg-white/20 px-3 py-1 text-xs font-medium text-white"
									>+{project.technologies.length - 3}</span
								>
							{/if}
						</div>

						<a
							href="/projects/{project.slug}"
							class="glass-button flex w-full items-center justify-center gap-2 rounded-xl bg-white/10 py-3 text-center font-medium text-white transition-all"
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
			{/each}
		</div>
	</div>
</section>

<!-- Reviews Section -->
<section id="reviews" class="relative py-32">
	<div class="relative z-10 container mx-auto px-4">
		<div class="mb-20 text-center">
			<h2 class="mb-6 text-4xl font-bold md:text-5xl">Client Reviews</h2>
			<p class="mx-auto max-w-2xl text-white/75">What people are saying about my work.</p>
		</div>

		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each reviews as review}
				<div class="group relative">
					<div
						class="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-pink-500 to-rose-500 opacity-0 blur transition duration-500 group-hover:opacity-50"
					></div>
					<div
						class="glass-panel relative flex h-full flex-col rounded-3xl p-8 transition-transform duration-500 hover:-translate-y-2"
					>
						<div class="mb-6 flex items-center gap-4">
							<img
								src={review.image}
								alt={review.name}
								class="h-12 w-12 rounded-full border-2 border-white/10"
							/>
							<div>
								<h3 class="font-bold text-white">{review.name}</h3>
								<p class="text-xs text-white/60">{review.role} at {review.company}</p>
							</div>
						</div>

						<p class="leading-relaxed text-white/75 italic">
							"{review.text}"
						</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Contact Section -->
<section id="contact" class="relative py-32">
	<div class="relative z-10 container mx-auto px-4">
		<div class="mb-20 text-center">
			<h2 class="mb-6 text-4xl font-bold md:text-5xl">Get In Touch</h2>
			<p class="mx-auto max-w-2xl text-white/75">
				I'm currently looking for new opportunities. Whether you have a question or just want to say
				hi, feel free to reach out!
			</p>
		</div>

		<div class="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			<!-- Fiverr -->
			<a
				href={socialLinks.fiverr}
				target="_blank"
				rel="noopener noreferrer"
				class="glass-panel group relative flex flex-col items-center justify-center gap-4 rounded-3xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:bg-white/10"
			>
				<div
					class="flex h-16 w-16 items-center justify-center rounded-full bg-[#1DBF73]/20 text-[#1DBF73] transition-colors group-hover:bg-[#1DBF73] group-hover:text-white"
				>
					<svg
						class="h-8 w-8"
						fill="#ffffff"
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
					<h3 class="mb-1 text-xl font-bold text-white">Fiverr</h3>
					<p class="text-sm text-white/60">Hire me for gigs</p>
				</div>
			</a>

			<!-- Upwork -->
			<a
				href={socialLinks.upwork}
				target="_blank"
				rel="noopener noreferrer"
				class="glass-panel group relative flex flex-col items-center justify-center gap-4 rounded-3xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:bg-white/10"
			>
				<div
					class="flex h-16 w-16 items-center justify-center rounded-full bg-[#000000]/20 text-[#000000] transition-colors group-hover:bg-[#000000] group-hover:text-white"
				>
					<svg
						class="h-8 w-8"
						fill="#ffffff"
						viewBox="0 0 32 32"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M24.75 17.542c-1.469 0-2.849-0.62-4.099-1.635l0.302-1.432 0.010-0.057c0.276-1.521 1.13-4.078 3.786-4.078 1.99 0 3.604 1.615 3.604 3.604 0 1.984-1.615 3.599-3.604 3.599zM24.75 6.693c-3.385 0-6.016 2.198-7.083 5.818-1.625-2.443-2.865-5.38-3.583-7.854h-3.646v9.484c-0.005 1.875-1.521 3.391-3.396 3.396-1.875-0.005-3.391-1.526-3.396-3.396v-9.484h-3.646v9.484c0 3.885 3.161 7.068 7.042 7.068 3.885 0 7.042-3.182 7.042-7.068v-1.589c0.708 1.474 1.578 2.974 2.635 4.297l-2.234 10.495h3.729l1.62-7.615c1.417 0.906 3.047 1.479 4.917 1.479 4 0 7.25-3.271 7.25-7.266 0-4-3.25-7.25-7.25-7.25z"
						/>
					</svg>
				</div>
				<div>
					<h3 class="mb-1 text-xl font-bold text-white">Upwork</h3>
					<p class="text-sm text-white/60">Professional Contracts</p>
				</div>
			</a>

			<!-- LinkedIn -->
			<a
				href={socialLinks.linkedin}
				target="_blank"
				rel="noopener noreferrer"
				class="glass-panel group relative flex flex-col items-center justify-center gap-4 rounded-3xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:bg-white/10"
			>
				<div
					class="flex h-16 w-16 items-center justify-center rounded-full bg-[#0077B5]/20 text-[#0077B5] transition-colors group-hover:bg-[#0077B5] group-hover:text-white"
				>
					<svg class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
						<path
							d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
						/>
					</svg>
				</div>
				<div>
					<h3 class="mb-1 text-xl font-bold text-white">LinkedIn</h3>
					<p class="text-sm text-white/60">Connect professionally</p>
				</div>
			</a>

			<!-- GitHub -->
			<a
				href={socialLinks.github}
				target="_blank"
				rel="noopener noreferrer"
				class="glass-panel group relative flex flex-col items-center justify-center gap-4 rounded-3xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:bg-white/10"
			>
				<div
					class="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-white transition-colors group-hover:bg-white group-hover:text-black"
				>
					<svg class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
						<path
							fill-rule="evenodd"
							d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
							clip-rule="evenodd"
						/>
					</svg>
				</div>
				<div>
					<h3 class="mb-1 text-xl font-bold text-white">GitHub</h3>
					<p class="text-sm text-white/60">Check my code</p>
				</div>
			</a>

			<!-- Email -->
			<a
				href={socialLinks.email}
				class="glass-panel group relative flex flex-col items-center justify-center gap-4 rounded-3xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 sm:col-span-2 lg:col-span-2"
			>
				<div
					class="flex h-16 w-16 items-center justify-center rounded-full bg-purple-500/20 text-purple-400 transition-colors group-hover:bg-purple-500 group-hover:text-white"
				>
					<svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
						/>
					</svg>
				</div>
				<div>
					<h3 class="mb-1 text-xl font-bold text-white">Email</h3>
					<p class="text-sm text-white/60">g.mohiuddin215@gmail.com</p>
				</div>
			</a>
		</div>
	</div>
</section>
