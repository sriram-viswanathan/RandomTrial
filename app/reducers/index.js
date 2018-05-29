import { combineReducers } from 'redux';
import * as Actions from '../actions/';

const dataReducer = (state = { allData: [], allDataLoading: true }, action) => {
  switch(action.type) {
    case Actions.ALL_DATA_AVAILABLE:
      return Object.assign(
        {},
        state,
        {
          allData: action.data,
          allDataLoading: false
        }
      );
    case Actions.CARD_DATA_UPDATED:
      let previousDummyData = state.allData;
      let updatedCategory = action.category;
      let updatedOption = action.option;

      let updatedDummyData = [];
      for (var i = 0; i < previousDummyData.length; i++) {
        let options = [];

        for (var j = 0; j < previousDummyData[i].options.length; j++) {
          let option = Object.assign({}, previousDummyData[i].options[j]);

          if (updatedCategory.id === previousDummyData[i].id && option.id === updatedOption.id) {
            option.isSelected = !option.isSelected;
          }

          options.push(option);
        }
        let category = Object.assign({}, previousDummyData[i], { options: options });
        updatedDummyData.push(category);
      }

      return Object.assign(
        {},
        state,
        {
          allData: updatedDummyData
        }
      );
    default:
      return state;
  }
}

const bingoValidationReducer  = (state = { isValidBingo: false }, action) => {
  switch(action.type) {
    case Actions.BINGO_DATA_VALIDATED:
      return Object.assign(
        {},
        state,
        {
          isValidBingo: action.isValidBingo
        }
      );
    default:
      return state;
    }
}

// combine all reducers
const rootReducer = combineReducers({
  dataReducer,
  bingoValidationReducer
});

export default rootReducer;
