const actions = {

	COINS_LIST_RELOAD   : 'COINS_LIST_RELOAD',
	COINS_LIST_REFRESH  : 'COINS_LIST_REFRESH',

	COINS_LIST_UI_REFRESH : 'COINS_LIST_UI_REFRESH',

	listReload: () => ({
		type: actions.COINS_LIST_RELOAD,
	}),
	listRefresh: list => ({
		type: actions.COINS_LIST_REFRESH,
		data: {
			list,
		},
	}),
	
	uiRefresh: data => ({
		type: actions.COINS_LIST_UI_REFRESH,
		data,
	}),
};

export default actions;
