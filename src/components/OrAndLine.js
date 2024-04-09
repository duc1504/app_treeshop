import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HorizontalLineWithText = () => {
  return (
    <View style={styles.container}>
      <View style={styles.horizontalLine} />
      <Text style={styles.text}>Hoặc</Text>
      <View style={styles.horizontalLine} />
    </View>
  );
};


export default HorizontalLineWithText;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:20,
    marginHorizontal:26
  },
  horizontalLine: {
    flex: 1,
    height: 1.3,
    backgroundColor: '#32733e',
    marginHorizontal: 5,
  },
  text: {
    fontSize: 18,
    color: 'black', 
  },
});