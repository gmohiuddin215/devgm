import { fail, redirect } from '@sveltejs/kit';
import {
	clearSessionCookies,
	isAllowedAdmin,
	isSupabaseConfigured,
	loginWithPassword,
	resolveSession,
	setSessionCookies
} from '$lib/server/supabase';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals, url }) => {
	if (locals.user) {
		redirect(303, url.searchParams.get('redirectTo') || '/admin');
	}

	return {
		isConfigured: isSupabaseConfigured(),
		redirectTo: url.searchParams.get('redirectTo') || '/admin'
	};
};

export const actions: Actions = {
	default: async (event) => {
		const formData = await event.request.formData();
		const email = String(formData.get('email') ?? '').trim();
		const password = String(formData.get('password') ?? '');
		const redirectTo = String(formData.get('redirectTo') ?? '/admin');

		if (!email || !password) {
			return fail(400, { email, error: 'Email and password are required.' });
		}

		try {
			const tokens = await loginWithPassword(email, password);
			setSessionCookies(event, tokens);
			const user = await resolveSession(event);
			if (!isAllowedAdmin(user)) {
				clearSessionCookies(event);
				return fail(403, {
					email,
					error: 'This account is not allowed to access the blog admin.'
				});
			}
		} catch (error) {
			return fail(400, {
				email,
				error: error instanceof Error ? error.message : 'Unable to log in.'
			});
		}

		redirect(303, redirectTo);
	}
};
