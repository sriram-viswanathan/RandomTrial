import { StyleSheet } from 'react-native';
import * as CommonStyle from './index';

export default StyleSheet.create({
  container: {
    backgroundColor: CommonStyle.LIGHT,
    flex: 1
  },

  activityIndicatorContainer: {
    backgroundColor: CommonStyle.GRAY_200,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  }
})
