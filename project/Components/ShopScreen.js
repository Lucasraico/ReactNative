import React from 'react';
import { View, Button, Text, Image, TouchableOpacity } from 'react-native';


class ShopScreen extends React.Component {
    constructor() {
        super();
        this.state = {
          Mylife: 50,
          MyMoney: 100,  
          PotionPrice: 20, 
          HealPower: 10, 
        }
      }
      

      PromptMyMoney = () => {
        var Money = this.state.MyMoney
        this.setState({
          MyMoney: Money
        })
      }
        BuyPotion = () => {
           if (this.state.MyMoney >= this.state.PotionPrice){
              var MoneyNow = this.state.MyMoney - this.state.PotionPrice
                this.setState({
                    MyMoney: MoneyNow
                })
                this.Heal();
            }
        }

        Heal = () => {
            var life = this.state.Mylife + this.state.HealPower
            this.setState({
                Mylife: life
            })
        }

    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ marginBottom: 10, fontSize: 20 }}>{this.state.Mylife} point de vie</Text>
        <TouchableOpacity activeOpacity = { .5 } onPress={ this.BuyPotion }>
        <Image
          style={{width: 200, height: 200}}
          source={require('../img/potion.jpg')}
        />
        </TouchableOpacity>
      <Text style={{ marginBottom: 10, fontSize: 20 }}>{this.state.MyMoney} pièce d'or</Text>
      <Button
            title="Retour"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
      );
    
    }
}
   
export default ShopScreen; 