import { error, fail, redirect } from '@sveltejs/kit';
import {
	getAccessToken,
	getAdminPost,
	postInputFromForm,
	updatePost,
	validatePostInput
} from '$lib/server/supabase';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const accessToken = getAccessToken(event);
	if (!accessToken) redirect(303, '/admin/login');

	const post = await getAdminPost(accessToken, event.params.id);
	if (!post) error(404, 'Post not found');

	return { post };
};

export const actions: Actions = {
	default: async (event) => {
		const accessToken = getAccessToken(event);
		if (!accessToken) redirect(303, '/admin/login');

		const input = postInputFromForm(await event.request.formData());
		const errors = validatePostInput(input);

		if (Object.keys(errors).length > 0) {
			return fail(400, { errors });
		}

		try {
			await updatePost(accessToken, event.params.id, input);
		} catch (error) {
			return fail(400, {
				errors: {
					form: error instanceof Error ? error.message : 'Unable to update post.'
				}
			});
		}

		redirect(303, `/admin/posts/${event.params.id}/edit?saved=1`);
	}
};
