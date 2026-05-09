import { redirect } from '@sveltejs/kit';
import { isAllowedAdmin } from '$lib/server/supabase';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals, url }) => {
	if (url.pathname !== '/admin/login' && !isAllowedAdmin(locals.user)) {
		redirect(303, `/admin/login?redirectTo=${encodeURIComponent(url.pathname)}`);
	}

	return {
		user: locals.user
	};
};
