import React, { Component } from 'react';
import {
  StatusBar,
  View,
  Text,
  ActivityIndicator
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions/';

import CategoryRow from './CategoryRow';
import BingoButton from './BingoButton';
import BingoCardStyle from '../styles/BingoCardStyle';

class BingoCard extends Component {
  static navigationOptions = {
    title: 'Bingo Card'
  };

  constructor(props) {
    super(props);
    this.onValidateBingoPress = this.onValidateBingoPress.bind(this);
  }

  componentWillMount() {
    this.props.getCardData();
  }

  render() {
    if (this.props.cardDataLoading) {
      return(
        <View style={ BingoCardStyle.activityIndicatorContainer }>
        <StatusBar
           barStyle="light-content"
         />
          <ActivityIndicator animating={true} />
        </View>
      );
    } else {
      let cardData = this.props.cardData || [];
      let categoryRows = [];
      for (let i = 0; i < cardData.length; i++) {
        categoryRows.push(
          <CategoryRow
            data={ cardData[i] }
            key={ i }
          />
        );
      }

      return (
        <View style={ BingoCardStyle.cardContainer }>
          <StatusBar
             barStyle="light-content"
           />
          <View style={ BingoCardStyle.rowsContainer }>
            { categoryRows }
          </View>
          <View style= { BingoCardStyle.validateBingoContainer }>
            <BingoButton
              onPress = { this.onValidateBingoPress }
              isEnabled={ this.isBingo() }
            />
            <View>
              <Text>{ this.props.validationMessage }</Text>
            </View>
          </View>
        </View>
      );
    }
  }

  isSelected(item) {
    return item.isSelected;
  }

  onValidateBingoPress() {
    let activeRoundData = this.props.activeRoundData[0];
    this.props.validateBingo({
      "round": activeRoundData.id,
      "categories": this.props.cardData
    });
  }

  isBingo() {
    let data = this.props.cardData;
    let i, j, trueCount;
    let isRowBingo = isColumnBingo = isDiagonalBingo = isOtherDiagonalBingo = false;
    let cardRows = Actions.CARD_ROWS;
    let cardColumns = Actions.CARD_COLUMNS;

    // check for column bingo
    for (i = 0; i < cardColumns; i++) {
      trueCount = 0;
      for (j = 0; j < cardRows; j++) {
        if (data[i].options[j].isSelected) {
          trueCount++;
        }
      }

      if (trueCount === cardRows) {
        isColumnBingo = true;
        break;
      }
    }

    // check for row bingo
    for (i = 0; i < cardRows; i++) {
      trueCount = 0;
      for (j = 0; j < cardColumns; j++) {
        if (data[j].options[i].isSelected) {
          trueCount++;
        }
      }
      if (trueCount === cardColumns) {
        isRowBingo = true;
        break;
      }
    }

    // check for diagonal bingo
    i = 0;
    trueCount = 0;
    while (i < cardRows) {
      if (data[i].options[i].isSelected) {
        trueCount++;
      }
      i++;
    }
    if (trueCount === cardRows) {
      isDiagonalBingo = true;
    }

    // check for other diagonal bingo
    i = 0;
    j = cardRows - 1;
    trueCount = 0;
    while (i < cardColumns && j >= 0) {
      if (data[i].options[j].isSelected) {
        trueCount++;
      }
      i++;
      j--;
    }
    if (trueCount === cardRows) {
      isOtherDiagonalBingo = true;
    }

    return isRowBingo || isColumnBingo || isDiagonalBingo || isOtherDiagonalBingo;
  }
}

// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
function mapStateToProps(state, props) {
  return {
    activeRoundData: state.activeRoundReducer.activeRoundData,
    activeRoundDataLoading: state.activeRoundReducer.activeRoundDataLoading,
    cardDataLoading: state.dataReducer.cardDataLoading,
    cardData: state.dataReducer.cardData,
    validationMessage: state.bingoValidationReducer.validationMessage,
    isValidBingo: state.bingoValidationReducer.isValidBingo
  }
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/home.js)
function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BingoCard);
