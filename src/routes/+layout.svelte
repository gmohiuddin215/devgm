<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let scrolled = $state(false);
	let canvas: HTMLCanvasElement;

	onMount(() => {
		// ─── Scroll handler ───
		const handleScroll = () => {
			scrolled = window.scrollY > 10;
		};
		window.addEventListener('scroll', handleScroll, { passive: true });

		// ─── Intersection Observer for scroll reveals ───
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

		// ─── Neural Network Canvas ───
		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		let animationId: number;
		let particles: Particle[] = [];
		let mouse = { x: -1000, y: -1000 };

		interface Particle {
			x: number;
			y: number;
			vx: number;
			vy: number;
			size: number;
			opacity: number;
			hue: number;
		}

		function resize() {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		}

		function createParticles() {
			const count = Math.min(Math.floor((window.innerWidth * window.innerHeight) / 12000), 120);
			particles = [];
			for (let i = 0; i < count; i++) {
				particles.push({
					x: Math.random() * canvas.width,
					y: Math.random() * canvas.height,
					vx: (Math.random() - 0.5) * 0.4,
					vy: (Math.random() - 0.5) * 0.4,
					size: Math.random() * 2 + 0.5,
					opacity: Math.random() * 0.5 + 0.1,
					hue: Math.random() > 0.5 ? 185 : 270 // cyan or violet
				});
			}
		}

		function drawParticles() {
			if (!ctx) return;
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			// Draw connections
			for (let i = 0; i < particles.length; i++) {
				for (let j = i + 1; j < particles.length; j++) {
					const dx = particles[i].x - particles[j].x;
					const dy = particles[i].y - particles[j].y;
					const dist = Math.sqrt(dx * dx + dy * dy);

					if (dist < 150) {
						const opacity = (1 - dist / 150) * 0.15;
						ctx.beginPath();
						ctx.strokeStyle = `hsla(185, 100%, 50%, ${opacity})`;
						ctx.lineWidth = 0.5;
						ctx.moveTo(particles[i].x, particles[i].y);
						ctx.lineTo(particles[j].x, particles[j].y);
						ctx.stroke();
					}
				}
			}

			// Draw and update particles
			particles.forEach((p) => {
				// Mouse interaction
				const dx = mouse.x - p.x;
				const dy = mouse.y - p.y;
				const dist = Math.sqrt(dx * dx + dy * dy);
				if (dist < 200) {
					const force = (200 - dist) / 200;
					p.vx -= (dx / dist) * force * 0.02;
					p.vy -= (dy / dist) * force * 0.02;
				}

				p.x += p.vx;
				p.y += p.vy;

				// Boundaries
				if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
				if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

				// Damping
				p.vx *= 0.999;
				p.vy *= 0.999;

				// Draw particle
				ctx.beginPath();
				ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
				ctx.fillStyle = `hsla(${p.hue}, 100%, 70%, ${p.opacity})`;
				ctx.fill();

				// Glow effect for larger particles
				if (p.size > 1.2) {
					ctx.beginPath();
					ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
					ctx.fillStyle = `hsla(${p.hue}, 100%, 70%, ${p.opacity * 0.1})`;
					ctx.fill();
				}
			});

			animationId = requestAnimationFrame(drawParticles);
		}

		const handleMouseMove = (e: MouseEvent) => {
			mouse.x = e.clientX;
			mouse.y = e.clientY;
		};

		window.addEventListener('mousemove', handleMouseMove);
		window.addEventListener('resize', () => {
			resize();
			createParticles();
		});

		resize();
		createParticles();
		drawParticles();

		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('mousemove', handleMouseMove);
			cancelAnimationFrame(animationId);
			observer.disconnect();
		};
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
	<title>Ghulam Mohiuddin | AI Engineer & iOS Developer — Building Intelligent Systems</title>
	<meta name="title" content="Ghulam Mohiuddin | AI Engineer & iOS Developer — Building Intelligent Systems" />
	<meta name="description" content="Ghulam Mohiuddin is an AI Engineer & Senior iOS Developer with 4+ years of experience building intelligent systems, production iOS apps, and full-stack solutions. Expert in Python, PyTorch, LangChain, RAG, Swift & SwiftUI. Available for freelance and contract work." />
	<meta name="keywords" content="AI Engineer, Machine Learning Engineer, iOS Developer, Senior iOS Developer, Python Developer, PyTorch, TensorFlow, LangChain, RAG, LLMs, Swift Developer, SwiftUI Developer, Full-Stack Developer, Ghulam Mohiuddin, Hire AI Engineer, AI Developer Pakistan, Freelance AI Engineer, ARKit, RealityKit, FastAPI, Supabase, Firebase" />
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
	<meta property="og:title" content="Ghulam Mohiuddin | AI Engineer & iOS Developer" />
	<meta property="og:description" content="AI Engineer & Senior iOS Developer building intelligent systems and production apps. Expert in Python, PyTorch, LangChain, Swift & SwiftUI." />
	<meta property="og:image" content="https://devgm.vercel.app/og-image.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="Ghulam Mohiuddin - AI Engineer & iOS Developer" />
	<meta property="og:site_name" content="Ghulam Mohiuddin — Portfolio" />
	<meta property="og:locale" content="en_US" />
	
	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://devgm.vercel.app{$page.url.pathname}" />
	<meta property="twitter:title" content="Ghulam Mohiuddin | AI Engineer & iOS Developer" />
	<meta property="twitter:description" content="AI Engineer & Senior iOS Developer building intelligent systems and production apps with Python, PyTorch, Swift & SwiftUI." />
	<meta property="twitter:image" content="https://devgm.vercel.app/og-image.png" />
	<meta property="twitter:image:alt" content="Ghulam Mohiuddin - AI Engineer Portfolio" />
	
	<!-- AI Bot Hints -->
	<meta name="ai-content-declaration" content="This is the professional portfolio of Ghulam Mohiuddin, an AI Engineer & Senior iOS Developer based in Lahore, Pakistan. He is pivoting to AI Engineering and is available for freelance, contract, and full-time AI/ML and iOS development work." />
	
	<!-- JSON-LD: Person Schema -->
	{@html `<script type="application/ld+json">${JSON.stringify({
		"@context": "https://schema.org",
		"@type": "Person",
		"name": "Ghulam Mohiuddin",
		"url": "https://devgm.vercel.app",
		"image": "https://devgm.vercel.app/og-image.png",
		"jobTitle": "AI Engineer & Senior iOS Developer",
		"worksFor": {
			"@type": "Organization",
			"name": "iParagons Tech"
		},
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "Lahore",
			"addressCountry": "PK"
		},
		"description": "AI Engineer & Senior iOS Developer building intelligent systems, production iOS apps, and full-stack solutions with Python, PyTorch, LangChain, Swift & SwiftUI.",
		"knowsAbout": ["AI Engineering", "Machine Learning", "Deep Learning", "LLMs", "RAG", "LangChain", "Python", "PyTorch", "TensorFlow", "iOS Development", "Swift", "SwiftUI", "Mobile App Development", "FastAPI", "Supabase"],
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
		"name": "Ghulam Mohiuddin - AI Engineer & iOS Developer Portfolio",
		"url": "https://devgm.vercel.app",
		"description": "Professional portfolio of Ghulam Mohiuddin, an AI Engineer & Senior iOS Developer specializing in intelligent systems, machine learning, and production iOS apps.",
		"author": {
			"@type": "Person",
			"name": "Ghulam Mohiuddin"
		}
	})}</script>`}
	
	<!-- JSON-LD: Professional Service -->
	{@html `<script type="application/ld+json">${JSON.stringify({
		"@context": "https://schema.org",
		"@type": "ProfessionalService",
		"name": "Ghulam Mohiuddin - AI & iOS Development Services",
		"url": "https://devgm.vercel.app",
		"description": "Professional AI engineering and iOS development services including ML model integration, RAG pipelines, LLM applications, custom iOS app development, and full-stack solutions.",
		"areaServed": "Worldwide",
		"serviceType": "AI Engineering & iOS App Development",
		"provider": {
			"@type": "Person",
			"name": "Ghulam Mohiuddin"
		},
		"hasOfferCatalog": {
			"@type": "OfferCatalog",
			"name": "AI & Development Services",
			"itemListElement": [
				{"@type": "Offer", "itemOffered": {"@type": "Service", "name": "AI/ML Model Development"}},
				{"@type": "Offer", "itemOffered": {"@type": "Service", "name": "RAG Pipeline Development"}},
				{"@type": "Offer", "itemOffered": {"@type": "Service", "name": "LLM Application Development"}},
				{"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Custom iOS App Development"}},
				{"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Full-Stack Development"}}
			]
		}
	})}</script>`}
</svelte:head>

<!-- Neural Network Canvas Background -->
<canvas bind:this={canvas} id="neural-canvas"></canvas>

<header
	class="fixed top-0 right-0 left-0 z-50 pt-6 transition-all duration-500"
	class:scrolled
	in:fade={{ duration: 300 }}
>
	<div class="relative container mx-auto flex max-w-5xl items-center justify-center px-4">
		{#if $page.url.pathname !== '/'}
			<a
				href="/"
				class="glass-panel absolute left-4 flex h-12 w-12 items-center justify-center rounded-full text-white/70 transition-all duration-300 hover:text-white hover:scale-110"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
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

		<div class="glass-panel mx-4 flex items-center justify-center rounded-full px-6 py-3 transition-all duration-300 hover:scale-105">
			<a href="/" class="group flex items-center gap-3 font-display text-lg font-bold tracking-tight">
				<!-- GM Monogram -->
				<span class="flex h-8 w-8 items-center justify-center rounded-lg text-xs font-black" style="background: linear-gradient(135deg, rgba(0,240,255,0.2), rgba(124,58,237,0.2)); border: 1px solid rgba(0,240,255,0.2);">
					GM
				</span>
				<span class="hidden sm:inline gradient-text-subtle">
					Ghulam Mohiuddin
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

<main class="relative z-10 flex-1">
	{@render children?.()}
</main>

<footer class="relative z-10 border-t border-white/5 py-12 backdrop-blur-sm pb-32">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex flex-col items-center justify-center space-y-4">
			<div class="section-divider mb-4"></div>
			<p class="text-sm text-white/30 font-display">
				&copy; {new Date().getFullYear()} Ghulam Mohiuddin
			</p>
			<p class="text-xs text-white/20">
				Built with <span class="text-neon-cyan/50">SvelteKit</span> · Designed with <span class="text-neon-magenta/50">♥</span>
			</p>
		</div>
	</div>
</footer>

<style>
	.scrolled {
		backdrop-filter: blur(20px);
	}
</style>
