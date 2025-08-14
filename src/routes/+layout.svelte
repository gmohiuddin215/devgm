<script lang="ts">
    import '../app.css';
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import { fade } from 'svelte/transition';
    
    let scrolled = $state(false);
    
    onMount(() => {
        const handleScroll = () => {
            scrolled = window.scrollY > 10;
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    });
    
    let { children } = $props();
    
    const navItems = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' }
    ];
</script>

<svelte:head>
    <link rel="icon" href="/favicon.ico" />
</svelte:head>

<header
    class="fixed w-full z-50 transition-all duration-300 {scrolled ? 'bg-[var(--xcode-sidebar)] shadow-lg' : 'bg-transparent'}"
    in:fade={{ duration: 200 }}
>
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
            <div class="flex items-center">
                <div class="flex-shrink-0 flex items-center">
                    <span class="text-xl font-mono font-bold text-[var(--xcode-blue)]">
                        <span class="text-[var(--xcode-purple)]">dev</span> <span class="text-[var(--xcode-blue)]">gm</span>
                    </span>
                </div>
            </div>
            <div class="hidden md:block">
                <div class="ml-10 flex items-center space-x-8">
                    {#each navItems as item}
                        <a
                            href={item.href}
                            class="text-sm font-medium text-[var(--xcode-text)] hover:text-[var(--xcode-blue)] transition-colors"
                        >
                            <span class="text-[var(--xcode-blue)]">#</span> {item.name}
                        </a>
                    {/each}
                </div>
            </div>
            <div class="md:hidden">
                <!-- Mobile menu button -->
                <button 
                    aria-label="Toggle navigation menu"
                    class="text-[var(--xcode-text)] hover:text-[var(--xcode-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--xcode-blue)] focus:ring-opacity-50 rounded-md p-1"
                >
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </div>
    </nav>
</header>

<main class="flex-1 pt-16">
    {@render children?.()}
</main>

<footer class="bg-[var(--xcode-sidebar)] py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col items-center justify-center space-y-4">
            <div class="flex space-x-6">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" class="text-[var(--xcode-comment)] hover:text-[var(--xcode-blue)] transition-colors">
                    <span class="sr-only">GitHub</span>
                    <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                    </svg>
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" class="text-[var(--xcode-comment)] hover:text-[var(--xcode-blue)] transition-colors">
                    <span class="sr-only">LinkedIn</span>
                    <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                </a>
            </div>
            <p class="text-sm text-[var(--xcode-comment)]">
                &copy; {new Date().getFullYear()} Ghulam Mohiuddin. Built with SvelteKit & Tailwind CSS
            </p>
        </div>
    </div>
</footer>
