import { View, Text } from 'react-native'
import React from 'react'

const TitleText = (props) => {
    const {title,style} = props
  return (
    <View>
    <Text style={style}>{title}</Text>
    </View>
  )
}

export default TitleText