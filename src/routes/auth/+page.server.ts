import type { Actions } from './$types';

export const actions = {
	login: async (event) => {
		console.error("THE EVENT: ", event, event.request);
		return {action: 'login'};
	},
	logout: async (event) => {
		return {action: 'logout'};
	},
} satisfies Actions;

