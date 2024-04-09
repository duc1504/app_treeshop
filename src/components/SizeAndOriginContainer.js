import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SizeAndOriginContainer = (props) => {
    const {size,origin}= props;
  return (
    <View style={styles.sizeAndOriginContainer}>
        <View style={styles.sizeAndOriginRow}>
          <Text>{size}</Text>
          <Text>{origin}</Text>
        </View>
        <View style={styles.horizontalLine} />
      </View>
  )
}

export default SizeAndOriginContainer

const styles = StyleSheet.create({
    sizeAndOriginContainer: {
        marginHorizontal: 40,
        marginTop: 20,
      },
      sizeAndOriginRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      textSoluong:{
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 8,
        color: 'green',
      },
      horizontalLine: {
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
     
})