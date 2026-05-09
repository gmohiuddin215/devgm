import { clearSessionCookies } from '$lib/server/supabase';
import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async (event) => {
	clearSessionCookies(event);
	redirect(303, '/admin/login');
};
