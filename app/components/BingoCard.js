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
import BingoCardStyle from '../styles/BingoCardStyle';

class BingoCard extends Component {
  static navigationOptions = {
    title: 'Bingo Card'
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.props.getDummyData();
  }

  render() {
    if (this.props.dummyDataLoading) {
      return(
        <View style={ BingoCardStyle.activityIndicatorContainer }>
        <StatusBar
           barStyle="light-content"
         />
          <ActivityIndicator animating={true} />
        </View>
      );
    } else {
      let dummyData = this.props.dummyData;
      let categoryRows = [];
      for (let i = 0; i < dummyData.length; i++) {
        categoryRows.push(
          <CategoryRow
            data={ dummyData[i] }
            key={ i }
          />
        );
      }
      return (
        <View style={ BingoCardStyle.cardContainer }>
          <StatusBar
             barStyle="light-content"
           />
          <View style={ BingoCardStyle.columnsContainer}>
            { categoryRows }
          </View>
        </View>
      );
    }
  }
}

// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
function mapStateToProps(state, props) {
  return {
    dummyDataLoading: state.dummyDataReducer.dummyDataLoading,
    dummyData: state.dummyDataReducer.dummyData
  }
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/home.js)
function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BingoCard);
