import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import stylesApp from '../stylesApp';


const WrapInput = (props) => {
  const {style,placeholder,onChange,oneye,offeye,errorText,value,isPassword} = props;
    const [showPassword, setShowPassword] = useState(isPassword||false);
    const toggleEye = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
      };
    
  return (
    <View style={stylesApp.width100percent}>
      <TextInput
      style={style.Input}
      placeholder={placeholder}
      onChangeText={onChange}
      secureTextEntry={showPassword}
      value={value}
      />
      {oneye && offeye && (
        <TouchableOpacity 
        onPress={toggleEye} 
        style={stylesApp.eyeIconContainer}>
          <Image
            source={showPassword ? oneye:offeye}
          />  
        </TouchableOpacity>
         )}
         {errorText && <Text style={stylesApp.errorText}>{errorText}</Text>}
    </View>
  )
}
export default WrapInput
