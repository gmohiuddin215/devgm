<script lang="ts">
  const items = [
    "AI Engineering",
    "Machine Learning",
    "iOS Development",
    "SwiftUI & Combine",
    "Python & FastAPI",
    "PyTorch",
    "LangChain",
    "RAG & LLMs",
    "Clean Architecture",
  ];
</script>

<div class="w-full bg-crust py-7 overflow-hidden group" style="border-top: 1px solid rgba(205, 214, 244, 0.06); border-bottom: 1px solid rgba(205, 214, 244, 0.06);">
  <div class="flex whitespace-nowrap group-hover:[animation-play-state:paused]" style="animation: marquee 30s linear infinite;">
    {#each [...items, ...items] as item}
      <span class="font-display text-[28px] font-light italic text-surface2 hover:text-peach transition-colors duration-250 mx-6 shrink-0">
        {item} <span class="text-surface1 mx-2">✦</span>
      </span>
    {/each}
  </div>
</div>
