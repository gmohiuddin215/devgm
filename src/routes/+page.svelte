<script>
    // Experience data
    const experience = [
        {
            role: 'Senior iOS Developer',
            company: 'Tech Company',
            duration: '2022 - Present',
            description: 'Leading iOS development, architecting scalable solutions, and mentoring junior developers.',
            technologies: ['Swift', 'SwiftUI', 'Combine', 'Core Data', 'Firebase']
        },
        {
            role: 'iOS Developer',
            company: 'Mobile Solutions Inc',
            duration: '2020 - 2022',
            description: 'Developed and maintained iOS applications with focus on performance and user experience.',
            technologies: ['Swift', 'UIKit', 'Core Animation', 'REST APIs']
        },
        {
            role: 'Junior iOS Developer',
            company: 'Startup Studio',
            duration: '2019 - 2020',
            description: 'Contributed to development of multiple iOS apps from concept to App Store deployment.',
            technologies: ['Swift', 'Alamofire', 'Realm', 'CocoaPods']
        }
    ];

    // Projects data
    const projects = [
        {
            title: 'SwiftUI App Template',
            description: 'A production-ready iOS app template with authentication and networking.',
            technologies: ['SwiftUI', 'Combine', 'Firebase', 'MVVM'],
            github: '#',
            demo: '#'
        },
        {
            title: 'AR Shopping Assistant',
            description: 'Augmented Reality app for visualizing furniture in your space.',
            technologies: ['ARKit', 'SceneKit', 'Core ML', 'RealityKit'],
            github: '#',
            demo: '#'
        },
        {
            title: 'Health Tracker',
            description: 'Health and fitness tracking with Apple Health integration.',
            technologies: ['HealthKit', 'Core Data', 'Charts', 'WidgetKit'],
            github: '#',
            demo: '#'
        }
    ];

    const skills = [
        { name: 'Swift & SwiftUI', level: '95%' },
        { name: 'UIKit', level: '90%' },
        { name: 'Combine', level: '85%' },
        { name: 'Core Data', level: '88%' },
        { name: 'REST APIs', level: '92%' },
        { name: 'Git', level: '90%' },
        { name: 'CI/CD', level: '85%' },
        { name: 'Unit Testing', level: '88%' }
    ];
</script>

