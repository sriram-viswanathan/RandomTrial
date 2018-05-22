import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions/';

import TileStyle from '../styles/TileStyle';

class Tile extends Component {
  constructor(props) {
    super(props);
    this.state = this.props;
    this.onTilePress = this.onTilePress.bind(this);
  }

  render() {
    let category = this.props.category || {};
    let option = this.props.option || {};
    let isHeaderTile = this.props.isHeader || false;
    if (isHeaderTile) {
      return(
        <View style={ TileStyle.tileContainer }>
          <Text style={ TileStyle.tileContent }>
            { category.value }
          </Text>
        </View>
      );
    } else {
      let tileContainerStyles = [TileStyle.tileContainer];
      if (option.isSelected) {
        tileContainerStyles.push(TileStyle.tileContainerSelected);
      }
      return (
        <TouchableOpacity
          style={ tileContainerStyles }
          onPress={ this.onTilePress.bind(null, category, option) }>
          <Text style={ TileStyle.tileContent }>
            { option.value }
          </Text>
        </TouchableOpacity>
      );
    }
  }

  onTilePress(category, option) {
    this.props.updateCard(category, option)
  }
}

// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
function mapStateToProps(state, props) {
  return {}
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/home.js)
function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Tile);
