import { all, takeEvery, put, fork, call, select } from 'redux-saga/effects';
import cloneDeep from 'lodash/cloneDeep';
import actions from './actions';

import { coinsAPI } from '../../helpers/api/coins';

const messages = {
  errorListLoad : 'Loading Coins list failed',
};

function getStoreData(state) {
  const { Coins } = state;
  const UI = Coins.get('UI');
  const { skip, limit } = UI;

  return {
    skip,
    limit,
  };
}

function* listReload() {
  yield takeEvery(actions.COINS_LIST_RELOAD, function* () {
    yield put(actions.uiRefresh({ loading: true }));
    const { skip, limit } = yield select(getStoreData);
    const params = {
      skip,
      limit,
    }

    try {
      const res = yield call(coinsAPI.coinsList, params);
      if (res && res.status === 200) {
        yield put(actions.listRefresh(res.data.coins));
      };
    } catch (error) {
      alert(messages.errorListLoad, error);
      console.log(error);
    }

    yield put(actions.uiRefresh({ loading: false }));
  });
}

export default function* coinsListSaga() {
  yield all([fork(listReload)]);
}
