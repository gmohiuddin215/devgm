<script lang="ts">
  import { fly } from 'svelte/transition';
  import { quartOut } from 'svelte/easing';
  import HeroCanvas from '$lib/components/HeroCanvas.svelte';
  import Marquee from '$lib/components/Marquee.svelte';
  import TerminalWidget from '$lib/components/TerminalWidget.svelte';
  import ScrollReveal from '$lib/components/ScrollReveal.svelte';
  import ScrambleButton from '$lib/components/ScrambleButton.svelte';
  import { CONTACT_EMAIL, DISPLAY_EMAIL } from '$lib/constants';

  import { experience, socialLinks } from '$lib/data';

  const techPills = [
    "Python", "PyTorch", "LangChain", "Swift", "SwiftUI",
    "FastAPI", "React/Next.js", "Docker", "RAG", "LLMs"
  ];

  const experiences = experience.map(exp => ({
    year: exp.duration,
    role: exp.role,
    company: exp.company,
    description: exp.description,
    badge: "AI & iOS"
  }));

  const socials = [
    { name: "GitHub", handle: "@gmohiuddin215", href: socialLinks.github },
    { name: "LinkedIn", handle: "/in/mohiuddin2398", href: socialLinks.linkedin },
    { name: "Upwork", handle: "Ghulam M.", href: socialLinks.upwork },
  ];

  const floatingBadges = [
    { label: "Currently", value: "Building AI Systems", top: "6%", right: "36%", delay: 0 },
    { label: "Stack", value: "Python + Swift", top: "30%", right: "18%", delay: 1.2 },
    { label: "Location", value: "Lahore, Pakistan", bottom: "32%", left: "6%", delay: 2.1 },
    { label: "Available", value: "Freelance", bottom: "8%", right: "24%", delay: 0.6 },
  ];
</script>

