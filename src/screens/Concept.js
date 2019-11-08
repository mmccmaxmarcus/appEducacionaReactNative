import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Gravatar } from 'react-native-gravatar';

export default class Concept extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title'),
    };
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
  };

  renderItem = ({ item }) => {
    /*
        const recebeNavigateConteudo = id => {
            this.props.navigation.state.params.assuntos.forEach(value => {
                if (value.id == id) {
                    value.descricaoAssuntos.forEach(value2 => {
                        this.props.navigation.navigate("DescricaoAssunto",
                            { descAssunto: value2.descAssunto })
                        //  Alert.alert('Teste', `${value2.descAssunto}`)
                    })
                }
            })

           

        }
        */

    return (
      <View style={styles.container}>
        <View style={styles.avatarView}>
          <Gravatar options={{ secure: true }} style={styles.avatar} />
        </View>
        <View style={styles.descItem}>
          <TouchableOpacity onPress={() => {}}>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{item.conceptContent}</Text>
          </TouchableOpacity>

          <View style={styles.icons}>
            <Icon
              style={styles.iconBordaEsquerda}
              name="pencil-square-o"
              size={35}
              color="black"
            />
            <Icon
              style={styles.iconBordaMeio}
              name="user"
              size={35}
              color="black"
            />
            <Icon
              style={styles.iconBordaDireita}
              name="ellipsis-h"
              size={35}
              color="black"
            />
          </View>
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.navigation.getParam('concepts')}
          keyExtractor={item => `${item.id}`}
          renderItem={this.renderItem}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
    flexDirection: 'row',

  },
  avatarView:{
      marginRight: 10,
      marginLeft: 5,
      alignItems: 'center',
      justifyContent: 'center'

  },
  avatar:{
      borderRadius: 30  
  },
  descItem: {
    flexDirection: 'column',
    width: '78%'
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 15,
    borderWidth: 1,
    borderRadius: 30,
    padding: 8

  },
});
