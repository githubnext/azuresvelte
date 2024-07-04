import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const fallback: RequestHandler = async ({request, platform}) => {
	return json({request, platform});
}