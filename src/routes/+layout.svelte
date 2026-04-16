<script lang="ts">
  import '../app.css';
  import Cursor from '$lib/components/Cursor.svelte';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { page } from '$app/stores';

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href="/favicon.ico" />
  <link rel="canonical" href="https://devgm.vercel.app{$page.url.pathname}" />
  
  <!-- Primary Meta Tags -->
  <title>Ghulam Mohiuddin | AI Engineer & iOS Developer — Building Intelligent Systems</title>
  <meta name="title" content="Ghulam Mohiuddin | AI Engineer & iOS Developer — Building Intelligent Systems" />
  <meta name="description" content="AI Engineer & Senior iOS Developer building intelligent systems, production iOS apps, and full-stack solutions." />
  <meta name="keywords" content="AI Engineer, Machine Learning Engineer, iOS Developer, Python Developer" />
  <meta name="author" content="Ghulam Mohiuddin" />
</svelte:head>

<Cursor />
<Navbar />
<main>{@render children?.()}</main>
<Footer />
