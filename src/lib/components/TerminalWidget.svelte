<script lang="ts">
  import { fade } from 'svelte/transition';
  import { onMount } from 'svelte';

  const lines = [
    { type: "prompt", content: "❯ cat profile.json" },
    { type: "brace", content: "{" },
    { type: "kv", key: '"name"', value: '"Ghulam Mohiuddin"' },
    { type: "kv", key: '"role"', value: '"AI Engineer & iOS Dev"' },
    { type: "kv", key: '"location"', value: '"Lahore, Pakistan"' },
    { type: "array", key: '"stack"', value: '["Python", "Swift"]' },
    { type: "kv", key: '"open_to"', value: '"Freelance & contracts"' },
    { type: "kv", key: '"status"', value: '"building..."' },
    { type: "brace", content: "}" },
    { type: "cursor", content: "❯ _" },
  ];

  let elRef: HTMLDivElement | undefined;
  let inView = $state(false);

  onMount(() => {
    if (!elRef) {
      inView = true;
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        inView = true;
        observer.disconnect();
      }
    }, { rootMargin: "0px" });
    observer.observe(elRef);
    return () => observer.disconnect();
  });
</script>

<div bind:this={elRef} class="rounded-lg overflow-hidden border border-surface0">
  <div class="flex items-center gap-2 px-4 py-3 bg-crust" style="border-bottom: 1px solid var(--surface0)">
    <span class="w-3 h-3 rounded-full bg-red"></span>
    <span class="w-3 h-3 rounded-full bg-yellow"></span>
    <span class="w-3 h-3 rounded-full bg-green"></span>
    <span class="flex-1 text-center font-mono text-[11px] text-overlay0">~/ghulam - zsh</span>
  </div>

  <div class="bg-mantle p-5 font-mono text-[13px] leading-relaxed">
    {#if inView}
      {#each lines as line, i}
        <div in:fade={{ delay: (0.6 + i * 0.4) * 1000, duration: 400 }}>
          {#if line.type === "prompt"}
            <span style="color: var(--green)">❯</span> <span style="color: var(--text)">cat profile.json</span>
          {:else if line.type === "brace"}
            <span style="color: var(--subtext0)">{line.content}</span>
          {:else if line.type === "kv"}
            <span class="pl-4">
              <span style="color: var(--peach)">{line.key}</span>
              <span style="color: var(--subtext0)">: </span>
              <span style="color: var(--yellow)">{line.value}</span>
              <span style="color: var(--subtext0)">,</span>
            </span>
          {:else if line.type === "array"}
            <span class="pl-4">
              <span style="color: var(--peach)">{line.key}</span>
              <span style="color: var(--subtext0)">: </span>
              <span style="color: var(--lavender)">{line.value}</span>
              <span style="color: var(--subtext0)">,</span>
            </span>
          {:else if line.type === "cursor"}
            <span style="color: var(--green)">❯</span> <span style="animation: blink 1s step-end infinite; color: var(--text)">_</span>
          {/if}
        </div>
      {/each}
    {/if}
  </div>
</div>
