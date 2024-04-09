import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LablePayment = ({lable}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{lable}</Text>
      <View style={styles.horizontalLine}/>
    </View>
  )
}

export default LablePayment

const styles = StyleSheet.create({
    container: {
       
        marginTop:26,
        
      },
    horizontalLine: {
       
        height: 1.3,
        backgroundColor: 'black',
        marginHorizontal: 5,
      },
      text: {
        fontSize: 22,
        color: 'black', 
        fontWeight: '400',
      },
})