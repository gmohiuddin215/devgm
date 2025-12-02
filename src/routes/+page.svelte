<script>
	import { experience, projects, skills, socialLinks } from '$lib/data';
</script>

<!-- Hero Section -->
<div class="group relative">
	<div
		class="absolute inset-0 bg-gradient-to-r from-green-500 via-cyan-500 to-purple-500"
	></div>
    <section id="home" class="relative flex min-h-screen items-center overflow-hidden pb-20 pt-32">        
        <div class="container relative z-10 mx-auto px-4">
            <div class="mx-auto max-w-6xl">
                <div class="grid items-center gap-16 md:grid-cols-2">
                    <div>
                        <div
                            class="glass-panel mb-8 inline-flex items-center rounded-full border px-4 py-2"
                        >
                            <span class="mr-3 h-2 w-2 animate-pulse rounded-full bg-green-900"></span>
                            <span class="text-sm font-medium tracking-wide text-black"
                                >Available for new projects</span
                            >
                        </div>

                        <h1 class="mb-8 text-5xl font-bold leading-tight md:text-7xl">
                            Building <br />
                            iOS Apps
                        </h1>

                        <p class="mb-10 max-w-xl text-xl font-light leading-relaxed text-black/75">
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
                            <a
                                href="#projects"
                                class="glass-button rounded-full px-8 py-4 font-medium"
                            >
                                View My Work
                            </a>
                        </div>
                    </div>

                    <div class="perspective-1000 relative hidden md:block">
                        <div
                            class="glass-panel rotate-y-16 rotate-x-6 group relative transform rounded-3xl bg-gray-900 p-6 shadow-2xl transition-all duration-700 hover:rotate-y-0 hover:rotate-x-0"
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
                                    <p class="text-pink-400 font-bold">import <span class="text-white font-normal">SwiftUI</span></p>
                                </div>
                                <div class="flex">
                                    <span class="w-8 text-white/50">02</span>
                                    <p>&nbsp;</p>
                                </div>
                                <div class="flex">
                                    <span class="w-8 text-white/50">03</span>
                                    <p class="text-white">
                                        <span class="text-pink-400 font-bold">struct</span>
                                        <span class="text-cyan-300">Developer</span>:
                                        <span class="text-white">View</span> &#123;
                                    </p>
                                </div>
                                <div class="flex">
                                    <span class="w-8 text-white/50">04</span>
                                    <p class="pl-4 text-white font-normal">
                                        <span class="text-pink-400 font-bold">let</span> name =
                                        <span class="text-orange-400">"Ghulam"</span>
                                    </p>
                                </div>
                                <div class="flex">
                                    <span class="w-8 text-white/50">05</span>
                                    <p class="pl-4 text-white font-normal">
                                        <span class="text-pink-400 font-bold">let</span> role =
                                        <span class="text-orange-400">"Senior iOS Dev"</span>
                                    </p>
                                </div>
                                <div class="flex">
                                    <span class="w-8 text-white/50">06</span>
                                    <p class="pl-4 text-white font-normal">
                                        <span class="text-pink-400 font-bold">var</span> 
                                        <span class="text-cyan-400">body</span>:
                                        <span class="text-pink-400 font-bold">some</span> 
                                        <span class="text-purple-300">View</span> &#123;
                                    </p>
                                </div>
                                <div class="flex">
                                    <span class="w-8 text-white/50">07</span>
                                    <p class="pl-8 text-white font-normal">
                                        <span class="text-purple-300">Text</span>(<span class="text-orange-400">"Hello, World!"</span>)
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
	<div class="container relative z-10 mx-auto px-4">
		<div class="flex flex-col items-center gap-16 md:flex-row">
			<div class="md:w-1/2">
				<div class="group relative">
					<div
						class="absolute -inset-4 rounded-2xl bg-gradient-to-r from-green-500 to-purple-600 opacity-30 blur-xl transition duration-500 group-hover:opacity-60"
					></div>
					<div class="glass-panel relative overflow-hidden rounded-2xl p-2">
						<img
							src="https://via.placeholder.com/600x600/1a1a2e/ffffff?text=GM"
							alt="Profile"
							class="h-auto w-full transform rounded-xl transition duration-700 group-hover:scale-105"
						/>
					</div>
				</div>
			</div>
			<div class="md:w-1/2">
				<h2 class="mb-8 flex items-center gap-4 text-4xl font-bold">
					<span class="h-1 w-12 rounded-full bg-purple-500"></span>
					About Me
				</h2>
				<p class="mb-6 text-lg leading-relaxed">
					Hello! I'm Ghulam, a passionate iOS developer with over 4 years of experience in creating
					beautiful and functional applications. I specialize in Swift, SwiftUI, and modern iOS
					frameworks.
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
							class="glass-button rounded-full border border-purple-500 px-4 py-2 text-sm text-purple-500 transition-colors hover:border-purple-700 hover:text-purple-700"
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
	<div
		class="absolute -inset-1.5 h-full w-full bg-gradient-to-r from-green-500 via-cyan-500 to-purple-500 opacity-20 blur"
	></div>

	<div class="container relative z-10 mx-auto px-4">
		<div class="mb-20 text-center">
			<h2 class="mb-6 text-4xl font-bold md:text-5xl">Selected Works</h2>
			<p class="mx-auto max-w-2xl text-black/75">
				A collection of projects that showcase my passion for design and engineering.
			</p>
		</div>

		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each projects as project}
				<div class="group relative">
					<div
						class="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-green-500 via-cyan-500 to-purple-500 opacity-0 blur transition duration-500 group-hover:opacity-50"
					></div>
					<div
						class="glass-panel relative flex h-full flex-col rounded-3xl p-8 transition-transform duration-500 hover:-translate-y-2"
					>
						<div class="mb-6 flex items-start justify-between">
							<div class="rounded-2xl bg-purple-500 p-3 text-white group-hover:bg-white/50 group-hover:text-black transition-colors">
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
							<div class="rounded-full bg-purple-500 text-white px-3 py-1 font-mono text-xs group-hover:bg-white/50 group-hover:text-black transition-colors">
								iOS App
							</div>
						</div>

						<h3
							class="mb-3 text-2xl font-bold text-black transition-colors group-hover:text-white"
						>
							{project.title}
						</h3>

						<p class="mb-6 flex-1 leading-relaxed text-gray-500 group-hover:text-white/80">
							{project.description}
						</p>

						<div class="mb-8 flex flex-wrap gap-2">
							{#each project.technologies.slice(0, 3) as tech}
								<span
									class="rounded-full border border-purple-500/50 bg-purple-500/20 px-3 py-1 text-xs font-medium text-purple-700"
								>
									{tech}
								</span>
							{/each}
							{#if project.technologies.length > 3}
								<span class="rounded-full border border-purple-500/50 bg-purple-500/20 px-3 py-1 text-xs font-medium text-purple-700"
									>+{project.technologies.length - 3}</span
								>
							{/if}
						</div>

						<a
							href="/projects/{project.slug}"
							class="glass-button flex w-full items-center justify-center gap-2 rounded-xl py-3 text-center font-medium text-white bg-purple-500 transition-all group-hover:bg-white/50 group-hover:text-black"
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

<!-- Contact Section -->
<section id="contact" class="bg-gray-900 py-20">
	<div class="container mx-auto px-4">
		<h2 class="mb-12 text-center text-3xl font-bold text-white">
			Get In Touch
		</h2>
		<div class="mx-auto max-w-2xl">
			<p class="mb-12 text-center text-gray-300">
				I'm currently looking for new opportunities. Whether you have a question or just want to say
				hi, I'll get back to you as soon as possible!
			</p>
			<form class="space-y-6">
				<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
					<div>
						<label for="name" class="mb-2 block text-sm font-medium text-gray-300">Name</label>
						<input
							type="text"
							id="name"
							name="name"
							required
							class="w-full rounded-md border border-gray-600 bg-gray-700 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
							placeholder="Your name"
						/>
					</div>
					<div>
						<label for="email" class="mb-2 block text-sm font-medium text-gray-300">Email</label>
						<input
							type="email"
							id="email"
							name="email"
							required
							class="w-full rounded-md border border-gray-600 bg-gray-700 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
							placeholder="your.email@example.com"
						/>
					</div>
				</div>
				<div>
					<label for="subject" class="mb-2 block text-sm font-medium text-gray-300">Subject</label>
					<input
						type="text"
						id="subject"
						name="subject"
						required
						class="w-full rounded-md border border-gray-600 bg-gray-700 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
						placeholder="What's this about?"
					/>
				</div>
				<div>
					<label for="message" class="mb-2 block text-sm font-medium text-gray-300">Message</label>
					<textarea
						id="message"
						name="message"
						rows="5"
						required
						class="w-full rounded-md border border-gray-600 bg-gray-700 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
						placeholder="Your message here..."
					></textarea>
				</div>
				<div class="text-center">
					<button
						type="submit"
						class="rounded-md bg-blue-500 px-8 py-3 font-medium text-white transition-colors duration-300 hover:bg-blue-600"
					>
						Send Message
					</button>
				</div>
			</form>
			<div class="mt-12 flex justify-center space-x-6">
				<a
					href={socialLinks.github}
					target="_blank"
					rel="noopener noreferrer"
					class="text-gray-400 transition-colors hover:text-blue-400"
					aria-label="GitHub"
				>
					<span class="sr-only">GitHub</span>
					<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
						<path
							fill-rule="evenodd"
							d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
							clip-rule="evenodd"
						/>
					</svg>
				</a>
				<a
					href={socialLinks.linkedin}
					target="_blank"
					rel="noopener noreferrer"
					class="text-gray-400 transition-colors hover:text-blue-400"
					aria-label="LinkedIn"
				>
					<span class="sr-only">LinkedIn</span>
					<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
						<path
							d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
						/>
					</svg>
				</a>
				<a
					href={socialLinks.email}
					class="text-gray-400 transition-colors hover:text-blue-400"
					aria-label="Email"
				>
					<span class="sr-only">Email</span>
					<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
						/>
					</svg>
				</a>
			</div>
		</div>
	</div>
</section>
