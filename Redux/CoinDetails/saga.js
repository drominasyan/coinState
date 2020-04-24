import { all, takeEvery, put, fork, call, select } from 'redux-saga/effects';
import actions from './actions';

import { coinsAPI } from '../../helpers/api/coins';

const messages = {
  errorListLoad : 'Loading Coin Details list failed',
};

function* dataReload() {
  yield takeEvery(actions.BASE_DATA_RELOAD, function* (action) {
    const {id} = action.data
    yield put(actions.uiRefresh({ loading: true }));
    
    try {
      const res = yield call(coinsAPI.coinDetails, id);
      if (res && res.status === 200) {
        yield put(actions.baseDataRefrash(res.data.coin));
      };
    } catch (error) {
      alert(messages.errorListLoad, error);
      console.log(error);
    }

    yield put(actions.uiRefresh({ loading: false }));
  });
}


export default function* detailsSagas() {
  yield all([
    fork(dataReload), 
  ]);
}
