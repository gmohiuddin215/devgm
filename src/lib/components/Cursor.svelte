<script lang="ts">
  import { onMount } from 'svelte';

  let canvas: HTMLCanvasElement;
  let dotEl: HTMLDivElement;
  let isTouch = $state(false);

  // Ink-drop color palette – vivid cosmic colors
  const INK_COLORS = [
    { r: 139, g: 92,  b: 246 }, // violet
    { r: 59,  g: 130, b: 246 }, // blue
    { r: 20,  g: 184, b: 166 }, // teal
    { r: 236, g: 72,  b: 153 }, // pink
    { r: 250, g: 179, b: 135 }, // peach
    { r: 99,  g: 220, b: 190 }, // seafoam
    { r: 180, g: 120, b: 255 }, // lavender
    { r: 56,  g: 189, b: 248 }, // sky
  ];

  interface Ripple {
    x: number;
    y: number;
    r: number;       // current radius
    maxR: number;    // max radius
    life: number;    // 0 → 1
    decay: number;   // how fast life increases
    color: { r: number; g: number; b: number };
    // ring trails
    rings: { r: number; alpha: number }[];
  }

  interface InkBlob {
    x: number; y: number;
    vx: number; vy: number;
    r: number;
    life: number;   // 0 → 1
    decay: number;
    color: { r: number; g: number; b: number };
  }

  onMount(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      isTouch = true;
      return;
    }

    // ── Canvas setup ─────────────────────────────────────────────────────
    const ctx = canvas.getContext('2d')!;
    let W = window.innerWidth;
    let H = window.innerHeight;
    canvas.width  = W;
    canvas.height = H;

    const resize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width  = W;
      canvas.height = H;
    };
    window.addEventListener('resize', resize);

    // ── State ─────────────────────────────────────────────────────────────
    let mouse = { x: -999, y: -999 };
    let rawMouse = { x: -999, y: -999 };
    let ripples: Ripple[] = [];
    let blobs: InkBlob[] = [];
    let lastSpawn = 0;
    let colorIndex = 0;
    let raf: number;

    // ── Cursor dot tracking ───────────────────────────────────────────────
    const onMouseMove = (e: MouseEvent) => {
      rawMouse.x = e.clientX;
      rawMouse.y = e.clientY;

      // Position the dot exactly
      if (dotEl) {
        dotEl.style.transform = `translate(${e.clientX - 5}px, ${e.clientY - 5}px)`;
      }

      // Throttle ripple spawning (every ~30px movement or ~50ms)
      const dx = e.clientX - mouse.x;
      const dy = e.clientY - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const now = performance.now();

      if (dist > 18 || now - lastSpawn > 60) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        lastSpawn = now;
        spawnRipple(e.clientX, e.clientY);
        // occasionally spray micro blobs
        if (Math.random() < 0.45) spawnBlobs(e.clientX, e.clientY, 2 + Math.floor(Math.random() * 3));
      }
    };

    window.addEventListener('mousemove', onMouseMove);

    // ── Spawn helpers ─────────────────────────────────────────────────────
    function nextColor() {
      const c = INK_COLORS[colorIndex % INK_COLORS.length];
      colorIndex++;
      return c;
    }

    function spawnRipple(x: number, y: number) {
      const c = nextColor();
      const maxR = 35 + Math.random() * 55;
      ripples.push({
        x, y,
        r: 1,
        maxR,
        life: 0,
        decay: 0.012 + Math.random() * 0.01,
        color: c,
        rings: [],
      });
    }

    function spawnBlobs(x: number, y: number, n: number) {
      const c = INK_COLORS[(colorIndex + 1) % INK_COLORS.length];
      for (let i = 0; i < n; i++) {
        const angle  = Math.random() * Math.PI * 2;
        const speed  = Math.random() * 2.5 + 0.5;
        blobs.push({
          x: x + (Math.random() - 0.5) * 8,
          y: y + (Math.random() - 0.5) * 8,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          r: Math.random() * 4 + 2,
          life: 0,
          decay: 0.018 + Math.random() * 0.018,
          color: c,
        });
      }
    }

    // ── Draw loop ─────────────────────────────────────────────────────────
    function draw() {
      ctx.clearRect(0, 0, W, H);

      // ── Ripples ───────────────────────────────────────────────────────
      for (const rip of ripples) {
        rip.life += rip.decay;
        rip.r = rip.maxR * easeOut(Math.min(rip.life, 1));

        const outerAlpha = Math.max(0, 1 - rip.life) * 0.55;
        const { r: cr, g: cg, b: cb } = rip.color;

        // radial fill – ink spreading outward
        if (outerAlpha > 0.008) {
          const grad = ctx.createRadialGradient(rip.x, rip.y, 0, rip.x, rip.y, rip.r);
          grad.addColorStop(0,    `rgba(${cr},${cg},${cb},${(outerAlpha * 0.55).toFixed(3)})`);
          grad.addColorStop(0.35, `rgba(${cr},${cg},${cb},${(outerAlpha * 0.35).toFixed(3)})`);
          grad.addColorStop(0.75, `rgba(${cr},${cg},${cb},${(outerAlpha * 0.15).toFixed(3)})`);
          grad.addColorStop(1,    `rgba(${cr},${cg},${cb},0)`);
          ctx.beginPath();
          ctx.arc(rip.x, rip.y, rip.r, 0, Math.PI * 2);
          ctx.fillStyle = grad;
          ctx.fill();
        }

        // outer ring
        const ringAlpha = Math.max(0, (0.8 - rip.life) * 0.9);
        if (ringAlpha > 0.01) {
          ctx.beginPath();
          ctx.arc(rip.x, rip.y, rip.r, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(${cr},${cg},${cb},${ringAlpha.toFixed(3)})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }

        // secondary smaller ring – disturbance wave
        if (rip.life > 0.2) {
          const r2 = rip.r * 0.55;
          const a2 = Math.max(0, (0.7 - rip.life)) * 0.5;
          if (a2 > 0.01) {
            ctx.beginPath();
            ctx.arc(rip.x, rip.y, r2, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(${cr},${cg},${cb},${a2.toFixed(3)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // ── Ink blobs ─────────────────────────────────────────────────────
      for (const b of blobs) {
        b.life += b.decay;
        b.x += b.vx;
        b.y += b.vy;
        b.vx *= 0.94;
        b.vy *= 0.94;
        const alpha = Math.max(0, (1 - b.life) * 0.75);
        if (alpha > 0.01) {
          const { r: cr, g: cg, b: cb } = b.color;
          const grad = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r * (1 + b.life * 2));
          grad.addColorStop(0, `rgba(${cr},${cg},${cb},${alpha.toFixed(3)})`);
          grad.addColorStop(1, `rgba(${cr},${cg},${cb},0)`);
          ctx.beginPath();
          ctx.arc(b.x, b.y, b.r * (1 + b.life * 2), 0, Math.PI * 2);
          ctx.fillStyle = grad;
          ctx.fill();
        }
      }

      // ── Prune dead particles ──────────────────────────────────────────
      ripples = ripples.filter(r => r.life < 1.4);
      blobs   = blobs.filter(b => b.life < 1.0);

      raf = requestAnimationFrame(draw);
    }

    function easeOut(t: number) {
      return 1 - Math.pow(1 - t, 3);
    }

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', resize);
    };
  });
</script>

{#if !isTouch}
  <!-- Ink ripple canvas – sits above everything -->
  <canvas
    bind:this={canvas}
    style="
      position: fixed;
      inset: 0;
      width: 100vw;
      height: 100vh;
      pointer-events: none;
      z-index: 9990;
      mix-blend-mode: screen;
    "
  ></canvas>

  <!-- Tiny sharp cursor dot -->
  <div
    bind:this={dotEl}
    style="
      position: fixed;
      top: 0;
      left: 0;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: radial-gradient(circle, #fff 0%, rgba(180,190,255,0.9) 60%, transparent 100%);
      pointer-events: none;
      z-index: 9999;
      mix-blend-mode: screen;
      transform: translate(-999px, -999px);
      box-shadow: 0 0 6px 2px rgba(200,180,255,0.7);
    "
  ></div>
{/if}
