import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View, Pressable, Image, Text, ActivityIndicator } from 'react-native';
import ItemStatus from '../RenderItem/ItemStatus';

import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';

const ShowAll = ({ data }) => {
  const useAppSelector = useSelector;
  const dispatch = useDispatch();
  const appState = useAppSelector((state) => state.app);
  const [products, setProducts] = useState(appState.products);
  const loading = useAppSelector((state) => state.app.loading);

  useEffect(() => {
    setProducts(appState.products);
  }, [appState.products]);

  return (
    <View>
      <ItemStatus categories={data} />
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" style={styles.loadingIndicator} />
      ) : (
        <Show data={products} />
      )}
    </View>
  );
};

const Show = ({ data }) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View style={styles.container}>
        {data.map((item) => (
          <Pressable
            style={styles.itemContainer}
            key={item._id.toString()}
            onPress={() => {
              navigation.navigate('DetailProduct', { id: item._id });
            }}>
            <View>
              <Image
                style={styles.image}
                source={{ uri: item.gallery[0] }}
              />
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>
          </Pressable>
        ))}
      </View>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  itemContainer: {
    width: '48%',
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
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
  },
  price: {
    width: '100%',
    justifyContent: 'flex-start',
    marginTop: 6,
    fontSize: 18,
    color: 'green',
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ShowAll;
