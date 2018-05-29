import allData from '../dummy-data.json';

export const ALL_DATA_AVAILABLE = "ALL_DATA_AVAILABLE";
export const CARD_DATA_UPDATED = "CARD_DATA_UPDATED";
export const BINGO_DATA_VALIDATED = "BINGO_DATA_VALIDATED";

export function getAllData() {
  return (dispatch) => {
    // Make API call here
    setTimeout(() => {
      const data = allData.categories;
      dispatch({
        type: ALL_DATA_AVAILABLE,
        data: data
      });
    }, 100);
  }
}

export function updateCard(category, option) {
  return (dispatch) => {
    dispatch({
      type: CARD_DATA_UPDATED,
      category: category,
      option: option
    })
  }
}

export function validateBingo(selectedOptions) {
  console.log(selectedOptions);
  return (dispatch) => {
    // Make API call here to validate the combination
    setTimeout(() => {
      dispatch({
        type: BINGO_DATA_VALIDATED,
        isValidBingo: true
      });
    }, 1000);
  }
}
