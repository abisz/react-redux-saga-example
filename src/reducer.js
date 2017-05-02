import _ from 'lodash';
import { STORE_DATA } from './constants';

const initState = {
  data: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case STORE_DATA: {
      const data = _.concat(action.data, state.data);
      return Object.assign({}, state, {
        data,
      });
    }
    default: {
      return state;
    }
  }
};

export default function createReducer() {
  return reducer;
}