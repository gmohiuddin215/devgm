import { resolveSession } from '$lib/server/supabase';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.user = await resolveSession(event);
	return resolve(event);
};
