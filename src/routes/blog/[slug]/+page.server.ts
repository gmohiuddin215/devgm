import { error } from '@sveltejs/kit';
import { getPublishedPost } from '$lib/server/supabase';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const post = await getPublishedPost(params.slug);

	if (!post) {
		error(404, 'Post not found');
	}

	return { post };
};
