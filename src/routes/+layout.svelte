<script lang="ts">
	import '../app.css';
	import { socialLinks } from '$lib/data';
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
	class="fixed left-0 right-0 z-50 flex justify-center transition-all duration-300"
	in:fade={{ duration: 200 }}
>
	<nav
		class="glass-panel mx-4 flex w-full max-w-5xl items-center justify-between gap-8 rounded-full px-6 py-3"
	>
		<div class="flex items-center">
			<a href="/" class="group flex items-center gap-2 text-xl font-bold tracking-tight">
				<span
					class="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent transition-all group-hover:to-purple-500"
				>
					dev<span class="font-light">gm</span>
				</span>
			</a>
		</div>

		<div class="hidden items-center space-x-1 md:flex">
			{#each navItems as item}
				<a
					href={item.href}
					class="group relative rounded-full px-4 py-2 text-sm font-medium text-white/70 transition-all duration-300 hover:bg-white/10 hover:text-white"
				>
					{item.name}
					<span
						class="absolute bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-purple-500 opacity-0 transition-all duration-300 group-hover:w-1/2 group-hover:opacity-100"
					></span>
				</a>
			{/each}
		</div>

		<div class="md:hidden">
			<!-- Mobile menu button -->
			<button
				aria-label="Toggle navigation menu"
				class="rounded-full p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
			>
				<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>
			</button>
		</div>
	</nav>
</header>

<main class="flex-1">
	{@render children?.()}
</main>

<footer class="border-t border-white/10 bg-gray-900 py-12 backdrop-blur-sm">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex flex-col items-center justify-center space-y-6">
			<p class="text-sm text-gray-500">
				&copy; {new Date().getFullYear()} Ghulam Mohiuddin. Crafted with
				<span class="text-red-500">♥</span> & SvelteKit
			</p>
		</div>
	</div>
</footer>
