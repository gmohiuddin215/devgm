import { json } from '@sveltejs/kit';
import { getAccessToken, isAllowedAdmin, uploadBlogImage } from '$lib/server/supabase';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async (event) => {
	if (!isAllowedAdmin(event.locals.user)) {
		return json({ message: 'Unauthorized.' }, { status: 401 });
	}

	const accessToken = getAccessToken(event);
	if (!accessToken) {
		return json({ message: 'Unauthorized.' }, { status: 401 });
	}

	const formData = await event.request.formData();
	const file = formData.get('file');

	if (!(file instanceof File)) {
		return json({ message: 'No image file was provided.' }, { status: 400 });
	}

	try {
		const location = await uploadBlogImage(accessToken, file);
		return json({ location });
	} catch (error) {
		return json(
			{ message: error instanceof Error ? error.message : 'Image upload failed.' },
			{ status: 400 }
		);
	}
};
