import { combineReducers } from 'redux';
import * as Actions from '../actions/';
import OptionPicker from '../utils/option-picker-helper';

const dataReducer = (state = { allData: [], allDataLoading: true, cardData:[], cardDataLoading: true }, action) => {
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
    case Actions.GENERATE_CARD_DATA:
      let allData = state.allData;
      let cardData = [];

      for (let i = 0; i < Actions.CARD_COLUMNS; i++) {
        let category = Object.assign({}, allData[i]);
        category.options = OptionPicker.getOptions(category.options, Actions.CARD_ROWS, "mappedNumber");

        cardData.push(category);
      }
      return Object.assign(
        {},
        state,
        {
          cardData: cardData,
          cardDataLoading: false
        }
      );
    case Actions.CARD_DATA_UPDATED:
      let previousDummyData = state.cardData;
      let updatedCategory = action.category;
      let updatedOption = action.option;

      let updatedDummyData = [];
      for (var i = 0; i < previousDummyData.length; i++) {
        let options = [];

        for (var j = 0; j < previousDummyData[i].options.length; j++) {
          let option = Object.assign({}, previousDummyData[i].options[j]);

          if (updatedCategory.id === previousDummyData[i].id && option.optionId === updatedOption.optionId) {
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
          cardData: updatedDummyData
        }
      );
    default:
      return state;
  }
}

const activeRoundReducer = (state = { activeRoundData: [], activeRoundDataLoading: true }, action) => {
  switch(action.type) {
    case Actions.ACTIVE_ROUND_DATA_AVAILABLE:
      return Object.assign(
        {},
        state,
        {
          activeRoundData: action.data,
          activeRoundDataLoading: false
        }
      );
    default:
      return state;
    }
}

const bingoValidationReducer  = (state = { isValidBingo: false, validationMessage: '' }, action) => {
  switch(action.type) {
    case Actions.BINGO_DATA_VALIDATED:
      return Object.assign(
        {},
        state,
        {
          isValidBingo: action.isValidBingo,
          validationMessage: action.isValidBingo ? 'BINGO' : 'Sorry, not a bingo'
        }
      );
    default:
      return state;
    }
}

// combine all reducers
const rootReducer = combineReducers({
  dataReducer,
  activeRoundReducer,
  bingoValidationReducer
});

export default rootReducer;
