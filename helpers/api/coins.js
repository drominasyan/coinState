import {apiRequest} from './index';

function coinsList(params = {}) {

	const req = {
		method: 'GET',
		url: `/coins/`,
		params,
	};

	return apiRequest(req );
}

function coinDetails(id, params = {}) {
	const req = {
		method: 'GET',
		url: `/coins/${id}`,
		params,
	};

	return apiRequest(req );
}

export const coinsAPI = {
	coinsList,
	coinDetails,
}