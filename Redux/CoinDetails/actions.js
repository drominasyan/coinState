const actions = {

	BASE_DATA_RELOAD   : 'BASE_DATA_RELOAD',
	BASE_DATA_REFRESH  : 'BASE_DATA_REFRESH',

	COINS_BASE_UI_REFRESH : 'COINS_BASE_UI_REFRESH',
	SET_FAVORITE : 'SET_FAVORITE',

	baseDataReload: id => ({
		type: actions.BASE_DATA_RELOAD,
		data : {
			id
		}
	}),

	baseDataRefrash: data => ({
		type: actions.BASE_DATA_REFRESH,
		data: {
			data,
		},
	}),
	
	uiRefresh: data => ({
		type: actions.COINS_BASE_UI_REFRESH,
		data,
	}),
};

export default actions;
