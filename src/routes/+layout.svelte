<script lang="ts">
  import '../app.css';
  import Cursor from '$lib/components/Cursor.svelte';
  import SpaceBackground from '$lib/components/SpaceBackground.svelte';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href="/favicon.ico" />
</svelte:head>

<SpaceBackground />
<Cursor />
<Navbar />
<main>{@render children?.()}</main>
<Footer />
