import { fail, redirect } from '@sveltejs/kit';
import {
	createPost,
	getAccessToken,
	postInputFromForm,
	validatePostInput
} from '$lib/server/supabase';
import type { Actions } from './$types';

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
			const post = await createPost(accessToken, input);
			redirect(303, `/admin/posts/${post.id}/edit`);
		} catch (error) {
			return fail(400, {
				errors: {
					form: error instanceof Error ? error.message : 'Unable to create post.'
				}
			});
		}
	}
};
