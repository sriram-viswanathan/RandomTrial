import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import TileStyle from '../styles/TileStyle';

class Tile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onTilePress = this.onTilePress.bind(this);
  }

  render() {
    let data = this.props.data || {};
    let isHeaderTile = this.props.isHeader || false;
    if (isHeaderTile) {
      return(
        <View style={ TileStyle.tileContainer }>
          <Text style={ TileStyle.tileContent }>
            { data.value }
          </Text>
        </View>
      );
    } else {
      return (
        <TouchableOpacity
          style={ TileStyle.tileContainer }
          onPress={ this.onTilePress.bind(null, data) }>
          <Text style={ TileStyle.tileContent }>
            { data.value }
          </Text>
        </TouchableOpacity>
      );
    }
  }

  onTilePress(data) {
    console.log(data);
  }
}

export default Tile;
