import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import AxiosInstance from '../helpers/AxiosInstance';
import { useNavigation } from '@react-navigation/native';

const Search = () => {
  const [key, setKey] = useState('');
  const [products, setProducts] = useState([])

  const search =  () => {
   setTimeout(async() => {
    try {
      // lấy dữ liệu từ API http://localhost:5000/product/search?name=tree
      const response = await AxiosInstance().get(`product/search?name=${key}`);
    if (response.status) {
      setProducts(response.products)
    }
      
    } catch (error) {
      console.log(error);
    }
   }, 2000);
  }
  
  useEffect(() => {
    search()
  }, [key])
  
  return (
    <SafeAreaView>
      <Header title={'Tìm kiếm'} navigateTo={'Search'} />
      <View style={styles.container}>
        <TextInput
         style={styles.textInput} 
         placeholder="Tìm kiếm"
         onChangeText={text => setKey(text)}
         >
        
         </TextInput>
        <Image
          style={styles.image}
          source={require('../images/search-interface-symbol.png')}
        />
      </View>
      {/* Sản phẩm  */}
      <FlatList
      data={products}
      keyExtractor={item => item._id.toString()}
      renderItem={({item}) => <RenderProduct item={item} />}
      />
    </SafeAreaView>
  );
};

const RenderProduct = ({ item }) => {
  const navigation = useNavigation();
  return (
   <Pressable
   onPress={() => {
    navigation.navigate('DetailProduct', { id: item._id});
  }}>
     <View style={styles.ViewProduct}>
        <Image
          style={styles.imageProduct}
          source={{uri: item.gallery[0]}}
        />
        <View style={{alignSelf: 'center'}}>
          <Text style={styles.textName}>{item.name}</Text>
          <Text style={styles.textName}>{item.price}</Text>
          <Text style={styles.textSoLuong}>Còn {item.quantity} sp</Text>
        </View>
      </View>
   </Pressable>
  )
}

export default Search;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 36,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {position: 'absolute', right: 10, top: 18},
  textInput: {borderBottomWidth: 2, width: '100%'},
  textName: {
    color: 'black',
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
  },
  textSoLuong: {
    fontFamily: 'Poppins-Medium',
    color: 'black',
  },
  ViewProduct: {
    flexDirection: 'row',
    marginHorizontal: 36,
    marginTop: 30,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  imageProduct: {width: 80, height: 80},
});
