import dummyData from '../dummy-data.json';

export const DUMMY_DATA_AVAILABLE = "DUMMY_DATA_AVAILABLE";
export const CARD_DATA_UPDATED = "CARD_DATA_UPDATED";

export function getDummyData() {
  return (dispatch) => {
    // Make API call here
    setTimeout(() => {
      const data = dummyData.categories;
      dispatch({
        type: DUMMY_DATA_AVAILABLE,
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
