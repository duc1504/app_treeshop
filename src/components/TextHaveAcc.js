import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import stylesApp from '../stylesApp'


const TextHaveAcc = (props) => {
    const { mainText, actionText, onClickText} = props;

  return (
    <View style={stylesApp.RowCenter}>
    <Text style={stylesApp.Textsize14}>{mainText}<Text onPress={onClickText} style={stylesApp.FogetpassText} >{actionText}</Text></Text>
   </View>
  )
}

export default TextHaveAcc
