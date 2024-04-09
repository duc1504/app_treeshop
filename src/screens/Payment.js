import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Pressable, Image} from 'react-native';
import Header from '../components/Header';
import LablePayment from '../components/LablePayment';
import InputPayment from '../components/InputPayment';
import SweetAlert from 'react-native-sweet-alert';
import {useDispatch, useSelector} from 'react-redux';
import {purchaseCart} from '../redux/MainApi';
import {useNavigation} from '@react-navigation/native';
import AxiosInstance from '../helpers/AxiosInstance';
const Payment = ({route}) => {
    const navigation = useNavigation();
  const dispatch = useDispatch();
  const useAppSelector = useSelector;
  const totalPrice = route.params.totalPrice;
  const stateApp = useAppSelector(state => state.app);
  const selectedProducts = stateApp.paymentProductIds;
  const user = stateApp.user;
  
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [address, setAddress] = useState(user.address);
  const [phone, setPhone] = useState(user.numberMobile);

  const [selectedShipping, setSelectedShipping] = useState(
    'Giao hàng nhanh - 2$',
  );
  const [selectedPayment, setSelectedPayment] = useState('Thẻ VISA/MASTERCARD');
  const [shippingCost, setShippingCost] = useState(0);


  const handleShippingMethod = shippingMethod => {
    setSelectedShipping(shippingMethod);
  };
  const handlePaymentMethod = paymentMethod => {
    setSelectedPayment(paymentMethod);
  };
  useEffect(() => {
    if (selectedShipping === 'Giao hàng nhanh - 2$') {
      setShippingCost(2);
    } else if (selectedShipping === 'Giao hàng COD - 3$') {
      setShippingCost(3);
    }
  }, [selectedShipping]);

  const handlePayment = async () => {
    if (name === '' || email === '' || address === '' || phone === '') {
      SweetAlert.showAlertWithOptions({
        title: 'Error',
        subTitle: 'Nhập đầy đủ thông tin',
        confirmButtonTitle: 'OK',
        confirmButtonColor: '#000',
        style: 'error',
      });
      return;
    }
    // const body = {
    //     userId: user._id,
    //   selectedProducts: selectedProducts,
    //   shippingFee: shippingCost,
    // };
    try {
    // dispatch(purchaseCart(body));
    // dispatch(purchaseCart(body));
    const response = await AxiosInstance().post(`cart/purchase/${user._id}`, {
      shippingFee: shippingCost,
      selectedProducts: selectedProducts,
    });

    try {
        SweetAlert.showAlertWithOptions({
            title: 'Thành công',
            subTitle: 'Bạn đã mua hàng thành công!',
            confirmButtonTitle: 'OK',
            confirmButtonColor: '#000',
            style: 'success', 
            cancellable: true 
        });
        navigation.navigate('Home');
    } catch (error) {
        console.log(error);
    }
    
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Header title={'THANH TOÁN'} />
      <View style={styles.content}>
        <LablePayment lable={'Thông tin khách hàng'} />
        <InputPayment
          placeholder={'Nhập họ tên'}
          value={name}
          onChangeText={value => setName(value)}
        />
        <InputPayment
          placeholder={'Nhập email'}
          value={email}
          onChangeText={value => setEmail(value)}
        />
        <InputPayment
          placeholder={'Nhập địa chỉ'}
          value={address}
          onChangeText={value => setAddress(value)}
        />
        <InputPayment
          placeholder={'Nhập số điện thoại'}
          value={phone}
          onChangeText={value => setPhone(value)}
        />
        <LablePayment lable={'Phươngg thức vận chuyển'} />
        {/* Phương thức vận chuyển */}
        <Pressable onPress={() => handleShippingMethod('Giao hàng nhanh - 2$')}>
          <View
            style={[
              styles.containerShip,
              selectedShipping === 'Giao hàng nhanh - 2$' &&
                styles.containerSelected,
            ]}>
            <View style={styles.textContainer}>
              <Text
                style={[
                  styles.paymentText,
                  selectedShipping === 'Giao hàng nhanh - 2$' &&
                    styles.paymentTextSelected,
                ]}>
                Giao hàng nhanh - 2$
              </Text>
              <Text style={styles.deliveryText}>Dự kiến giao hàng 4-8/9</Text>
            </View>
            {selectedShipping === 'Giao hàng nhanh - 2$' && (
              <Image source={require('../images/tick.png')} />
            )}
          </View>
          <View style={styles.horizontalLine} />
        </Pressable>
        <Pressable onPress={() => handleShippingMethod('Giao hàng COD - 3$')}>
          <View
            style={[
              styles.containerShip,
              selectedShipping === 'Giao hàng COD - 3$' &&
                styles.containerSelected,
            ]}>
            <View style={styles.textContainer}>
              <Text
                style={[
                  styles.paymentText,
                  selectedShipping === 'Giao hàng COD - 3$' &&
                    styles.paymentTextSelected,
                ]}>
                Giao hàng COD - 3$
              </Text>
              <Text style={styles.deliveryText}>Dự kiến giao hàng 3-5/9</Text>
            </View>
            {selectedShipping === 'Giao hàng COD - 3$' && (
              <Image source={require('../images/tick.png')} />
            )}
          </View>
          <View style={styles.horizontalLine} />
        </Pressable>
        <LablePayment lable={'Hình thức thanh toán'} />
        {/* Hình thức thanh toán */}
        <Pressable onPress={() => handlePaymentMethod('Thẻ VISA/MASTERCARD')}>
          <View
            style={[
              styles.containerShip,
              selectedPayment === 'Thẻ VISA/MASTERCARD' &&
                styles.containerSelected,
            ]}>
            <View style={styles.textContainer}>
              <Text
                style={[
                  styles.paymentText,
                  selectedPayment === 'Thẻ VISA/MASTERCARD' &&
                    styles.paymentTextSelected,
                ]}>
                Thẻ VISA/MASTERCARD
              </Text>
            </View>
            {selectedPayment === 'Thẻ VISA/MASTERCARD' && (
              <Image source={require('../images/tick.png')} />
            )}
          </View>
          <View style={styles.horizontalLine} />
        </Pressable>
        <Pressable
          onPress={() => handlePaymentMethod('Thanh toán khi nhận hàng')}>
          <View
            style={[
              styles.containerShip,
              selectedPayment === 'Thanh toán khi nhận hàng' &&
                styles.containerSelected,
            ]}>
            <View style={styles.textContainer}>
              <Text
                style={[
                  styles.paymentText,
                  selectedPayment === 'Thanh toán khi nhận hàng' &&
                    styles.paymentTextSelected,
                ]}>
                Thanh toán khi nhận hàng
              </Text>
            </View>
            {selectedPayment === 'Thanh toán khi nhận hàng' && (
              <Image source={require('../images/tick.png')} />
            )}
          </View>
          <View style={styles.horizontalLine} />
        </Pressable>
      </View>
      <View style={styles.totalContainer}>
        <View style={styles.totalRow}>
          <Text style={styles.totalText}>Tạm tính</Text>
          <Text style={styles.totalAmount}>{totalPrice} $</Text>
        </View>
        <View style={styles.totalRow}>
          <Text style={styles.totalText}>Phí vận chuyển</Text>
          <Text style={styles.totalAmount}>{shippingCost} $</Text>
        </View>
        <View style={styles.totalRow}>
          <Text style={styles.totalText}>Tổng tiền</Text>
          <Text style={styles.totalAmountHighlighted}>
            {parseFloat(totalPrice) + shippingCost} $
          </Text>
        </View>
        <Pressable style={styles.button} onPress={handlePayment}>
          <Text style={styles.buttonText}>Hoàn Tất</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    paddingHorizontal: 38,
  },
  totalContainer: {
    paddingHorizontal: 28,
    marginTop: 30,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  totalText: {
    fontSize: 14,
  },
  totalAmount: {
    fontSize: 15,
    color: 'black',
  },
  totalAmountHighlighted: {
    fontSize: 18,
    color: '#007537',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#007537',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
  },
  containerShip: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
    backgroundColor: 'white',
  },
  textContainer: {
    flex: 1,
  },
  paymentText: {
    fontWeight: '400',
    color: 'black',
    fontSize: 20,
  },
  paymentTextSelected: {
    fontWeight: '400',
    color: '#007537',
    fontSize: 20,
  },
  deliveryText: {
    fontWeight: '400',
    color: 'gray',
    fontSize: 16,
    marginTop: 3,
  },
  horizontalLine: {
    height: 1.3,
    backgroundColor: 'black',
    marginHorizontal: 5,
  },
  containerSelected: {
    backgroundColor: '#f0f0f0',
  },
});

export default Payment;
