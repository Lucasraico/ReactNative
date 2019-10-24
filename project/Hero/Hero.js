import React from 'react';
import { View, Button } from 'react-native';


export default class Hero extends Component {
    constructor() {
      super();
  
      this.state = {
        // This is our Default number value
        NumberHolder: 1,
        TextHolder: "",
        MyNumber: 1,
        Count: 0,
  
      }
    }
}