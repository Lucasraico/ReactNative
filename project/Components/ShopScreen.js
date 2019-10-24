import React from 'react';
import { View, Button, Text, Image, TouchableOpacity } from 'react-native';


class ShopScreen extends React.Component {
    constructor() {
        super();
        this.state = {
          MyMoney: 100,  
          potionPrice: 20,  
        }
      }
    
     // Store/Reducers/favoriteReducer.js
    
    
    
      PromptMyMoney = () => {
        var Money = this.state.MyMoney
        this.setState({
          MyMoney: Money
        })
      }
    spendMoney = () => {
        var MoneyNow = this.state.MyMoney - this.state.potionPrice
        this.setState({
            MyMoney: MoneyNow
        })
    }
    
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity activeOpacity = { .5 } onPress={ this.spendMoney }>
        <Image
          style={{width: 200, height: 200}}
          source={require('../img/potion.jpg')}
        />
        </TouchableOpacity>
      <Text style={{ marginBottom: 10, fontSize: 20 }}>{this.state.MyMoney}</Text>
      <Button
            title="Retour"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
      );
    
    }
}
   
export default ShopScreen; 