import { View, Text, Image } from 'react-native'
import React from 'react'
import stylesApp from '../stylesApp'


const LoginOther = () => {
  return (
    <View style={stylesApp.RowCenter}>
    <Image
    style={stylesApp.marginRight24}
    source={require('../images/imageGoogle.png')}
    />
     <Image
    source={require('../images/imageFacebook.png')}
    />
  </View>
  )
}

export default LoginOther