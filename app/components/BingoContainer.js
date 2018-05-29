import { createStackNavigator } from 'react-navigation';
import NavigationScreens from "../config/NavigationScreens";
import * as CommonStyle from '../styles/';

export default createStackNavigator(NavigationScreens,
  {
    initialRouteName: 'BingoHome',
    navigationOptions: {
      headerStyle: {
        backgroundColor: CommonStyle.DARK
      },
      headerTintColor: CommonStyle.LIGHT,
      headerTitleStyle: {
        fontWeight: '400'
      }
    }
  }
);
