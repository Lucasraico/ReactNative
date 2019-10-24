import React from 'react';
import { View, Button, Image } from 'react-native';


class HomeScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image
          style={{width: 150, height: 150}}
          source={require('../img/femme.jpg')}
        />
           <Button
            title="Shop"
            onPress={() => this.props.navigation.navigate('Shop')}
          />
         
          <Button
            title="A propose de"
            onPress={() => this.props.navigation.navigate('Apropos')}
          />
          <Button
            title="Caractéristique"
            onPress={() => this.props.navigation.navigate('Properties')}
          />
        </View>
      );
    
    }
}

export default HomeScreen; 