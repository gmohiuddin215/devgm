<script lang="ts">
  import { onMount } from 'svelte';

  let canvas: HTMLCanvasElement;

  onMount(() => {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = 0, H = 0;
    let raf: number;

    // ── Stars ─────────────────────────────────────────────────────────────
    interface Star {
      x: number; y: number;
      r: number;
      alpha: number;
      twinkleSpeed: number;
      twinklePhase: number;
      color: string;
    }

    const STAR_COLORS = [
      'rgba(255,255,255,',
      'rgba(180,190,255,',   // blue-white
      'rgba(255,220,180,',   // warm
      'rgba(200,240,255,',   // ice blue
    ];

    let stars: Star[] = [];

    // ── Shooting stars ────────────────────────────────────────────────────
    interface Shoot {
      x: number; y: number;
      vx: number; vy: number;
      len: number;
      alpha: number;
      life: number;
      maxLife: number;
    }
    let shoots: Shoot[] = [];
    let nextShoot = 0;

    // ── Nebula blobs ───────────────────────────────────────────────────────
    interface Nebula {
      x: number; y: number;
      rx: number; ry: number;
      color: string;
      alpha: number;
    }
    let nebulae: Nebula[] = [];

    const NEBULA_PALETTE = [
      '139, 92, 246',   // violet
      '59, 130, 246',   // blue
      '16, 185, 129',   // teal
      '236, 72, 153',   // pink/magenta
      '250, 179, 135',  // peach
    ];

    function init() {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;

      stars = [];
      const count = Math.floor((W * H) / 4000);
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * W,
          y: Math.random() * H,
          r: Math.random() * 1.4 + 0.3,
          alpha: Math.random() * 0.6 + 0.2,
          twinkleSpeed: Math.random() * 0.012 + 0.004,
          twinklePhase: Math.random() * Math.PI * 2,
          color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
        });
      }

      nebulae = [
        { x: W * 0.15, y: H * 0.2,  rx: W * 0.35, ry: H * 0.25, color: NEBULA_PALETTE[0], alpha: 0.045 },
        { x: W * 0.85, y: H * 0.15, rx: W * 0.28, ry: H * 0.22, color: NEBULA_PALETTE[1], alpha: 0.04  },
        { x: W * 0.5,  y: H * 0.75, rx: W * 0.4,  ry: H * 0.2,  color: NEBULA_PALETTE[2], alpha: 0.035 },
        { x: W * 0.75, y: H * 0.6,  rx: W * 0.25, ry: H * 0.25, color: NEBULA_PALETTE[3], alpha: 0.03  },
        { x: W * 0.1,  y: H * 0.8,  rx: W * 0.3,  ry: H * 0.18, color: NEBULA_PALETTE[4], alpha: 0.04  },
      ];
    }

    function spawnShoot() {
      const edge = Math.random();
      let sx = 0, sy = 0;
      if (edge < 0.5) { sx = Math.random() * W; sy = 0; }
      else { sx = 0; sy = Math.random() * H * 0.5; }
      const angle = (Math.PI / 4) + (Math.random() - 0.5) * 0.4;
      const speed = Math.random() * 6 + 4;
      shoots.push({
        x: sx, y: sy,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        len: Math.random() * 100 + 60,
        alpha: 1,
        life: 0,
        maxLife: Math.random() * 60 + 40,
      });
    }

    let t = 0;

    function draw() {
      if (!ctx) return;
      t++;
      ctx.clearRect(0, 0, W, H);

      // ── Deep space gradient background ─────────────────────────────────
      const bg = ctx.createLinearGradient(0, 0, W * 0.4, H);
      bg.addColorStop(0,   '#04040f');
      bg.addColorStop(0.3, '#07091a');
      bg.addColorStop(0.7, '#060818');
      bg.addColorStop(1,   '#050712');
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, W, H);

      // ── Nebulae ────────────────────────────────────────────────────────
      for (const n of nebulae) {
        ctx.save();
        ctx.translate(n.x, n.y);
        ctx.scale(1, n.ry / n.rx);
        const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, n.rx);
        grad.addColorStop(0,   `rgba(${n.color}, ${n.alpha})`);
        grad.addColorStop(0.5, `rgba(${n.color}, ${n.alpha * 0.4})`);
        grad.addColorStop(1,   `rgba(${n.color}, 0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(0, 0, n.rx, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // ── Stars ─────────────────────────────────────────────────────────
      for (const s of stars) {
        s.twinklePhase += s.twinkleSpeed;
        const alphaVal = s.alpha * (0.6 + 0.4 * Math.sin(s.twinklePhase));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `${s.color}${alphaVal.toFixed(3)})`;
        ctx.fill();

        // tiny cross-glow for bigger stars
        if (s.r > 1.1) {
          const gSize = s.r * 6;
          const grd = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, gSize);
          grd.addColorStop(0,   `${s.color}${(alphaVal * 0.4).toFixed(3)})`);
          grd.addColorStop(1,   `${s.color}0)`);
          ctx.beginPath();
          ctx.arc(s.x, s.y, gSize, 0, Math.PI * 2);
          ctx.fillStyle = grd;
          ctx.fill();
        }
      }

      // ── Shooting stars ────────────────────────────────────────────────
      if (t > nextShoot) {
        spawnShoot();
        nextShoot = t + Math.floor(Math.random() * 300 + 120);
      }
      shoots = shoots.filter(s => s.life < s.maxLife);
      for (const s of shoots) {
        s.life++;
        s.x += s.vx;
        s.y += s.vy;
        const progress = s.life / s.maxLife;
        const alpha = progress < 0.2 ? progress / 0.2 : (progress > 0.7 ? (1 - progress) / 0.3 : 1);
        const tail = ctx.createLinearGradient(
          s.x - s.vx * (s.len / Math.hypot(s.vx, s.vy)),
          s.y - s.vy * (s.len / Math.hypot(s.vx, s.vy)),
          s.x, s.y
        );
        tail.addColorStop(0, `rgba(255,255,255,0)`);
        tail.addColorStop(1, `rgba(220,230,255,${(alpha * 0.9).toFixed(3)})`);
        ctx.beginPath();
        ctx.moveTo(s.x - s.vx * (s.len / Math.hypot(s.vx, s.vy)), s.y - s.vy * (s.len / Math.hypot(s.vx, s.vy)));
        ctx.lineTo(s.x, s.y);
        ctx.strokeStyle = tail;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      raf = requestAnimationFrame(draw);
    }

    init();
    draw();
    window.addEventListener('resize', init);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', init);
    };
  });
</script>

<canvas
  bind:this={canvas}
  style="
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    z-index: -1;
  "
></canvas>
