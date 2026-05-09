<script lang="ts">
	import PostForm from '$lib/components/admin/PostForm.svelte';

	let { form } = $props();
</script>

<svelte:head>
	<title>New Post | Blog Admin</title>
</svelte:head>

<div class="pt-[70px]">
	<section class="py-[80px]">
		<div class="mx-auto max-w-[1200px] px-6 lg:px-14">
			<div class="mb-8">
				<span class="mb-4 block font-mono text-[13px] tracking-[0.12em] text-green">
					// New article
				</span>
				<h1 class="font-display text-[clamp(40px,5vw,72px)] font-extrabold leading-none tracking-[-0.04em] text-text">
					Create post
				</h1>
				{#if form?.errors?.form}
					<p class="mt-4 rounded-md border border-red/30 bg-red/10 px-4 py-3 text-sm text-red">
						{form.errors.form}
					</p>
				{/if}
			</div>
			<PostForm errors={form?.errors ?? {}} submitLabel="Create post" />
		</div>
	</section>
</div>
