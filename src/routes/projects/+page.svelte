<script lang="ts">
  import ScrollReveal from '$lib/components/ScrollReveal.svelte';
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import { projects } from '$lib/data';
</script>

<svelte:head>
  <title>Projects | Ghulam Mohiuddin</title>
  <meta name="description" content="A curated list of projects I've built, spanning applied AI, iOS apps, and full-stack solutions." />
</svelte:head>

<div class="pt-[70px]">
  <section class="py-[110px]">
    <div class="max-w-[1200px] mx-auto px-6 lg:px-14">
      <ScrollReveal>
        <span class="font-mono text-[13px] text-green tracking-[0.12em] block mb-4">
          // Work
        </span>
        <h1
          class="font-display font-extrabold text-text tracking-[-0.04em] leading-[0.9]"
          style="font-size: clamp(56px, 7vw, 96px);"
        >
          Projects
        </h1>
        <p class="font-display font-light italic text-green text-[clamp(18px,2vw,26px)] mt-3 mb-4">
          Things I've shipped.
        </p>
        <p class="font-body text-[15px] font-light text-subtext0 leading-[1.85] max-w-[560px] mb-12">
          A selection of projects I've built, from intelligent AI systems and robust
          iOS apps to full-stack platforms. Each one presented unique challenges
          and learning opportunities.
        </p>
      </ScrollReveal>

      <div
        class="grid grid-cols-1 md:grid-cols-2"
        style="gap: 2px; background: var(--surface0);"
      >
        {#each projects as project, i}
          {@const isFeatured = i === 0}
          <div class="h-full {isFeatured ? 'md:col-span-2' : ''}">
            <ScrollReveal delay={i * 0.08} className="h-full">
              <ProjectCard {project} index={i} featured={isFeatured} />
            </ScrollReveal>
          </div>
        {/each}
      </div>
    </div>
  </section>
</div>
