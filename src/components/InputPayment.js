import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const InputPayment = (props) => {
    const {value,onChangeText,placeholder} = props;
  return (
    <View>
      <TextInput
      placeholder={placeholder}
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      />
      
    </View>
  )
}

export default InputPayment

const styles = StyleSheet.create({
    input: {height: 40, borderColor: 'gray',borderBottomWidth: 1,
    marginTop: 12,}
})