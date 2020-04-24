import { Map } from 'immutable';
import { fill } from '../../helpers/utils';
import actions from './actions';

const initState = new Map({
  baseData: {},

  UI: {
    loading  : false,
  },
});

export default function coinDetailsReducer(state = initState, action) {
  switch (action.type) {
    case actions.BASE_DATA_REFRESH: {
      const { data } = action.data;
      return state.set('baseData', data);
    }

    case actions.COINS_BASE_UI_REFRESH: {
      const target = state.get('UI');
      const result = fill(action.data, target);
      return state.set('UI', result);
    }

    default:
      return state;
  }
}
