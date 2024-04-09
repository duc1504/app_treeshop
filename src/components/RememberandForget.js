import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RememberandForget = (props) => {
    const {tick,text,style}= props
  return (
    <View style={styles.container}>
       {tick &&  <Image
        source={tick}
        />}
      <Text style={style}>{text}</Text>
    </View>
  )
}

export default RememberandForget

const styles = StyleSheet.create({
    container:{
        flexDirection:'row'
    }
})