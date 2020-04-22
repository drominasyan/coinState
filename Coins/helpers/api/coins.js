import {apiRequest} from './index';

function coinsList(params = {}) {

	const req = {
		method: 'GET',
		url: `/coins/`,
		params,
	};

	return apiRequest(req );
}

export const coinsAPI = {
    coinsList,
}