import * as React from 'react';
import { Button, View, Text, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AproposDe from './Components/AproposDe';
import HomeScreen from './Components/HomeScreen';
import DetailsScreen from './Components/DetailScreen';
import ShopScreen from './Components/ShopScreen';
import Properties from './Components/Properties';

export  class App extends React.Component {
  render() {
      return (
          <View>
             <HomeScreen/>
             <Details/>
          </View>
      );
  }
};


const RootStack = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen,
  Apropos: AproposDe,
  Shop: ShopScreen,
  Properties : Properties,
});

export default createAppContainer(RootStack);
