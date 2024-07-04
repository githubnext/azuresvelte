import type { Actions } from './$types';

export const actions = {
	login: async (event) => {
		console.log(event);
		return {action: 'login'};
	},
	logout: async (event) => {
		return {action: 'logout'};
	},
} satisfies Actions;