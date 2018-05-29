import { StyleSheet } from 'react-native';
import * as CommonStyle from './index';

export default StyleSheet.create({
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    padding: 5,
    backgroundColor: CommonStyle.PURPLE,

    margin: 5,
    maxHeight: 35
  },

  buttonContainerDisabled: {
      backgroundColor: CommonStyle.GRAY_400
  },

  buttonText: {
    fontSize: 16,
    fontWeight: '400',
    color: CommonStyle.LIGHT
  }
})
