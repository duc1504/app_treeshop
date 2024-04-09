import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Header = (props) => {
  const { title, navigateTo, image } = props;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          navigation.goBack();
        }}>
        <Image source={require('../images/left-arrow.png')} />
      </Pressable>
      <Text style={styles.title}>{title}</Text>
      {image && <Pressable
        onPress={() => navigation.navigate(navigateTo)}>
        <Image source={image} />
      </Pressable>}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    color: 'black',
    flex: 1, textAlign: 'center'
  },
});
