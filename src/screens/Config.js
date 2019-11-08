import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Config extends Component {
  static navigationOptions = {
    drawerLabel: 'Configuração',
  };

  render() {
    return <Text> Config </Text>;
  }
}

export default Config;
