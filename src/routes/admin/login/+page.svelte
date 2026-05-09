<script lang="ts">
	import { LockKeyhole, LogIn } from 'lucide-svelte';

	let { data, form } = $props();
</script>

<svelte:head>
	<title>Admin Login | Ghulam Mohiuddin</title>
</svelte:head>

<div class="pt-[70px]">
	<section class="flex min-h-[calc(100vh-70px)] items-center py-16">
		<div class="mx-auto grid w-full max-w-[980px] gap-8 px-6 lg:grid-cols-[1fr_420px] lg:px-14">
			<div class="flex flex-col justify-center">
				<span class="mb-4 font-mono text-[13px] tracking-[0.12em] text-green">// Admin</span>
				<h1 class="font-display text-[clamp(44px,6vw,82px)] font-extrabold leading-[0.94] tracking-[-0.04em] text-text">
					Write, edit, publish.
				</h1>
				<p class="mt-6 max-w-[520px] text-[15px] leading-8 text-subtext0">
					A focused publishing console for code-heavy articles, powered by Supabase Auth
					and the HugeRTE editor.
				</p>
			</div>

			<form method="POST" class="rounded-lg border border-surface0 bg-mantle/80 p-6">
				<div class="mb-6 flex items-center gap-3 text-green">
					<LockKeyhole size={20} />
					<span class="font-mono text-[11px] uppercase tracking-[0.14em]">Secure login</span>
				</div>

				<input type="hidden" name="redirectTo" value={data.redirectTo} />

				<label for="email" class="font-mono text-[11px] uppercase tracking-[0.14em] text-overlay1">
					Email
				</label>
				<input
					id="email"
					name="email"
					type="email"
					autocomplete="email"
					value={form?.email ?? ''}
					class="mt-3 w-full rounded-md border border-surface0 bg-base px-4 py-3 text-text outline-none transition focus:border-green"
				/>

				<label for="password" class="mt-5 block font-mono text-[11px] uppercase tracking-[0.14em] text-overlay1">
					Password
				</label>
				<input
					id="password"
					name="password"
					type="password"
					autocomplete="current-password"
					class="mt-3 w-full rounded-md border border-surface0 bg-base px-4 py-3 text-text outline-none transition focus:border-green"
				/>

				{#if !data.isConfigured}
					<p class="mt-5 rounded-md border border-yellow/30 bg-yellow/10 px-4 py-3 text-sm text-yellow">
						Supabase env vars are missing: <code>SUPABASE_URL</code> and
						<code>SUPABASE_ANON_KEY</code>.
					</p>
				{/if}

				{#if form?.error}
					<p class="mt-5 rounded-md border border-red/30 bg-red/10 px-4 py-3 text-sm text-red">
						{form.error}
					</p>
				{/if}

				<button
					type="submit"
					class="mt-6 flex w-full items-center justify-center gap-2 rounded-md bg-green px-4 py-3 font-mono text-[12px] font-bold uppercase tracking-[0.12em] text-crust transition hover:brightness-110 disabled:opacity-50"
					disabled={!data.isConfigured}
				>
					<LogIn size={16} />
					Log in
				</button>
			</form>
		</div>
	</section>
</div>
