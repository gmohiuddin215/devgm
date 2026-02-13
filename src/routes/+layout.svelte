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
	<link rel="canonical" href="https://devgm.vercel.app{$page.url.pathname}" />
	
	<!-- Primary Meta Tags -->
	<title>Ghulam Mohiuddin | Senior iOS Developer — Swift & SwiftUI Expert</title>
	<meta name="title" content="Ghulam Mohiuddin | Senior iOS Developer — Swift & SwiftUI Expert" />
	<meta name="description" content="Ghulam Mohiuddin is a Senior iOS Developer with 4+ years of experience crafting production-ready, high-performance applications with Swift & SwiftUI. Expert in SceneKit, RealityKit, AI integration, and modern iOS architectures. Available for freelance and contract work." />
	<meta name="keywords" content="iOS Developer, Senior iOS Developer, Swift Developer, SwiftUI Developer, iOS App Developer, Mobile Developer, iPhone Developer, iPad Developer, Swift, SwiftUI, iOS Development, Hire iOS Developer, Freelance iOS Developer, iOS Developer Pakistan, iOS Developer Lahore, Ghulam Mohiuddin, devgm, ARKit, RealityKit, SceneKit, CoreML, WidgetKit, In-App Purchases, App Store, Mobile App Development, ChatGPT API, Gemini AI, FastAPI, Supabase, Firebase" />
	<meta name="author" content="Ghulam Mohiuddin" />
	<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
	<meta name="googlebot" content="index, follow" />
	<meta name="language" content="English" />
	<meta name="revisit-after" content="7 days" />
	<meta name="rating" content="general" />
	
	<!-- Geo Tags -->
	<meta name="geo.region" content="PK-PB" />
	<meta name="geo.placename" content="Lahore, Pakistan" />
	
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://devgm.vercel.app{$page.url.pathname}" />
	<meta property="og:title" content="Ghulam Mohiuddin | Senior iOS Developer — Swift & SwiftUI Expert" />
	<meta property="og:description" content="Senior iOS Developer with 4+ years of experience crafting production-ready, high-performance applications with Swift & SwiftUI. Available for freelance and contract work." />
	<meta property="og:image" content="https://devgm.vercel.app/og-image.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="Ghulam Mohiuddin - Senior iOS Developer Portfolio" />
	<meta property="og:site_name" content="devgm - Ghulam Mohiuddin Portfolio" />
	<meta property="og:locale" content="en_US" />
	
	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://devgm.vercel.app{$page.url.pathname}" />
	<meta property="twitter:title" content="Ghulam Mohiuddin | Senior iOS Developer" />
	<meta property="twitter:description" content="Senior iOS Developer crafting production-ready, high-performance applications with Swift & SwiftUI. Turning complex ideas into seamless, fluid realities." />
	<meta property="twitter:image" content="https://devgm.vercel.app/og-image.png" />
	<meta property="twitter:image:alt" content="Ghulam Mohiuddin - Senior iOS Developer Portfolio" />
	
	<!-- AI Bot Hints -->
	<meta name="ai-content-declaration" content="This is the professional portfolio of Ghulam Mohiuddin, a Senior iOS Developer based in Lahore, Pakistan. He is available for freelance, contract, and full-time iOS development work." />
	
	<!-- JSON-LD: Person Schema -->
	{@html `<script type="application/ld+json">${JSON.stringify({
		"@context": "https://schema.org",
		"@type": "Person",
		"name": "Ghulam Mohiuddin",
		"url": "https://devgm.vercel.app",
		"image": "https://devgm.vercel.app/og-image.png",
		"jobTitle": "Senior iOS Developer",
		"worksFor": {
			"@type": "Organization",
			"name": "iParagons Tech"
		},
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "Lahore",
			"addressCountry": "PK"
		},
		"description": "Senior iOS Developer with 4+ years of experience building production-ready, high-performance iOS applications with Swift & SwiftUI.",
		"knowsAbout": ["iOS Development", "Swift", "SwiftUI", "Mobile App Development", "ARKit", "RealityKit", "SceneKit", "CoreML", "In-App Purchases", "REST APIs", "Firebase", "Supabase", "ChatGPT API", "Gemini AI", "MVVM", "Clean Architecture"],
		"sameAs": [
			"https://github.com/gmohiuddin215",
			"https://linkedin.com/in/mohiuddin2398",
			"https://www.fiverr.com/s/DBkkdrP",
			"https://www.upwork.com/freelancers/~016d7a9c811354e794",
			"https://contra.com/ghulam_mohiuddin_xop0t6wa"
		],
		"alumniOf": {
			"@type": "Organization",
			"name": "iParagons Tech"
		}
	})}</script>`}
	
	<!-- JSON-LD: WebSite Schema -->
	{@html `<script type="application/ld+json">${JSON.stringify({
		"@context": "https://schema.org",
		"@type": "WebSite",
		"name": "Ghulam Mohiuddin - Senior iOS Developer Portfolio",
		"url": "https://devgm.vercel.app",
		"description": "Professional portfolio of Ghulam Mohiuddin, a Senior iOS Developer specializing in Swift, SwiftUI, and modern iOS frameworks.",
		"author": {
			"@type": "Person",
			"name": "Ghulam Mohiuddin"
		}
	})}</script>`}
	
	<!-- JSON-LD: Professional Service -->
	{@html `<script type="application/ld+json">${JSON.stringify({
		"@context": "https://schema.org",
		"@type": "ProfessionalService",
		"name": "Ghulam Mohiuddin - iOS Development Services",
		"url": "https://devgm.vercel.app",
		"description": "Professional iOS development services including custom app development, SwiftUI implementation, AR/VR experiences, AI integration, and App Store deployment.",
		"areaServed": "Worldwide",
		"serviceType": "iOS App Development",
		"provider": {
			"@type": "Person",
			"name": "Ghulam Mohiuddin"
		},
		"hasOfferCatalog": {
			"@type": "OfferCatalog",
			"name": "iOS Development Services",
			"itemListElement": [
				{"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Custom iOS App Development"}},
				{"@type": "Offer", "itemOffered": {"@type": "Service", "name": "SwiftUI App Development"}},
				{"@type": "Offer", "itemOffered": {"@type": "Service", "name": "AR/VR App Development"}},
				{"@type": "Offer", "itemOffered": {"@type": "Service", "name": "AI Integration for iOS"}},
				{"@type": "Offer", "itemOffered": {"@type": "Service", "name": "App Store Optimization"}}
			]
		}
	})}</script>`}
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
