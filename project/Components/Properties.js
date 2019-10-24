import React from 'react';
import { View, Button, Text } from 'react-native';


class Properties extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                title="Retour"
                onPress={() => this.props.navigation.goBack()}
            />
            <Text>Test </Text>
        </View>
      );
    
    }
}

export default Properties; 