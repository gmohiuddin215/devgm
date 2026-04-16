<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import ScrambleButton from './ScrambleButton.svelte';
  import { CONTACT_EMAIL } from '$lib/constants';

  const links = [
    { href: "/#about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/#experience", label: "Experience" },
    { href: "/#contact", label: "Contact" },
  ];

  let pathname = $derived($page.url.pathname);
  let mobileOpen = $state(false);
  
  let isBlogRoute = $derived(pathname.startsWith("/blog"));
  let scrollProgress = $state(0);
  let targetRef = 0;

  onMount(() => {
    let rafId: number | null = null;

    const computeTarget = () => {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop;
      const height = doc.scrollHeight - doc.clientHeight;
      if (height <= 0) return 0;
      return Math.min(100, Math.max(0, (scrollTop / height) * 100));
    };

    const handleScroll = () => {
      if (isBlogRoute) {
        targetRef = computeTarget();
      }
    };

    const animate = () => {
      if (isBlogRoute) {
        const diff = targetRef - scrollProgress;
        if (Math.abs(diff) >= 0.1) {
          scrollProgress += diff * 0.15;
        } else {
          scrollProgress = targetRef;
        }
      } else {
        scrollProgress = 0;
        targetRef = 0;
      }
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  });

  function isActive(href: string) {
    if (href.startsWith("/#")) return pathname === "/";
    return pathname.startsWith(href);
  }

  function closeMobile() { mobileOpen = false; }
</script>

<nav
  class="fixed top-0 left-0 right-0 z-[200] flex items-center justify-between h-[70px] px-6 lg:px-14"
  style="background-color: rgba(30, 30, 46, 0.7); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border-bottom: 1px solid rgba(205, 214, 244, 0.06);"
>
  <a href="/" class="font-display text-[22px] font-bold tracking-tight text-text">
  GM<span class="text-peach">.</span>
  </a>

  <div class="hidden md:flex items-center gap-8">
    {#each links as link}
      <a
        href={link.href}
        class="group relative font-body text-[13px] font-normal uppercase tracking-[0.06em] transition-colors duration-250"
        style="color: {isActive(link.href) ? 'var(--text)' : 'var(--overlay1)'};"
      >
        <span class="group-hover:text-text transition-colors duration-250 {isActive(link.href) ? 'text-text' : ''}">{link.label}</span>
        <span
          class="absolute left-0 bottom-[-4px] h-px bg-peach transition-all duration-300 ease-out {isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'}"
        ></span>
      </a>
    {/each}
  </div>

  <div class="hidden md:block">
    <ScrambleButton href={`mailto:${CONTACT_EMAIL}`} text="Let's talk" external={true} showArrow={false} />
  </div>

  <button
    class="md:hidden text-text cursor-pointer"
    onclick={() => (mobileOpen = !mobileOpen)}
    aria-label="Toggle menu"
  >
    {#if mobileOpen}
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
    {:else}
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
    {/if}
  </button>
</nav>

{#if mobileOpen}
  <div
    class="fixed inset-0 z-[199] flex flex-col items-center justify-center gap-8 bg-base/95 backdrop-blur-xl"
    style="padding-top: 70px"
  >
    {#each links as link}
      <a
        href={link.href}
        onclick={closeMobile}
        class="font-display text-2xl font-medium text-text hover:text-peach transition-colors duration-250"
      >
        {link.label}
      </a>
    {/each}
    <a
      href={`mailto:${CONTACT_EMAIL}`}
      class="mt-4 inline-block font-mono text-[11px] uppercase tracking-[0.14em] px-7 py-3.5 border border-peach text-peach"
    >
      Let's talk
    </a>
  </div>
{/if}

{#if isBlogRoute}
  <div class="fixed left-0 right-0 top-[69px] z-[200] h-[2px] bg-surface0/60 overflow-hidden">
    <div
      class="h-full rounded-r-full"
      style="width: {scrollProgress.toFixed(1)}%; background: linear-gradient(90deg, var(--peach), var(--mauve), var(--blue), var(--teal)); transition: width 220ms cubic-bezier(0.23, 1, 0.32, 1);"
    ></div>
  </div>
{/if}
