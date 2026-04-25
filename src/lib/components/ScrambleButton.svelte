<script lang="ts">
  import { onMount, onDestroy } from 'svelte';

  let { href, text, external = false, showArrow = true, variant = "secondary" } = $props();

  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";
  let displayText = $state(text);
  let hovered = $state(false);
  
  let intervalRef: ReturnType<typeof setInterval> | null = null;
  let iteration = 0;

  let fillVisible = $derived(variant === "primary" ? !hovered : hovered);

  function scramble() {
    iteration = 0;
    if (intervalRef) clearInterval(intervalRef);
    intervalRef = setInterval(() => {
      displayText = text.split("").map((char: string, i: number) => {
        if (char === " ") return " ";
        if (i < iteration) return text[i];
        return chars[Math.floor(Math.random() * chars.length)];
      }).join("");
      iteration += 1 / 2;
      if (iteration >= text.length) {
        if (intervalRef) clearInterval(intervalRef);
        displayText = text;
      }
    }, 35);
  }

  function onEnter() {
    hovered = true;
    scramble();
  }

  function onLeave() {
    hovered = false;
    if (intervalRef) clearInterval(intervalRef);
    displayText = text;
  }

  onDestroy(() => {
    if (intervalRef) clearInterval(intervalRef);
  });

  let classNameStr = $derived([
    "group relative inline-flex items-center gap-3 overflow-hidden",
    "font-mono text-[11px] uppercase tracking-[0.14em]",
    "px-7 py-3.5",
    variant === "primary" ? "border border-green" : "border border-surface1",
    "transition-colors duration-500",
    variant === "primary" ? "hover:border-surface1" : "hover:border-green",
  ].join(" "));
</script>

{#snippet inner()}
  <span
    class="absolute inset-0 bg-green transition-transform duration-500"
    style="transform: {fillVisible ? 'scaleX(1)' : 'scaleX(0)'}; transform-origin: {variant === 'primary' ? (fillVisible ? 'left' : 'right') : 'left'}; transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);"
  ></span>
  <span
    class="relative z-10 flex items-center gap-3 transition-colors duration-500"
    style="color: {fillVisible ? 'var(--crust)' : 'var(--text)'};"
  >
    <span
      class="transition-opacity duration-300"
      style="font-variant-numeric: tabular-nums;"
    >
      {displayText}
    </span>
    {#if showArrow}
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        class="transition-all duration-500"
        style="transform: {fillVisible ? 'translate(2px, -2px)' : 'translate(0, 0)'}; opacity: {fillVisible ? 1 : 0.4};"
      >
        <path
          d="M1 13L13 1M13 1H3M13 1V11"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    {/if}
  </span>
{/snippet}

{#if external}
  <a {href} class={classNameStr} onmouseenter={onEnter} onmouseleave={onLeave} target="_blank" rel="noopener noreferrer">
    {@render inner()}
  </a>
{:else}
  <a {href} class={classNameStr} onmouseenter={onEnter} onmouseleave={onLeave}>
    {@render inner()}
  </a>
{/if}
