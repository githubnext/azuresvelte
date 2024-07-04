import type { Actions } from './$types';

import { ApplicationInsights } from '@microsoft/applicationinsights-web'

import { env } from '$env/dynamic/private';

let appInsights: ApplicationInsights;
if ('APPLICATIONINSIGHTS_CONNECTION_STRING' in env) {
	appInsights = new ApplicationInsights({ config: {
		connectionString: env.APPLICATIONINSIGHTS_CONNECTION_STRING
	} });
}

export const actions = {
	login: async (event) => {
		console.error("THE EVENT: ", event, event.request);
		appInsights?.trackTrace({message: 'login event', properties: {event}});
		return {action: 'login'};
	},
	logout: async (event) => {
		return {action: 'logout'};
	},
} satisfies Actions;