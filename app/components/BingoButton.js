import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import BingoButtonStyle from '../styles/BingoButtonStyle';

class BingoButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let title = this.props.title || 'Validate Bingo';
    let isEnabled = this.props.isEnabled || false;
    if (isEnabled) {
      return (
        <TouchableOpacity
          style={ [ BingoButtonStyle.buttonContainer] }
          onPress={ this.props.onPress.bind(null) }>
          <Text style={ BingoButtonStyle.buttonText }>
            { title }
          </Text>
        </TouchableOpacity>
      );
    } else {
      return(
        <View
          style={ [ BingoButtonStyle.buttonContainer, BingoButtonStyle.buttonContainerDisabled] }>
          <Text style={ BingoButtonStyle.buttonText }>
            { title }
          </Text>
        </View>

      );
    }
  }
}

export default BingoButton;