<!-- Hero Section -->
<section id="home" class="min-h-screen flex items-center pt-16">
    <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
            <div class="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <div class="flex items-center mb-6">
                        <div class="w-3 h-3 rounded-full bg-[var(--xcode-red)] mr-2"></div>
                        <div class="w-3 h-3 rounded-full bg-[var(--xcode-yellow)] mr-2"></div>
                        <div class="w-3 h-3 rounded-full bg-[var(--xcode-green)]"></div>
                        <span class="ml-4 text-sm text-[var(--xcode-comment)] font-mono">Portfolio.swift</span>
                    </div>
                    
                    <div class="font-mono text-sm mb-8">
                        <p class="text-[#C678DD]"><span>import</span> <span class="text-[#61AFEF]">Developer</span></p>
                        <br>
                        <!-- <p class="text-[var(--xcode-comment)]">// Welcome to my portfolio</p> -->
                        <p><span class="text-[var(--xcode-blue)]">let</span> <span class="text-[var(--xcode-text)]">dev</span> = <span class="text-[var(--xcode-green)]">iOSDeveloper</span>()</p>
                        <p><span class="text-[var(--xcode-purple)]">dev</span>.<span class="text-[var(--xcode-blue)]">name</span> = <span class="text-[var(--xcode-green)]">"Ghulam Mohiuddin"</span></p>
                        <p><span class="text-[var(--xcode-purple)]">dev</span>.<span class="text-[var(--xcode-blue)]">title</span> = <span class="text-[var(--xcode-green)]">"Senior iOS Developer"</span></p>
                        <p><span class="text-[var(--xcode-purple)]">dev</span>.<span class="text-[var(--xcode-blue)]">experience</span> = <span class="text-[var(--xcode-yellow)]">4+</span> <span class="text-[var(--xcode-comment)]">// years</span></p>
                    </div>

                    <h1 class="text-4xl md:text-5xl font-bold mb-6 text-[var(--xcode-text)]">
                        Building Exceptional <span class="text-[var(--xcode-blue)]">iOS</span> Experiences
                    </h1>
                    
                    <p class="text-lg text-[var(--xcode-comment)] mb-8 max-w-xl">
                        I specialize in crafting beautiful, performant iOS applications using Swift and SwiftUI. 
                        With over 4 years of experience, I turn ideas into polished products that users love.
                    </p>

                    <div class="flex flex-wrap gap-4">
                        <a href="#contact" class="px-6 py-3 bg-[var(--xcode-blue)] hover:bg-opacity-90 text-white rounded-md font-medium transition-colors">
                            Get In Touch
                        </a>
                        <a href="#projects" class="px-6 py-3 border border-[var(--xcode-comment)] hover:border-[var(--xcode-blue)] text-[var(--xcode-text)] hover:text-[var(--xcode-blue)] rounded-md font-medium transition-colors">
                            View My Work
                        </a>
                    </div>
                </div>
                
                <div class="hidden md:block relative">
                    <div class="absolute inset-0 bg-gradient-to-r from-[var(--xcode-purple)] to-[var(--xcode-blue)] rounded-2xl opacity-20 blur-3xl"></div>
                    <div class="relative bg-[var(--xcode-sidebar)] p-4 rounded-2xl border border-[var(--xcode-comment)]">
                        <div class="flex items-center gap-2 mb-4">
                            <div class="w-3 h-3 rounded-full bg-[var(--xcode-red)]"></div>
                            <div class="w-3 h-3 rounded-full bg-[var(--xcode-yellow)]"></div>
                            <div class="w-3 h-3 rounded-full bg-[var(--xcode-green)]"></div>
                            <div class="text-xs text-[var(--xcode-comment)] ml-2">Xcode</div>
                        </div>
                        <div class="bg-[#1E1F22] p-4 rounded-lg font-mono text-sm h-96 overflow-auto">
                            <p class="text-[#56B6C2]">// iOS Developer Portfolio</p>
                            <p class="text-[#C678DD]"><span>import</span> <span class="text-[#61AFEF]">SwiftUI</span></p>
                            <br>
                            <p class="text-[#C678DD]"><span>struct</span> <span class="text-[#E5C07B]">PortfolioView</span>: <span class="text-[#61AFEF]">View</span>&#123;</p>
                            <p class="ml-4 text-[#C678DD]"><span>var</span> <span class="text-[#E06C75]">body</span>: <span class="text-[#61AFEF]">some</span> <span class="text-[#61AFEF]">View</span>&#123;</p>
                            <p class="ml-8 text-[#61AFEF]"><span>VStack</span>(spacing: <span class="text-[#D19A66]">20</span>) &#123;</p>
                            <p class="ml-12 text-[#61AFEF]"><span>Text</span>(<span class="text-[#98C379]">"Ghulam Mohiuddin"</span>)</p>
                            <p class="ml-16 text-[#61AFEF]"><span>.font</span>(.largeTitle)</p>
                            <p class="ml-16 text-[#61AFEF]"><span>.foregroundColor</span>(.white)</p>
                            <br>
                            <p class="ml-12 text-[#61AFEF]"><span>Text</span>(<span class="text-[#98C379]">"Senior iOS Developer"</span>)</p>
                            <p class="ml-16 text-[#61AFEF]"><span>.font</span>(.title2)</p>
                            <p class="ml-16 text-[#61AFEF]"><span>.foregroundColor</span>(.blue)</p>
                            <br>
                            <p class="ml-12 text-[#61AFEF]"><span>HStack</span> &#123;</p>
                            <p class="ml-16 text-[#61AFEF]"><span>ForEach</span>([<span class="text-[#98C379]">"Swift"</span>, <span class="text-[#98C379]">"SwiftUI"</span>, <span class="text-[#98C379]">"UIKit"</span>], id: \.self) &#123; tech in</p>
                            <p class="ml-20 text-[#61AFEF]"><span>Text</span>(tech)</p>
                            <p class="ml-24 text-[#61AFEF]"><span>.padding</span>(<span class="text[#D19A66]">8</span>)</p>
                            <p class="ml-24 text-[#61AFEF]"><span>.background</span>(<span class="text-[#E5C07B]">Color</span>.blue.opacity(<span class="text-[#D19A66]">0.2</span>))</p>
                            <p class="ml-20">&#125;</p>
                            <p class="ml-12">&#125;</p>
                            <p class="ml-8">&#125;</p>
                            <p class="ml-4">&#125;</p>
                            <p>&#125;</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- About Section -->
