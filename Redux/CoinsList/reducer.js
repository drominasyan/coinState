import { Map } from 'immutable';
import { fill } from '../../helpers/utils';
import actions from './actions';

const initState = new Map({
  list: [],

  UI: {
    loading: false,
    skip : 0,
    limit : 50,
  },
});

export default function coinsListReducer(state = initState, action) {
  switch (action.type) {
    case actions.COINS_LIST_REFRESH: {
      const { list } = action.data;
      const defaultLists = state.get('list');
      const newLists = [...defaultLists, ...list];
      return state.set('list', newLists);
    }

    case actions.COINS_LIST_UI_REFRESH: {
      const target = state.get('UI');
      const result = fill(action.data, target);
      return state.set('UI', result);
    }

    default:
      return state;
  }
}
