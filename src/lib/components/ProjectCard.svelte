<script lang="ts">
  let { project, index, featured = false } = $props();
  // project uses structure from $lib/data: { slug, title, description, technologies }

  let hovered = $state(false);
</script>

<a
  href={`/projects/${project.slug}`}
  class="project-card group relative block bg-mantle p-8 lg:p-11 transition-all duration-[400ms] h-full"
  style="background-color: {hovered ? '#1f1f2e' : 'var(--mantle)'}"
  onmouseenter={() => hovered = true}
  onmouseleave={() => hovered = false}
>
  <div
    class="absolute inset-0 transition-opacity duration-[400ms] pointer-events-none"
    style="background: linear-gradient(135deg, rgba(250,179,135,0.07), transparent); opacity: {hovered ? 1 : 0};"
  ></div>

  <div
    class="absolute bottom-0 left-0 h-[2px] bg-peach transition-all duration-500"
    style="width: {hovered ? '100%' : '0%'}; transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);"
  ></div>

  <div class="relative z-10">
    <span class="font-mono text-[11px] text-overlay0 block mb-3">
      {String(index + 1).padStart(2, "0")}
    </span>

    <h3
      class="font-display font-semibold text-text mb-3 leading-tight"
      style="font-size: {featured ? 'clamp(32px, 4vw, 44px)' : 'clamp(28px, 3vw, 36px)'}"
    >
      {project.title}
    </h3>

    <p class="font-body text-[14px] font-light text-subtext0 leading-[1.75] mb-4 max-w-[520px]">
      {project.description}
    </p>

    <div class="flex flex-wrap gap-2 mb-4">
      {#each project.technologies as tag}
        <span class="font-mono text-[10px] text-subtext1 bg-surface0 px-2.5 py-1 rounded">
          {tag}
        </span>
      {/each}
    </div>

    <span
      class="text-peach text-lg inline-block transition-all duration-300"
      style="opacity: {hovered ? 1 : 0}; transform: {hovered ? 'translate(0, 0)' : 'translate(-8px, 8px)'};"
    >
      ↗
    </span>
  </div>
</a>
