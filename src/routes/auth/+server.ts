import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async (e) => {
	console.log([...e.request.headers.entries()])
	return json([...e.request.headers.entries()]);
}