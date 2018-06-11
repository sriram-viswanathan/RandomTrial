import allData from '../dummy-data.json';

// export const API_URL_BASE = "http://pyretire.corp.gq1.yahoo.com:4080/bingo";
export const API_URL_BASE = "http://equippedtipped.corp.gq1.yahoo.com:4080/bingo";

export const CARD_ROWS = 5;
export const CARD_COLUMNS = 5;
export const ALL_DATA_AVAILABLE = "ALL_DATA_AVAILABLE";
export const ACTIVE_ROUND_DATA_AVAILABLE = "ACTIVE_ROUND_DATA_AVAILABLE";
export const GENERATE_CARD_DATA = "GENERATE_CARD_DATA";
export const CARD_DATA_UPDATED = "CARD_DATA_UPDATED";
export const BINGO_DATA_VALIDATED = "BINGO_DATA_VALIDATED";

export function getAllData() {
  return (dispatch) => {
    let url = API_URL_BASE + "/categories";
    fetch(url)
      .then( (response) => response.json() )
      .then((responseJson) => {
        const data = responseJson.categories;
        dispatch({
          type: ALL_DATA_AVAILABLE,
          data: data
        });
      }).catch((error) => {
        console.error(error);
      });
  }
}

export function getActiveRound() {
  return (dispatch) => {
    let url = API_URL_BASE + "/rounds";
    fetch(url)
      .then( (response) => response.json() )
      .then((responseJson) => {
        const data = responseJson.rounds.filter((round) => {
          return round.isActive;
        });
        dispatch({
          type: ACTIVE_ROUND_DATA_AVAILABLE,
          data: data
        });
      }).catch((error) => {
        console.error(error);
      });
  }
}

export function getCardData() {
  return (dispatch) => {
    dispatch({
      type: GENERATE_CARD_DATA
    });
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

export function validateBingo(validateBingoData) {
  return (dispatch) => {
    let url = API_URL_BASE + "/validate";
    let fetchOptions = {
      "body": JSON.stringify(validateBingoData),
      "cache": "noCache",
      "headers": {
        "content-type": "application/json",
      },
      "method": "POST"
    }

    fetch(url, fetchOptions)
      .then( (response) => response.json() )
      .then( (responseJson) => {
        dispatch({
          type: BINGO_DATA_VALIDATED,
          isValidBingo: responseJson.validate.status === "SUCCESS" ? true : false
        });
      });
  }
}
