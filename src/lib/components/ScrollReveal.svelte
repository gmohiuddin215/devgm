<script lang="ts">
  import { onMount } from 'svelte';
  let { children, delay = 0, className = "" } = $props();

  let elRef: HTMLDivElement | undefined;
  let inView = $state(false);

  onMount(() => {
    if (!elRef) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        inView = true;
        observer.disconnect();
      }
    }, { rootMargin: "-80px" });
    observer.observe(elRef);
    return () => observer.disconnect();
  });
</script>

<div
  bind:this={elRef}
  class="{className} transition-all"
  style="
    opacity: {inView ? 1 : 0};
    transform: translateY({inView ? 0 : 32}px);
    transition-duration: 650ms;
    transition-delay: {delay}s;
    transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
  "
>
  {@render children()}
</div>
