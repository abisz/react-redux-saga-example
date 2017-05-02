import _ from 'lodash';
import { STORE_DATA, STORE_DRIVERS } from './constants';

const initState = {
  data: [],
  drivers: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case STORE_DATA: {
      const data = _.concat(action.data, state.data);
      return Object.assign({}, state, {
        data,
      });
    }
    case STORE_DRIVERS: {
      return Object.assign({}, state, {
        drivers: action.drivers,
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
