import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default props => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}> {props.title} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
    justifyContent: 'flex-start',
    backgroundColor: '#69F0AE',
    padding: 5,
    width: '50%',
    borderBottomRightRadius: 30,

    elevation: 35
  },
});