<section id="about" class="py-20 bg-gray-800/50">
    <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-12 text-center">
            <span class="text-blue-400">01.</span> About Me
        </h2>
        <div class="flex flex-col md:flex-row items-center gap-12">
            <div class="md:w-1/2">
                <div class="relative group">
                    <div class="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                    <div class="relative bg-gray-800 p-1 rounded-lg">
                        <img src="https://via.placeholder.com/400x400/1a1a2e/ffffff?text=GM" alt="Profile" class="rounded-lg w-full h-auto" />
                    </div>
                </div>
                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div class="md:w-1/2 mt-8 md:mt-0">
                <p class="text-gray-300 mb-6 leading-relaxed">
                    Hello! I'm Ghulam, a passionate developer with a love for creating beautiful and functional web applications. My journey in web development started when I built my first website in high school, and I've been hooked ever since.
                </p>
                <p class="text-gray-300 mb-6 leading-relaxed">
                    I specialize in building exceptional digital experiences using modern web technologies. My goal is to build products that are not only visually appealing but also provide real value to users.
                </p>
                <div class="grid grid-cols-2 gap-4 mt-8">
                    <div class="flex items-center">
                        <span class="text-blue-400 mr-2">▹</span>
                        <span class="text-gray-300">JavaScript (ES6+)</span>
                    </div>
                    <div class="flex items-center">
                        <span class="text-blue-400 mr-2">▹</span>
                        <span class="text-gray-300">Svelte & SvelteKit</span>
                    </div>
                    <div class="flex items-center">
                        <span class="text-blue-400 mr-2">▹</span>
                        <span class="text-gray-300">Node.js</span>
                    </div>
                    <div class="flex items-center">
                        <span class="text-blue-400 mr-2">▹</span>
                        <span class="text-gray-300">React</span>
                    </div>
                    <div class="flex items-center">
                        <span class="text-blue-400 mr-2">▹</span>
                        <span class="text-gray-300">Tailwind CSS</span>
                    </div>
                    <div class="flex items-center">
                        <span class="text-blue-400 mr-2">▹</span>
                        <span class="text-gray-300">Git & GitHub</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Projects Section -->
<section id="projects" class="py-20">
    <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-12 text-center">
            <span class="text-blue-400">02.</span> Some Things I've Built
        </h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {#each projects as project}
                <div class="bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-400 transition-colors duration-300 group">
                    <div class="p-6">
                        <div class="flex justify-between items-start mb-4">
                            <div class="text-2xl text-blue-400">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                            </div>
                            <div class="flex space-x-3">
                                <a href={project.github} class="text-gray-400 hover:text-blue-400 transition-colors" aria-label="GitHub">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                    </svg>
                                </a>
                                <a href={project.demo} class="text-gray-400 hover:text-blue-400 transition-colors" aria-label="Live Demo">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <h3 class="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                            {project.title}
                        </h3>
                        <p class="text-gray-400 mb-4">
                            {project.description}
                        </p>
                        <div class="flex flex-wrap gap-2">
                            {#each project.technologies as tech}
                                <span class="text-xs bg-gray-700 text-blue-300 px-2 py-1 rounded">
                                    {tech}
                                </span>
                            {/each}
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>

<!-- Contact Section -->
<section id="contact" class="py-20 bg-gray-800/50">
    <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-12 text-center">
            <span class="text-blue-400">03.</span> Get In Touch
        </h2>
        <div class="max-w-2xl mx-auto">
            <p class="text-gray-300 text-center mb-12">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
                I'll get back to you as soon as possible!
            </p>
            <form class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label for="name" class="block text-sm font-medium text-gray-300 mb-2">Name</label>
                        <input type="text" id="name" name="name" required 
                            class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Your name">
                    </div>
                    <div>
                        <label for="email" class="block text-sm font-medium text-gray-300 mb-2">Email</label>
                        <input type="email" id="email" name="email" required
                            class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="your.email@example.com">
                    </div>
                </div>
                <div>
                    <label for="subject" class="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                    <input type="text" id="subject" name="subject" required
                        class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="What's this about?">
                </div>
                <div>
                    <label for="message" class="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <textarea id="message" name="message" rows="5" required
                        class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your message here..."></textarea>
                </div>
                <div class="text-center">
                    <button type="submit"
                        class="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md transition-colors duration-300">
                        Send Message
                    </button>
                </div>
            </form>
            <div class="mt-12 flex justify-center space-x-6">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" 
                    class="text-gray-400 hover:text-blue-400 transition-colors"
                    aria-label="GitHub">
                    <span class="sr-only">GitHub</span>
                    <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                    </svg>
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"
                    class="text-gray-400 hover:text-blue-400 transition-colors"
                    aria-label="LinkedIn">
                    <span class="sr-only">LinkedIn</span>
                    <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                </a>
                <a href="mailto:your.email@example.com"
                    class="text-gray-400 hover:text-blue-400 transition-colors"
                    aria-label="Email">
                    <span class="sr-only">Email</span>
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </a>
            </div>
        </div>
    </div>
</section>
