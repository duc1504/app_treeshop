import React, {useEffect, useState, useRef} from 'react';
import {
  Alert,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from 'react-native';
import {useFocusEffect, useRoute} from '@react-navigation/native';
import PagerView from 'react-native-pager-view';
import SizeAndOriginContainer from '../components/SizeAndOriginContainer';
import StatusLabel from '../components/StatusLabel';
import Header from '../components/Header';
import {useSelector, useDispatch} from 'react-redux';
import { getDetailProduct } from '../redux/MainApi';
import AxiosInstance from '../helpers/AxiosInstance';
const DetailProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);
  const route = useRoute();
  const pagerRef = useRef(null);
  const { id } = route.params;
  const dispatch = useDispatch();
  const useAppSelector = useSelector;
  const appState = useAppSelector((state) => state.app);
  const [product, setProduct] = useState(appState.product);
  const userId = appState.user?._id;

 

  const fetchProduct = async () => {
    try {
      const response = await AxiosInstance().get(`product/detail/${id}`);
      setProduct(response.product);
    } catch (error) {
      console.log(error);
    }
  };

  // lấy detail product
  useEffect(() => {
    fetchProduct();
    return () => { }
  },[])

  const increaseQuantity = () => {
    if (quantity < product.quantity) {
      setQuantity(prevQuantity => prevQuantity + 1);
    }else{
      ToastAndroid.show('Không đủ số lượng', ToastAndroid.SHORT);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };
 
// thêm sản phẩm vào giỏ hàng
// POST : http://localhost:5000/cart/add
// body: {userId, productId, quantity}
const handleAddToCart = async () => {
  try {
    const body = {
      userId: userId,
      productId: product._id,
      quantity: quantity,
    };
    const response = await AxiosInstance().post('cart/add', body);
    if (response.status === true) {
      ToastAndroid.show('Đã thêm vào giỏ hàng', ToastAndroid.SHORT);
    }
  } catch (error) {
    console.log(error);
  }
};

 


  
  // const priceFormat = product.price.toLocaleString('vi-VN');
  const images = [
    require('../images/tree1.png'),
    require('../images/tree2.png'),
    require('../images/tree3.png'),
  ];

  const goToPreviousImage = () => {
    if (selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
      pagerRef.current.setPage(selectedIndex - 1);
    }
  };

  const goToNextImage = () => {
    if (selectedIndex < images.length - 1) {
      setSelectedIndex(selectedIndex + 1);
      pagerRef.current.setPage(selectedIndex + 1);
    } else {
      setSelectedIndex(0);
      pagerRef.current.setPage(0);
    }
  };
  // useEffect(() => {
  //   renderDots(); // Gọi lại hàm renderDots() sau khi cập nhật selectedIndex
  // }, [selectedIndex]);

  useEffect(() => {
    const priceString = product.price;
    const priceValue = parseFloat(priceString)
    const newTotalPrice = quantity * priceValue;
    setTotalPrice(newTotalPrice.toLocaleString('vi-VN'));
  });

// Render các hình ảnh từ dữ liệu API
const renderImages = () => {
  if (product.gallery && product.gallery.length > 0) {
    return product.gallery.map((item, index) => (
      <View key={index + 1}>
        <Image resizeMode="contain" style={styles.image} source={{uri: item}} />
      </View>
    ));
  } else {
    return null;
  }
};

// Render các chấm (dots) cho các hình ảnh
const renderDots = () => {
  if (product.gallery && product.gallery.length > 0) {
    return product.gallery.map((item, index) => (
      <View
        key={index + 1}
        style={{
          width: 10,
          height: 10,
          borderRadius: 5,
          backgroundColor: selectedIndex === index ? 'black' : 'gray',
          margin: 5,
        }}
      />
    ));
  } else {
    return null;
  }
};


  return (
    <SafeAreaView>
   <Header
        image={require('../images/shopping-cart.png')}
        title={'Chi tiết'}
        navigateTo={'Cart'}
      />
      <View>
        <Pressable
          onPress={goToPreviousImage}
          style={[styles.previousButton, styles.iconButton]}>
          <Image
            source={require('../images/previous.png')}
            style={[styles.previous, styles.icon]}
          />
        </Pressable>
        <Pressable
          onPress={goToNextImage}
          style={[styles.nextButton, styles.iconButton]}>
          <Image
            source={require('../images/next.png')}
            style={[styles.next, styles.icon]}
          />
        </Pressable>
        <PagerView
          style={styles.image}
          initialPage={selectedIndex}
          ref={pagerRef}
          onPageSelected={event => {
            setSelectedIndex(event.nativeEvent.position);
          }}>
          {renderImages()}
        </PagerView>
        <View style={styles.viewDots}>{renderDots()}</View>
      </View>
      <View style={styles.container}>
        <StatusLabel lable={'Cây trồng'} status={'Câyy'} />
        <Text style={styles.priceText}>{product.price}</Text>
        <Text style={styles.detailHeader}>Chi tiết sản phẩm</Text>
        <View style={styles.horizontalLine} />
      </View>
      {/* kích cỡ */}
      <SizeAndOriginContainer size={'Kích cỡ'} origin={'nhỏ'} />
      {/* xuất sứ */}
      <SizeAndOriginContainer size={'Xuất xứ'} origin={'Châu phi'} />
      {/* tình trạng */}
      <SizeAndOriginContainer size={'Tình trạng'} origin={`Còn ${product.quantity} sp`} />
      <View style={styles.quantityInfoRow}>
        <Text>Đã chọn {quantity} sản phẩm</Text>
        <Text>Tạm tính</Text>
      </View>
      <View style={styles.quantityInfoRow}>
        <View style={styles.quantityControls}>
          <Pressable onPress={decreaseQuantity}>
            <Image
              style={styles.quantityImage}
              source={require('../images/minus.png')}
            />
          </Pressable>
          <Text style={styles.quantityText}>{quantity}</Text>
          <Pressable onPress={increaseQuantity}>
            <Image
              style={styles.quantityImage}
              source={require('../images/plus.png')}
            />
          </Pressable>
        </View>
        <View>
          <Text style={styles.pricetotalText}>{totalPrice}đ</Text>
        </View>
      </View>
      <View style={styles.buyButton}>
        <Pressable
          style={{justifyContent: 'center'}}
          onPress={handleAddToCart}>
          <Text style={styles.buyButtonText}>Chọn mua</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default DetailProduct;

const styles = StyleSheet.create({
  previousButton: {
    position: 'absolute',
    left: 10,
    top: 150,
  },
  nextButton: {
    position: 'absolute',
    right: 10,
    top: 150,
  },
  iconButton: {
    zIndex: 1, // Đảm bảo nút nhấn hiển thị trên hết
  },
  next: {
    right: 10,
  },
  previous: {
    left: 10,
  },
  icon: {
    position: 'absolute',
    top: 0,
    zIndex: 33,
  },
  viewDots: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 300,
  },
  container: {
    marginHorizontal: 40,
    marginTop: 20,
  },
  priceText: {
    marginTop: 20,
    fontSize: 26,
    color: '#32733e',
    fontWeight: '600',
    fontFamily: 'Poppins-Medium',
  },
  pricetotalText: {
    fontSize: 26,
    color: '#32733e',
    fontWeight: '600',
    fontFamily: 'Poppins-Medium',
  },
  detailHeader: {
    fontSize: 16,
    color: 'black',
    marginTop: 22,
    fontFamily: 'Poppins-Medium',
  },

  quantityInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 20,
  },
  quantityControls: {
    flexDirection: 'row',
  },
  quantityText: {
    textAlign: 'center',
    fontSize: 20,
    marginHorizontal: 20,
  },
  buyButton: {
    alignSelf: 'center',
    marginHorizontal: 40,
    justifyContent: 'center',
    backgroundColor: '#32733e',
    width: '90%',
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  buyButtonText: {
    textAlign: 'center',
    color: 'white',
  },
});
