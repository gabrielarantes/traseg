import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Splash from '../screens/Splash';
import Home from '../screens/Home';

const MainStack = createStackNavigator(
  {
    Splash,
    Home,
  },
  {
    headerMode: 'none',
  },
);

const Routes = createAppContainer(createSwitchNavigator({MainStack}));

export default Routes;
