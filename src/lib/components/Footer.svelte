<script lang="ts">
  const footerLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/#contact", label: "Contact" },
  ];
</script>

<footer class="bg-crust" style="border-top: 1px solid rgba(205, 214, 244, 0.06);">
  <div class="max-w-[1200px] mx-auto px-6 lg:px-14 py-8">
    <div class="flex flex-col md:flex-row items-center justify-between gap-4">
      <span class="font-display text-[20px] font-bold tracking-tight text-text">
        GM<span class="text-peach">.</span>
      </span>

      <p class="font-display text-[16px] italic font-light text-subtext0 text-center">
        Designed & built by Ghulam Mohiuddin <span class="text-peach mx-2">✦</span>
      </p>

      <span class="font-mono text-[11px] tracking-widest text-overlay0">
        Lahore, Pakistan, {new Date().getFullYear()}
      </span>
    </div>

    <div
      class="mt-4 pt-4 flex items-center justify-center gap-4"
      style="border-top: 1px solid var(--surface0);"
    >
      {#each footerLinks as link, i}
        <span class="flex items-center gap-4">
          {#if i > 0}<span class="text-overlay0 text-[11px]">·</span>{/if}
          <a
            href={link.href}
            class="font-mono text-[11px] text-overlay0 hover:text-peach transition-colors duration-250"
          >
            {link.label}
          </a>
        </span>
      {/each}
    </div>
  </div>
</footer>
