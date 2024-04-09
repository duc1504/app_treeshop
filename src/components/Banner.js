import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
const Banner = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Image
        style={styles.backgroundImage}
        source={require('../images/backgroundhome.png')}
      />
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>
          Planta - tỏa sáng không gian nhà bạn
        </Text>
        <Pressable
         onPress={() => {
          navigation.navigate('Cart');
        }}
        >
        <Image 
          style={styles.cartImage}
          source={require('../images/imageCart.png')}
        />
        </Pressable>
        <View style={styles.rowContainer}>
          <Text style={styles.subtitleText}>
            Xem hàng mới về
          </Text>
          <Image source={require('../images/arrow-right.png')} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: 280,
  },
  textContainer: {
    position: 'absolute',
    marginHorizontal: 20,
    marginTop: 40,
  },
  titleText: {
    position: 'absolute',
    fontSize: 23,
    fontFamily: 'Poppins-Medium',
    width: 280,
    color: 'black',
  },
  cartImage: {
    left: 320,
    width: 50,
  },
  rowContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: 80,
    width: 280,
  },
  subtitleText: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    color: '#007537',
  },
});

export default Banner;
