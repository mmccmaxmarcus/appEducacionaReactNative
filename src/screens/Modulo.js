import React, { Component } from 'react';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Alert,
  SectionList,
} from 'react-native';
import ContentModule from '../components/ContentModule';
import Icon from 'react-native-vector-icons/FontAwesome';
import { DrawerActions } from 'react-navigation';
import HeaderModule from '../components/HeaderModule';

export default class Modulo extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Gerenciamento de módulos',
      headerLeft: () => (
        <View style={{ marginLeft: 10 }}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Icon name="navicon" size={30} color={'white'} />
          </TouchableOpacity>
        </View>
      ),
    };
  };

  state = {
    modulo: [
      {
        title: 'Itil V3',
        data: [
          {
            id: Math.random(),
            moduleContent: 'Estratégia de Serviço',
            subModuleContent: 'Module I',
            concepts: [
              {
                id: Math.random(),
                conceptContent: 'Gerenciamento Financeiro',
              },
              {
                id: Math.random(),
                conceptContent: 'Gerenciamento Demanda',
              },
              {
                id: Math.random(),
                conceptContent: 'Gerenciamento de Portfólio',
              },
            ],
          },
          {
            id: Math.random(),
            moduleContent: 'Portfólio de Serviço',
            subModuleContent: 'Module II',
          },
          {
            id: Math.random(),
            moduleContent: 'Transição de Serviço',
            subModuleContent: 'Module III',
          },
          {
            id: Math.random(),
            moduleContent: 'Operação de Serviço',
            subModuleContent: 'Module IV',
          },
        ],
      },
      {
        title: 'Cobit 5',
        data: [{
          id: Math.random(),
          moduleContent: 'Ciclo de vida do projeto',
          subModuleContent: 'Modulo I'
        }],
      },
    ],
  };

  renderHeader = () => {
    return (
      <View>
        <Text> Teste </Text>
      </View>
    );
  };


  render() {
    const moduleToConcept = id => {
      const modules = [...this.state.modulo];
      modules.forEach(module => {
        module.data.forEach(data => {
          if (data.id === id) {
            this.props.navigation.navigate('ConceptStack', {
              title: data.moduleContent,
              concepts: data.concepts,
            });
          }
        });
      });
    };

    return (
      <View style={styles.container}>
        <SectionList
          sections={this.state.modulo}
          keyExtractor={(item, index) => `${item.id}`}
          renderSectionHeader={({ section }) => (
            <HeaderModule title={section.title} />
          )}
          renderItem={({ item }) => (
            <ContentModule
              key={item.id}
              {...item}
              moduleToConcept={moduleToConcept}
            />
          )}
         
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'IOS' ? 10 : 0,
    backgroundColor: 'white'
  },
});
