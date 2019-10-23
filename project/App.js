import * as React from 'react';
import { Button, View, Text, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//Page d'aceuil
class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Aceuil</Text>
        <Button
          title="Aller aux details"
          onPress={() => this.props.navigation.navigate('Details')}
        />

        <Image
          style={{width: 150, height: 150}}
          source={require('./img/femme.jpg')}
        />
      </View>
    );
  }
}

//Page de detail
class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Detail</Text>
        <Button
          title="Acceuil"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Retour"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const RootStack = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen,
});

export default createAppContainer(RootStack);
