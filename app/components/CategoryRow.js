import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

import Tile from './Tile';
import CategoryRowStyle from '../styles/CategoryRowStyle';

class CategoryRow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let data = this.props.data || {};
    let options = data.options || [];
    let optionTiles = [];
    for (var i = 0; i < options.length; i++) {
      optionTiles.push(
        <Tile
          key={ options[i].id }
          data={ options[i] }
        />
      );
      options[i]
    }
    return(
      <View style={ CategoryRowStyle.rowContainer }>
        <Tile
          key={ data.id }
          data={ data }
          isHeader={ true }
        />
        { optionTiles }
      </View>
    );
  }
}

export default CategoryRow;
