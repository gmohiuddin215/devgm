import { getAccessToken, listAdminPosts } from '$lib/server/supabase';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const accessToken = getAccessToken(event);

	return {
		posts: accessToken ? await listAdminPosts(accessToken) : []
	};
};
