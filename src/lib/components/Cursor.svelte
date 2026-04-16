<script lang="ts">
  import { onMount } from 'svelte';

  let dotRef: HTMLDivElement | undefined;
  let ringRef: HTMLDivElement | undefined;
  
  let mouse = { x: -100, y: -100 };
  let ringPos = { x: -100, y: -100 };
  let isHovering = $state(false);
  let isTouch = $state(false);

  onMount(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      isTouch = true;
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      if (dotRef) {
        dotRef.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
    };

    const isHoverable = (target: HTMLElement) => {
      return target.closest("a") ||
        target.closest("button") ||
        target.closest(".project-card") ||
        target.closest(".pill");
    };

    const onMouseOver = (e: MouseEvent) => {
      if (isHoverable(e.target as HTMLElement)) isHovering = true;
    };

    const onMouseOut = (e: MouseEvent) => {
      if (isHoverable(e.target as HTMLElement)) isHovering = false;
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);

    let raf: number;
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      ringPos.x = lerp(ringPos.x, mouse.x, 0.13);
      ringPos.y = lerp(ringPos.y, mouse.y, 0.13);
      if (ringRef) {
        const size = isHovering ? 52 : 32;
        const offset = size / 2;
        ringRef.style.transform = `translate(${ringPos.x - offset}px, ${ringPos.y - offset}px)`;
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
      cancelAnimationFrame(raf);
    };
  });
</script>

{#if !isTouch}
  <div
    bind:this={dotRef}
    style="position: fixed; top: 0; left: 0; width: 8px; height: 8px; border-radius: 50%; background-color: var(--peach); pointer-events: none; z-index: 9999; mix-blend-mode: screen;"
  ></div>
  <div
    bind:this={ringRef}
    style="position: fixed; top: 0; left: 0; width: {isHovering ? 52 : 32}px; height: {isHovering ? 52 : 32}px; border-radius: 50%; border: 1.5px solid var(--peach); opacity: {isHovering ? 0.25 : 0.5}; pointer-events: none; z-index: 9998; transition: width 0.35s cubic-bezier(0.23, 1, 0.32, 1), height 0.35s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.35s cubic-bezier(0.23, 1, 0.32, 1);"
  ></div>
{/if}
