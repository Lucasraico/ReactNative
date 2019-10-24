import React from 'react';
import { View, Button } from 'react-native';

export default class DetailsScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          
          <Button
            title="Acceuil"
            onPress={() => this.props.navigation.navigate('Apropos')}
          />
          <Text></Text>
          <Button
            title="Retour"
            onPress={() => this.props.navigation.goBack()}
          />
        
        </View>
      );
    }
}