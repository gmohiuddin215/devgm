<script lang="ts">
	import { browser } from '$app/environment';
	import { onDestroy, onMount } from 'svelte';
	import 'hugerte/skins/ui/oxide-dark/skin.css';
	import 'hugerte/skins/ui/oxide-dark/content.css';
	import hugerteScriptUrl from 'hugerte/hugerte.min.js?url';
	import themeScriptUrl from 'hugerte/themes/silver/theme.min.js?url';
	import iconsScriptUrl from 'hugerte/icons/default/icons.min.js?url';
	import modelScriptUrl from 'hugerte/models/dom/model.min.js?url';
	import advlistScriptUrl from 'hugerte/plugins/advlist/plugin.min.js?url';
	import autolinkScriptUrl from 'hugerte/plugins/autolink/plugin.min.js?url';
	import listsScriptUrl from 'hugerte/plugins/lists/plugin.min.js?url';
	import linkScriptUrl from 'hugerte/plugins/link/plugin.min.js?url';
	import imageScriptUrl from 'hugerte/plugins/image/plugin.min.js?url';
	import charmapScriptUrl from 'hugerte/plugins/charmap/plugin.min.js?url';
	import previewScriptUrl from 'hugerte/plugins/preview/plugin.min.js?url';
	import anchorScriptUrl from 'hugerte/plugins/anchor/plugin.min.js?url';
	import accordionScriptUrl from 'hugerte/plugins/accordion/plugin.min.js?url';
	import autoresizeScriptUrl from 'hugerte/plugins/autoresize/plugin.min.js?url';
	import autosaveScriptUrl from 'hugerte/plugins/autosave/plugin.min.js?url';
	import searchreplaceScriptUrl from 'hugerte/plugins/searchreplace/plugin.min.js?url';
	import visualblocksScriptUrl from 'hugerte/plugins/visualblocks/plugin.min.js?url';
	import visualcharsScriptUrl from 'hugerte/plugins/visualchars/plugin.min.js?url';
	import codeScriptUrl from 'hugerte/plugins/code/plugin.min.js?url';
	import fullscreenScriptUrl from 'hugerte/plugins/fullscreen/plugin.min.js?url';
	import insertdatetimeScriptUrl from 'hugerte/plugins/insertdatetime/plugin.min.js?url';
	import mediaScriptUrl from 'hugerte/plugins/media/plugin.min.js?url';
	import tableScriptUrl from 'hugerte/plugins/table/plugin.min.js?url';
	import codesampleScriptUrl from 'hugerte/plugins/codesample/plugin.min.js?url';
	import wordcountScriptUrl from 'hugerte/plugins/wordcount/plugin.min.js?url';
	import directionalityScriptUrl from 'hugerte/plugins/directionality/plugin.min.js?url';
	import emoticonsScriptUrl from 'hugerte/plugins/emoticons/plugin.min.js?url';
	import helpScriptUrl from 'hugerte/plugins/help/plugin.min.js?url';
	import importcssScriptUrl from 'hugerte/plugins/importcss/plugin.min.js?url';
	import nonbreakingScriptUrl from 'hugerte/plugins/nonbreaking/plugin.min.js?url';
	import pagebreakScriptUrl from 'hugerte/plugins/pagebreak/plugin.min.js?url';
	import quickbarsScriptUrl from 'hugerte/plugins/quickbars/plugin.min.js?url';
	import templateScriptUrl from 'hugerte/plugins/template/plugin.min.js?url';

	type HugeRTE = typeof import('hugerte').default;

	let {
		name = 'content',
		value = $bindable(''),
		label = 'Article body'
	}: {
		name?: string;
		value: string;
		label?: string;
	} = $props();

	const editorId = `hugerte-${Math.random().toString(36).slice(2)}`;

	let loading = $state(true);
	let error = $state('');
	let editor: { getContent: () => string } | null = null;
	let uploadError = $state('');

	const scripts = [
		hugerteScriptUrl,
		themeScriptUrl,
		iconsScriptUrl,
		modelScriptUrl,
		advlistScriptUrl,
		autolinkScriptUrl,
		listsScriptUrl,
		linkScriptUrl,
		imageScriptUrl,
		charmapScriptUrl,
		previewScriptUrl,
		anchorScriptUrl,
		accordionScriptUrl,
		autoresizeScriptUrl,
		autosaveScriptUrl,
		searchreplaceScriptUrl,
		visualblocksScriptUrl,
		visualcharsScriptUrl,
		codeScriptUrl,
		fullscreenScriptUrl,
		insertdatetimeScriptUrl,
		mediaScriptUrl,
		tableScriptUrl,
		codesampleScriptUrl,
		wordcountScriptUrl,
		directionalityScriptUrl,
		emoticonsScriptUrl,
		helpScriptUrl,
		importcssScriptUrl,
		nonbreakingScriptUrl,
		pagebreakScriptUrl,
		quickbarsScriptUrl,
		templateScriptUrl
	];

	function getHugeRTE() {
		if (!browser) return undefined;
		return (window as unknown as { hugerte?: HugeRTE }).hugerte;
	}

	function loadClassicScript(src: string) {
		return new Promise<void>((resolve, reject) => {
			const existing = document.querySelector<HTMLScriptElement>(`script[data-hugerte-src="${src}"]`);

			if (existing?.dataset.loaded === 'true') {
				resolve();
				return;
			}

			if (existing) {
				existing.addEventListener('load', () => resolve(), { once: true });
				existing.addEventListener('error', () => reject(new Error(`Unable to load ${src}`)), {
					once: true
				});
				return;
			}

			const script = document.createElement('script');
			script.src = src;
			script.async = false;
			script.dataset.hugerteSrc = src;
			script.addEventListener(
				'load',
				() => {
					script.dataset.loaded = 'true';
					resolve();
				},
				{ once: true }
			);
			script.addEventListener('error', () => reject(new Error(`Unable to load ${src}`)), {
				once: true
			});
			document.head.appendChild(script);
		});
	}

	async function loadHugeRTE() {
		for (const script of scripts) {
			await loadClassicScript(script);
		}

		const hugerte = getHugeRTE();
		if (!hugerte) throw new Error('HugeRTE did not initialize.');
		return hugerte;
	}

	onMount(async () => {
		try {
			const hugerte = await loadHugeRTE();

			const editors = await hugerte.init({
				selector: `#${editorId}`,
				height: 620,
				menubar: false,
				branding: false,
				promotion: false,
				skin: false,
				content_css: false,
				plugins:
					'accordion advlist anchor autolink autoresize autosave charmap code codesample directionality emoticons fullscreen help image importcss insertdatetime link lists media nonbreaking pagebreak preview quickbars searchreplace table template visualblocks visualchars wordcount',
				toolbar:
					'undo redo restoredraft | blocks fontfamily fontsize | bold italic underline strikethrough forecolor backcolor removeformat | alignleft aligncenter alignright alignjustify lineheight | bullist numlist outdent indent blockquote accordion | link image media table codesample charmap emoticons | ltr rtl visualblocks visualchars nonbreaking pagebreak | searchreplace preview fullscreen code help',
				contextmenu: 'link image table codesample',
				quickbars_selection_toolbar:
					'bold italic underline | quicklink blockquote codesample | h2 h3 bullist numlist',
				quickbars_insert_toolbar: 'quickimage quicktable media codesample',
				automatic_uploads: true,
				autosave_interval: '20s',
				autosave_retention: '30m',
				browser_spellcheck: true,
				image_advtab: true,
				image_caption: true,
				link_default_target: '_blank',
				link_assume_external_targets: 'https',
				table_advtab: true,
				table_cell_advtab: true,
				table_row_advtab: true,
				table_toolbar:
					'tableprops tabledelete | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol',
				media_live_embeds: true,
				toolbar_mode: 'sliding',
				images_upload_handler: async (blobInfo: { blob: () => Blob; filename: () => string }) => {
					uploadError = '';
					const formData = new FormData();
					formData.set('file', blobInfo.blob(), blobInfo.filename());

					const response = await fetch('/admin/uploads/image', {
						method: 'POST',
						body: formData
					});
					const payload = await response.json().catch(() => null);

					if (!response.ok || !payload?.location) {
						uploadError = payload?.message ?? 'Image upload failed.';
						throw new Error(uploadError);
					}

					return payload.location;
				},
				block_formats:
					'Paragraph=p; Heading 2=h2; Heading 3=h3; Heading 4=h4; Blockquote=blockquote; Preformatted=pre',
				font_family_formats:
					'System=Inter,system-ui,sans-serif; JetBrains Mono=JetBrains Mono,monospace; Georgia=georgia,palatino,serif; Helvetica=helvetica,arial,sans-serif',
				font_size_formats: '12px 14px 16px 18px 20px 24px 28px 32px 40px',
				line_height_formats: '1 1.2 1.4 1.6 1.8 2',
				codesample_languages: [
					{ text: 'JavaScript', value: 'javascript' },
					{ text: 'TypeScript', value: 'typescript' },
					{ text: 'Svelte', value: 'markup' },
					{ text: 'Swift', value: 'swift' },
					{ text: 'Python', value: 'python' },
					{ text: 'Bash', value: 'bash' },
					{ text: 'JSON', value: 'json' },
					{ text: 'SQL', value: 'sql' },
					{ text: 'HTML/XML', value: 'markup' },
					{ text: 'CSS', value: 'css' }
				],
				templates: [
					{
						title: 'Code walkthrough',
						description: 'Heading, explanation, and code sample.',
						content:
							'<h2>Implementation notes</h2><p>Explain the tradeoff or decision here.</p><pre class="language-typescript"><code>// Paste code here</code></pre>'
					},
					{
						title: 'Pros and cons',
						description: 'A compact decision list.',
						content:
							'<h3>Pros</h3><ul><li>Fast to ship</li></ul><h3>Cons</h3><ul><li>Requires follow-up hardening</li></ul>'
					}
				],
				content_style:
					'body{font-family:Inter,system-ui,sans-serif;font-size:16px;line-height:1.75;color:#cdd6f4;background:#181825;padding:20px} pre,code{font-family:"JetBrains Mono",monospace} a{color:#94e2d5} h2,h3,h4{color:#f5f5ff}',
				setup: (editor: {
					on: (event: string, callback: () => void) => void;
					getContent: () => string;
				}) => {
					const sync = () => {
						value = editor.getContent();
					};
					editor.on('change keyup setcontent undo redo', sync);
				}
			});
			editor = Array.isArray(editors) ? (editors[0] as typeof editor) : null;
		} catch (caught) {
			error = caught instanceof Error ? caught.message : 'HugeRTE failed to load.';
		} finally {
			loading = false;
		}
	});

	onDestroy(() => {
		if (!browser) return;
		if (editor) {
			value = editor.getContent();
		}
		getHugeRTE()?.remove(`#${editorId}`);
	});
</script>

<div class="space-y-3">
	<label for={editorId} class="font-mono text-[11px] uppercase tracking-[0.14em] text-overlay1">
		{label}
	</label>
	<input type="hidden" {name} value={value} />
	<textarea
		id={editorId}
		class="hidden"
		bind:value
		aria-label={label}
	></textarea>
	{#if loading}
		<div class="flex min-h-[520px] items-center justify-center rounded-lg border border-surface0 bg-mantle/70">
			<p class="font-body text-[13px] text-subtext0">Loading HugeRTE editor...</p>
		</div>
	{/if}
	{#if error}
		<p class="rounded-md border border-red/30 bg-red/10 px-4 py-3 font-body text-[13px] text-red">
			{error}
		</p>
	{/if}
	{#if uploadError}
		<p class="rounded-md border border-red/30 bg-red/10 px-4 py-3 font-body text-[13px] text-red">
			{uploadError}
		</p>
	{/if}
</div>
