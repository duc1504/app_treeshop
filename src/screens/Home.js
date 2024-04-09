import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import Banner from '../components/Banner';
import RenderProduct from '../components/RenderProduct';
import stylesApp from '../stylesApp';
import data from '../datas/data';
import ItemTree from '../RenderItem/ItemTree';
import Header from '../components/Header';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../redux/MainApi';
import { useCallback } from 'react';
import AxiosInstance from '../helpers/AxiosInstance';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false); // Khởi tạo loading là false ban đầu
  const dispatch = useDispatch();
  const useAppSelector = useSelector;
  const appState = useAppSelector((state) => state.app);

  // Hàm gửi yêu cầu lấy sản phẩm từ API
  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true); // Bắt đầu loading khi gửi yêu cầu
      await dispatch(getProducts());
      setLoading(false); // Kết thúc loading khi nhận được kết quả
    } catch (error) {
      console.log(error);
      setLoading(false); // Kết thúc loading nếu có lỗi xảy ra
    }
  }, [dispatch]);

  // Gọi hàm fetchProducts khi component được mount và mỗi khi appState.products thay đổi
  useEffect(() => {
    fetchProducts();
  }, []);

  // Cập nhật danh sách sản phẩm khi appState.products thay đổi
  useEffect(() => {
    if (appState.products) {
      setProducts(appState.products);
    }
  }, [appState.products]);

  // Sử dụng useFocusEffect để gửi yêu cầu cập nhật dữ liệu khi quay lại trang Home
  useFocusEffect(
    useCallback(() => {
      fetchProducts();
    }, [fetchProducts])
  );

  return (
    <ScrollView>
      {/* <Header
        image={require('../images/search-interface-symbol.png')}
        title={'Trang chủ'}
        navigateTo={'Search'}
      /> */}
      <View style={stylesApp.bgwhite}>
        <Banner />
       
          <ItemTree data={products} loading={loading} />
        {/* )} */}
      </View>
    </ScrollView>
  );
};



export default Home;
