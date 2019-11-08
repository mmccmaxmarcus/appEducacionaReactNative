import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import Module from './screens/Modulo';
import ContentModule from './components/ContentModule';
import Config from './screens/Config';
import Concept from './screens/Concept';
import Icon from 'react-native-vector-icons/EvilIcons';
import React, { Component } from 'react';

const MainStack = createStackNavigator(
  {
    ModuleStack: { screen: Module },
    ConceptStack: { screen: Concept },
  },
  {
    initialRouteName: 'ModuleStack',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#01579B',
        marginBottom: 4,
        elevation: 25
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
      }, 
    },
  },
);

const rootNavigator = createDrawerNavigator({
  Home: {
    screen: MainStack,
    navigationOptions: {
      drawerLabel: 'Módulos',
      drawerIcon: ({tintColor}) => {
        <Icon name='archive' size={25} color={tintColor}/>
      }
    },
  },
  Config: {
    screen: Config,
    navigationOptions: {
      drawerLabel: 'Configurações',
      drawerIcon: ({ tintColor }) => (
        <Icon name='gear' size={25} color={tintColor} />
      ),
      
    },
  },
});

const AppContainer = createAppContainer(rootNavigator);
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
