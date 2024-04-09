import React from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import stylesApp from '../stylesApp';

const ItemTree = ({ data, loading }) => {
  // use navigation
  // Chỉ lấy 4 phần tử đầu tiên từ mảng data
  const limitedData = data.slice(0, 6);
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      {loading ? ( // Kiểm tra loading, nếu đang loading thì hiển thị ActivityIndicator
          <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View style={styles.container}>
          {limitedData.map((item) => (
            <Pressable
              style={styles.itemContainer}
              key={item._id.toString()}
              onPress={() => {
                navigation.navigate('DetailProduct', { id: item._id });
              }}>
              <View>
                <Image
                  resizeMode='contain'
                  style={styles.image}
                  source={{
                    uri: item.gallery[0],
                  }}
                />
                <Text style={styles.name}>{item.name}</Text>
                {item.status && (
                  <Text style={styles.status}>{item.quantity}</Text>
                )}
                <Text style={styles.price}>{item.price}</Text>
              </View>
            </Pressable>
          ))}
        </View>
      )}
      <Text
        onPress={() => navigation.navigate('AllProduct')}
        style={stylesApp.textDecorationLine}>
        Xem thêm sản phẩm
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginHorizontal: 8,
  },
  itemContainer: {
    width: '48%', // Điều chỉnh chiều rộng của mỗi mục, có thể thay đổi tùy ý
    borderRadius: 10,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 150,
    borderColor: 'gray',
    borderWidth: 0.2,
    borderRadius: 10,
  },
  name: {
    width: '100%',
    justifyContent: 'flex-start',
    marginTop: 6,
    fontSize: 15,
    fontWeight: '700',
    color: 'black',
  },
  status: {
    width: '100%',
    justifyContent: 'flex-start',
    marginTop: 6,
    fontSize: 18,
    color: 'gray',
  },
  price: {
    width: '100%',
    justifyContent: 'flex-start',
    marginTop: 6,
    fontSize: 18,
    color: 'green',
  },
});

export default ItemTree;
