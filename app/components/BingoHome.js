import React, { Component } from 'react';
import {
  StatusBar,
  View,
  Text,
  Button,
  ActivityIndicator
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions/';

import BingoHomeStyle from '../styles/BingoHomeStyle';

class BingoHome extends Component {
  static navigationOptions = {
    title: 'Bingo'
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.props.getActiveRound();
  }

  render() {
    if (this.props.activeRoundDataLoading) {
      return(
        <View style={ BingoHomeStyle.activityIndicatorContainer }>
        <StatusBar
           barStyle="light-content"
         />
          <ActivityIndicator animating={true} />
        </View>
      );
    } else {
      let visibleElements = [];
      if (this.props.activeRoundData.length) {
        visibleElements.push(
          <Button
            title="Got to Bingo Card"
            key="goToCard"
            onPress={ () => this.props.navigation.navigate("BingoCard") }
          />
        );
      } else {
        visibleElements.push(
          <Text key="noRounds" >No round active</Text>
        )
      }
      return (
        <View style={ BingoHomeStyle.container }>
          <StatusBar
             barStyle="light-content"
           />
           { visibleElements }
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
    activeRoundData: state.activeRoundReducer.activeRoundData,
    activeRoundDataLoading: state.activeRoundReducer.activeRoundDataLoading
  }
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/home.js)
function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BingoHome);
