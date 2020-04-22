import { all } from 'redux-saga/effects';
import coinsSagas from './Coins/saga';


export default function* rootSaga() {
  yield all([
    coinsSagas(),
  ]);
}
