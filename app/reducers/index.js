import { combineReducers } from 'redux';
import * as Actions from '../actions/';

const dummyDataReducer = (state = { dummyData: [], dummyDataLoading: true }, action) => {
  switch(action.type) {
    case Actions.DUMMY_DATA_AVAILABLE:
      return Object.assign(
        {},
        state,
        {
          dummyData: action.data,
          dummyDataLoading: false
        }
      );
    default:
      return state;
  }
}

// combine all reducers
const rootReducer = combineReducers({
  dummyDataReducer
});

export default rootReducer;
