import dummyData from '../dummy-data.json';

export const DUMMY_DATA_AVAILABLE = "DUMMY_DATA_AVAILABLE";

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
