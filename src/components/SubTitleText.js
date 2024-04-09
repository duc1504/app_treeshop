import { View, Text } from 'react-native'
import React from 'react'

const TitleText = (props) => {
    const {subtitle,style} = props
  return (
    <View>
    <Text style={style}>{subtitle}</Text>
    </View>
  )
}

export default TitleText