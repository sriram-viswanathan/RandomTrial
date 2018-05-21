import React, { Component } from 'react';
import {
  StatusBar,
  View,
  Text,
  Button
} from 'react-native';

import BingoHomeStyle from '../styles/BingoHomeStyle';

class BingoHome extends Component {
  static navigationOptions = {
    title: 'Bingo'
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={ BingoHomeStyle.container }>
        <StatusBar
           barStyle="light-content"
         />
        <Button
          title="Got to Bingo Card"
          onPress={ () => this.props.navigation.navigate("BingoCard") }
        />
      </View>
    );
  }
}

export default BingoHome;
