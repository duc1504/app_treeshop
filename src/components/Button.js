import { Pressable, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import stylesApp from '../stylesApp';

const Button = (props) => {
  const{textButton,onClick} = props;
  return (
    <View>
<LinearGradient colors={['#32733e', '#71b565']} style={stylesApp.linearGradient}>
    <Pressable
    onPress={onClick}
    >
      <Text style={stylesApp.buttonText}>{textButton}</Text>
    </Pressable>
</LinearGradient>
    </View>
  );
};

export default Button;


