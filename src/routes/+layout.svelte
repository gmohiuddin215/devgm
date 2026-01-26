<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let scrolled = $state(false);

	onMount(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 10;
		};
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	});

	import { User, FolderGit2, Mail, UserStar } from 'lucide-svelte';
	import { page } from '$app/stores';

	let { children } = $props();

	const navItems = [
		{ name: 'About', href: '#about', icon: User },
		{ name: 'Projects', href: '#projects', icon: FolderGit2 },
		{ name: 'Reviews', href: '#reviews', icon: UserStar },
		{ name: 'Contact', href: '#contact', icon: Mail }
	];
</script>

<svelte:head>
	<link rel="icon" href="/favicon.ico" />
	
	<!-- Primary Meta Tags -->
	<title>Ghulam Mohiuddin | Senior iOS Developer</title>
	<meta name="title" content="Ghulam Mohiuddin | Senior iOS Developer" />
	<meta name="description" content="Senior iOS Developer crafting production-ready, high-performance applications with Swift & SwiftUI. Turning complex ideas into seamless, fluid realities." />
	
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://devgm.vercel.app/" />
	<meta property="og:title" content="Ghulam Mohiuddin | Senior iOS Developer" />
	<meta property="og:description" content="Senior iOS Developer crafting production-ready, high-performance applications with Swift & SwiftUI. Turning complex ideas into seamless, fluid realities." />
	<meta property="og:image" content="https://devgm.vercel.app/og-image.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	
	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://devgm.vercel.app/" />
	<meta property="twitter:title" content="Ghulam Mohiuddin | Senior iOS Developer" />
	<meta property="twitter:description" content="Senior iOS Developer crafting production-ready, high-performance applications with Swift & SwiftUI. Turning complex ideas into seamless, fluid realities." />
	<meta property="twitter:image" content="https://devgm.vercel.app/og-image.png" />
</svelte:head>

<header
	class="fixed top-0 right-0 left-0 z-50 pt-6 transition-all duration-300"
	in:fade={{ duration: 200 }}
>
	<div class="relative container mx-auto flex max-w-5xl items-center justify-center px-4">
		{#if $page.url.pathname !== '/'}
			<a
				href="/"
				class="glass-panel absolute left-4 flex h-14 w-14 items-center justify-center rounded-full text-white transition-all hover:scale-110"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-7 w-7 transition-transform group-hover:-translate-x-1"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
						clip-rule="evenodd"
					/>
				</svg>
			</a>
		{/if}

		<div class="glass-panel mx-4 flex items-center justify-center rounded-full px-6 py-3 transition-all hover:scale-110">
			<a href="/" class="group flex items-center gap-2 text-xl font-bold tracking-tight">
				<span
					class="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent"
				>
					dev<span class="font-light">gm</span>
				</span>
			</a>
		</div>
	</div>
</header>

<nav class="glass-tabbar" in:fade={{ duration: 200, delay: 100 }}>
	{#each navItems as item}
		<a href={item.href} class="glass-tab group flex flex-col items-center gap-1">
			<span class="relative z-10">
				<item.icon size={18} />
			</span>
			<span class="relative z-10">{item.name}</span>
		</a>
	{/each}
</nav>

<main class="flex-1">
	{@render children?.()}
</main>

<footer class="border-t border-white/10 py-12 backdrop-blur-sm pb-32">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex flex-col items-center justify-center space-y-6">
			<p class="text-sm text-gray-500">
				&copy; {new Date().getFullYear()} Ghulam Mohiuddin. Crafted with
				<span class="text-red-500">♥</span> & SvelteKit
			</p>
		</div>
	</div>
</footer>
