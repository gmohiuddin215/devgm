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

	import { User, Briefcase, FolderGit2, Mail } from 'lucide-svelte';

	let { children } = $props();

	const navItems = [
		{ name: 'About', href: '#about', icon: User },
		// { name: 'Experience', href: '#experience', icon: Briefcase },
		{ name: 'Projects', href: '#projects', icon: FolderGit2 },
		{ name: 'Contact', href: '#contact', icon: Mail }
	];
</script>

<svelte:head>
	<link rel="icon" href="/favicon.ico" />
</svelte:head>

<header
	class="fixed top-0 right-0 left-0 z-50 flex justify-center pt-6 transition-all duration-300"
	in:fade={{ duration: 200 }}
>
	<div class="glass-panel mx-4 flex items-center justify-center rounded-full px-6 py-3">
		<a href="/" class="group flex items-center gap-2 text-xl font-bold tracking-tight">
			<span
				class="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent transition-all group-hover:to-purple-500"
			>
				dev<span class="font-light">gm</span>
			</span>
		</a>
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

<footer class="border-t border-white/10 py-12 backdrop-blur-sm">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex flex-col items-center justify-center space-y-6">
			<p class="text-sm text-gray-500">
				&copy; {new Date().getFullYear()} Ghulam Mohiuddin. Crafted with
				<span class="text-red-500">♥</span> & SvelteKit
			</p>
		</div>
	</div>
</footer>
