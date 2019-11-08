import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class ContentModule extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.modules}>
          <TouchableOpacity
            onPress={() => this.props.moduleToConcept(this.props.id)}>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
              {this.props.moduleContent}
            </Text>
            <Text style={{ fontSize: 18 }}>{this.props.subModuleContent}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.icons}>
          <Icon
            style={styles.iconBorderLeft}
            name="pencil-square-o"
            size={35}
            color={'black'}
          />
          <Icon
            style={styles.iconBorderRight}
            name="list"
            size={35}
            color="black"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    borderWidth: 0,
    borderRadius: 20,
    borderStyle: undefined,
    marginBottom: 15,
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: 'white',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
  },
  modules: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginStart: 10,
  },
  icons: {
    marginVertical: 12,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'stretch',
    marginHorizontal: 15,
  },
  iconBorderLeft: {
    borderRightWidth: 1,
    paddingRight: 7,
  },
  iconBorderRight: {
    paddingLeft: 10,
  },
});
export default ContentModule;