<!-- HERO -->
<section class="relative min-h-screen flex items-center pt-[70px]">
  <div class="max-w-[1200px] mx-auto px-6 lg:px-14 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
    <!-- Left column -->
    <div class="flex flex-col gap-6 z-10">
      <div
        in:fly={{ y: 16, duration: 500, delay: 0, easing: quartOut }}
        class="flex items-center gap-2"
      >
        <span
          class="w-2 h-2 rounded-full bg-peach inline-block"
          style="animation: pulse-glow 2s ease-in-out infinite;"
        ></span>
        <span class="font-mono text-[11px] text-peach tracking-[0.2em] uppercase">
          Available for opportunities, {new Date().getFullYear()}
        </span>
      </div>

      <div>
        <div class="overflow-hidden">
          <h1
            in:fly={{ y: "100%", duration: 700, delay: 100, easing: quartOut }}
            class="font-display font-extrabold leading-[0.88] tracking-[-0.04em]"
            style="font-size: clamp(72px, 8vw, 120px);"
          >
            Ghulam
          </h1>
        </div>
        <div class="overflow-hidden">
          <h1
            in:fly={{ y: "100%", duration: 700, delay: 200, easing: quartOut }}
            class="font-display font-light italic text-peach leading-[0.88] tracking-[-0.04em]"
            style="font-size: clamp(72px, 8vw, 120px);"
          >
            Mohiuddin.
          </h1>
        </div>
      </div>

      <p
        in:fly={{ y: 16, duration: 600, delay: 400, easing: quartOut }}
        class="font-display font-light italic text-subtext0"
        style="font-size: clamp(18px, 2vw, 26px);"
      >
        AI Engineer & Senior iOS Developer
      </p>

      <p
        in:fly={{ y: 16, duration: 600, delay: 550, easing: quartOut }}
        class="font-body text-[15px] font-light text-subtext0 leading-[1.85] max-w-[460px]"
      >
        Most of my work is building intelligent systems and production iOS apps.
        I specialize in bringing AI capabilities into native mobile applications 
        using Python, PyTorch, LangChain, Swift, and SwiftUI. I build full-stack
        solutions, from vector databases to clean mobile architectures.
      </p>

      <div
        in:fly={{ y: 16, duration: 600, delay: 700, easing: quartOut }}
        class="flex items-center gap-5 mt-2"
      >
        <ScrambleButton href="/projects" text="View my work" variant="primary" />
      </div>
    </div>

    <!-- Right column: canvas + floating badges -->
    <div class="relative min-h-[500px] lg:min-h-[600px] hidden lg:block">
      <HeroCanvas />
      {#each floatingBadges as badge}
        <div
          class="absolute bg-mantle border border-surface0 rounded-lg px-4 py-3 z-10"
          style="
            top: {badge.top || 'auto'};
            right: {badge.right || 'auto'};
            left: {badge.left || 'auto'};
            bottom: {badge.bottom || 'auto'};
            animation: float 4s ease-in-out {badge.delay}s infinite;
          "
        >
          <span class="block font-mono text-[10px] tracking-[0.12em] uppercase text-overlay0">
            {badge.label}
          </span>
          <span class="block font-body text-[13px] text-text mt-0.5">
            {badge.value}
          </span>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- MARQUEE -->
<Marquee />

<!-- ABOUT -->
<section id="about" class="py-[110px]">
  <div class="max-w-[1200px] mx-auto px-6 lg:px-14 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
    <ScrollReveal>
      <div class="flex flex-col gap-6">
        <span class="font-mono text-[13px] text-peach tracking-[0.12em]">
          // About me
        </span>
        <h2
          class="font-display font-bold text-text leading-[1.1] tracking-[-0.03em]"
          style="font-size: clamp(40px, 4.5vw, 64px);"
        >
          Turning ideas into <span class="italic text-peach font-light">reliable</span> software.
        </h2>
        <p class="font-body text-[15px] font-light text-subtext0 leading-[1.85]">
          I'm an AI Engineer and iOS Developer who thrives at the intersection of
          machine learning and native mobile experiences. I've spent years building
          scalable intelligent architectures and high-performance SwiftUI interfaces.
          From RAG pipelines in Python to SceneKit rendering, I care about pushing
          boundaries.
        </p>
        <p class="font-body text-[15px] font-light text-subtext0 leading-[1.85]">
          Currently, I'm focused on creating robust applied AI applications,
          contributing to open source tools, and building state-of-the-art native iOS systems.
          When I'm not coding, I'm either reading about new LLM architectures or exploring 
          spatial computing.
        </p>

        <div class="flex flex-wrap gap-2 mt-2">
          {#each techPills as pill}
            <span class="pill font-mono text-[11px] text-subtext1 border border-surface1 rounded-full px-3 py-1.5 transition-all duration-300 hover:border-peach hover:text-peach hover:bg-[rgba(250,179,135,0.06)]">
              {pill}
            </span>
          {/each}
        </div>
      </div>
    </ScrollReveal>

    <ScrollReveal delay={0.15}>
      <TerminalWidget />
    </ScrollReveal>
  </div>
</section>

<!-- EXPERIENCE -->
<section id="experience" class="py-[110px]">
  <div class="max-w-[1200px] mx-auto px-6 lg:px-14">
    <ScrollReveal>
      <span class="font-mono text-[13px] text-peach tracking-[0.12em] block mb-4">
        // Experience
      </span>
      <h2
        class="font-display font-bold text-text leading-[1.1] tracking-[-0.03em] mb-12"
        style="font-size: clamp(40px, 4.5vw, 64px);"
      >
        Where I've <span class="italic text-peach font-light">worked.</span>
      </h2>
    </ScrollReveal>

    <div class="flex flex-col">
      {#each experiences as exp, i}
        <ScrollReveal delay={i * 0.1}>
          <div
            class="group grid grid-cols-1 md:grid-cols-[160px_1fr_120px] gap-4 md:gap-8 py-8 transition-all duration-300 hover:pl-3.5"
            style="border-bottom: 1px solid rgba(205, 214, 244, 0.07);"
          >
            <span class="font-mono text-[12px] text-overlay0">
              {exp.year}
            </span>

            <div class="flex flex-col gap-1.5">
              <h3
                class="font-display font-medium text-text"
                style="font-size: clamp(20px, 2.2vw, 30px);"
              >
                {exp.role}
              </h3>
              <span class="font-body text-[12px] uppercase tracking-[0.08em] text-peach">
                {exp.company}
              </span>
              <p class="font-body text-[14px] font-light text-subtext0 mt-1 leading-[1.75]">
                {exp.description}
              </p>
            </div>

            <div class="flex items-start justify-end">
              <span class="font-mono text-[10px] text-peach bg-[rgba(250,179,135,0.1)] px-3 py-1 rounded-full">
                {exp.badge}
              </span>
            </div>
          </div>
        </ScrollReveal>
      {/each}
    </div>
  </div>
</section>

<!-- CONTACT -->
<section id="contact" class="py-[110px]">
  <div class="max-w-[1200px] mx-auto px-6 lg:px-14 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[100px]">
    <ScrollReveal>
      <div class="flex flex-col gap-6">
        <span class="font-mono text-[13px] text-peach tracking-[0.12em]">
          // Contact
        </span>
        <h2
          class="font-display font-bold text-text leading-[1.1] tracking-[-0.03em]"
          style="font-size: clamp(40px, 4.5vw, 64px);"
        >
          Let's build something <span class="italic text-peach font-light">great.</span>
        </h2>
        <p class="font-body text-[15px] font-light text-subtext0 leading-[1.85]">
          I'm always open to interesting conversations, new opportunities,
          and collaborations. If you have a project in mind or just want to
          say hello, email me below.
        </p>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          class="font-display text-peach italic font-light text-[clamp(20px,2.5vw,32px)] border-b border-peach/30 hover:border-peach pb-1 transition-all duration-300 inline-block mt-2 w-fit"
        >
          {DISPLAY_EMAIL}
        </a>
      </div>
    </ScrollReveal>

    <ScrollReveal delay={0.15}>
      <div class="flex flex-col">
        {#each socials as social, i}
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            class="group flex items-center justify-between py-5 transition-all duration-300 hover:pl-3"
            style={i < socials.length - 1 ? "border-bottom: 1px solid rgba(205, 214, 244, 0.07);" : ""}
          >
            <div class="flex flex-col gap-0.5">
              <span class="font-body text-[18px] font-medium text-text group-hover:text-peach transition-colors duration-250">
                {social.name}
              </span>
              <span class="font-mono text-[11px] text-overlay0">
                {social.handle}
              </span>
            </div>
            <span class="text-peach opacity-0 translate-y-2 -translate-x-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
            </span>
          </a>
        {/each}
      </div>
    </ScrollReveal>
  </div>
</section>
