import { all } from 'redux-saga/effects';
import coinsSagas from './CoinsList/saga';
import detailsSagas from './CoinDetails/saga';


export default function* rootSaga() {
  yield all([
    coinsSagas(),
    detailsSagas(),
  ]);
}
