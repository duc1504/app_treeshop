import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import stylesApp from '../stylesApp';
import ItemTree from '../RenderItem/ItemTree';
import { useNavigation } from '@react-navigation/native';

const RenderProduct = ({ data }) => {
  const navigation = useNavigation();
  const handleShowAll = (item) => {
    navigation.navigate('AllProduct', { items: item });
  }
  return (
    <View style={{ marginHorizontal: 20 }}>
      {data.map((item) => (
        <View key={item._id}>
          <Text style={stylesApp.fontSize26}>Sản phẩm</Text>
          <ItemTree data={item} />
          <Text onPress={() => handleShowAll(item)} style={stylesApp.textDecorationLine}>Xem thêm {item.Category}</Text>
        </View>
      ))}
    </View>
  );
};

export default RenderProduct;


