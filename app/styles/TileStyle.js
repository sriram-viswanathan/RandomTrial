import {
  StyleSheet,
  Dimensions
} from 'react-native';
import * as CommonStyle from './index';

export default StyleSheet.create({
  tileContainer: {
    width: Dimensions.get('window').width / 5,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: CommonStyle.LIGHT,

    borderTopWidth: 0.5,
    borderRightWidth:0.5,
    borderBottomWidth:0.5,
    borderLeftWidth:0.5,
    borderColor: CommonStyle.GRAY_500
  },

  tileContent: {
    fontSize: 11,
    fontWeight: '400',
    color: CommonStyle.GRAY_800
  }
})
