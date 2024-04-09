import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  FlatList,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AxiosInstance from '../helpers/AxiosInstance';
import {useSelector, useDispatch} from 'react-redux';
import ItemCart from '../components/ItemCart';
import {setPaymentProductIds} from '../redux/Reducer';
import SweetAlert from 'react-native-sweet-alert';

const Cart = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]); // Danh sách các sản phẩm đã được chọn
  const useAppSelector = useSelector;
  const appState = useAppSelector(state => state.app);
  const userId = appState.user?._id;
  const [totalPrice, setTotalPrice] = useState(0);

  const handleCheckboxToggle = productId => {
    const updatedSelectedProducts = selectedProducts.includes(productId)
      ? selectedProducts.filter(id => id !== productId) // Loại bỏ sản phẩm đã chọn khỏi mảng nếu đã được chọn
      : [...selectedProducts, productId]; // Thêm sản phẩm vào mảng nếu chưa được chọn
    setSelectedProducts(updatedSelectedProducts);
    // gửi selectedProducts lên redux
  };
  useEffect(() => {
    updateCart();
    dispatch(setPaymentProductIds(selectedProducts));
  }, [selectedProducts]);
  // Callback function to update cart after deletion or quantity update
  const updateCart = async () => {
    try {
      const response = await AxiosInstance().get(`cart/${userId}`);
      setProducts(response.products);

      // setTotalPrice(response.totalPrice)
      let totalPrice = 0;
      response.products.forEach(product => {
        if (selectedProducts.includes(product.product_id._id)) {
          totalPrice += product.product_id.price * product.quantity;
        }
      });
      setTotalPrice(totalPrice.toFixed(2));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (userId) {
      updateCart();
    }
  }, [userId]);

  const handlePayment = () => {
    // kiểm tra nếu chưa chọn sản phẩm thì thông báo
    if (selectedProducts.length == 0) {
      SweetAlert.showAlertWithOptions({
        title: 'Error',
        subTitle: 'Vui lòng chọn sản phẩm',
        confirmButtonTitle: 'OK',
        confirmButtonColor: '#000',
        style: 'error',
        cancellable: true,
      });
      return;
    }
    navigation.navigate('Payment', {totalPrice});
  };

  const handleDeleteAll = async () => {
    Alert.alert(
      'Xác nhận xóa',
      'Bạn có chắc muốn xóa toàn bộ sản phẩm trong giỏ hàng?',
      [
        {
          text: 'Hủy',
          style: 'cancel',
        },
        {
          text: 'Xóa',
          onPress: async () => {
            try {
              const response = await AxiosInstance().delete(
                `cart/delete/${userId}`,
              );
              if (response.status == true) {
                updateCart();
              }
            } catch (error) {
              console.log(error);
            }
          },
        },
      ],
      {cancelable: true},
    );
  };

  return (
    <View style={{flex: 1}}>
      <View style={styles.containerHeader}>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}>
          <Image source={require('../images/left-arrow.png')} />
        </Pressable>
        <Text style={styles.titleheader}>Giỏ hàng</Text>
        <Pressable onPress={handleDeleteAll}>
          <Image source={require('../images/delete.png')} />
        </Pressable>
      </View>
      {products.length == 0 ? (
        <Text style={styles.cartEmpty}>Không có sản phẩm trong giỏ hàng</Text>
      ) : (
        <FlatList
          data={products}
          keyExtractor={item => item._id}
          renderItem={({item}) => (
            <ItemCart
              item={item}
              updateCart={updateCart}
              handleCheckboxToggle={handleCheckboxToggle}
              selectedProducts={selectedProducts} // Truyền danh sách các sản phẩm đã được chọn xuống ItemCart.js
            />
          )}
        />
      )}

      <View style={styles.totalContainer}>
        <View style={styles.total}>
          <Text style={styles.totalLabel}>Tổng tiền:</Text>
          <Text style={styles.totalAmount}>{totalPrice} $</Text>
        </View>
        <Pressable style={styles.paymentButton} onPress={handlePayment}>
          <Text style={styles.paymentButtonText}>Tiến hành thanh toán</Text>
          <Image source={require('../images/right-chevron.png')} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerHeader: {
    backgroundColor: 'white',
    height: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  titleheader: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    color: 'black',
    flex: 1,
    textAlign: 'center',
  },
  totalContainer: {
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  totalLabel: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
  },
  totalAmount: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    color: 'black',
  },
  paymentButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#007537',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 30,
  },
  paymentButtonText: {
    color: 'white',
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
  },
  total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  cartEmpty: {
    flex: 1,
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
    marginTop: 100,
  },
});

export default Cart;
