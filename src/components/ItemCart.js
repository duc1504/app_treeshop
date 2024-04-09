import React, {useEffect, useState} from 'react';
import {View, Text, Image, Pressable, StyleSheet} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {useSelector} from 'react-redux';
import AxiosInstance from '../helpers/AxiosInstance';

const ItemCart = ({
  item,
  updateCart,
  handleCheckboxToggle,
  selectedProducts,
}) => {
  const [isChecked, setIsChecked] = useState(
    selectedProducts.includes(item._id),
  );
  const useAppSelector = useSelector;
  const appState = useAppSelector(state => state.app);
  const userId = appState.user?._id;
  const [quantity, setQuantity] = useState(item.quantity);

  const handleToggleCheckbox = () => {
    setIsChecked(!isChecked); // Cập nhật trạng thái của checkbox
    handleCheckboxToggle(item.product_id._id); // Gọi hàm handleCheckboxToggle để thêm hoặc loại bỏ sản phẩm khỏi danh sách selectedProducts
  };

  // Cập nhật số lượng sản phẩm lên API khi số lượng thay đổi
  useEffect(() => {
    if (userId) {
      const updateQuantity = async () => {
        try {
          const body = {
            productId: item.product_id._id,
            quantity: quantity,
          };
          const response = await AxiosInstance().put(
            `cart/update/${userId}`,
            body,
          );
          if (response.status === true) {
            updateCart();
          }
        } catch (error) {
          console.log(error);
        }
      };
      updateQuantity();
    }
  }, [quantity]);

  // Xoá sản phẩm khỏi giỏ hàng
  const handleDelete = async () => {
    try {
      const response = await AxiosInstance().delete(
        `cart/deleteone/${userId}`,
        {
          data: {
            productId: item.product_id._id,
          },
        },
      );
      if (response.status === true) {
        updateCart();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const increaseQuantity = () => {
    if (quantity < item.product_id.quantity) {
      setQuantity(prevQuantity => prevQuantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <CheckBox value={isChecked} onValueChange={handleToggleCheckbox} />

        <Image
          style={styles.image}
          source={{uri: item.product_id.gallery[0]}}
        />
        <View style={styles.textContainer}>
          <View style={styles.textRow}>
            <Text style={styles.title}>{item.product_id.name}</Text>
          </View>
          <Text style={styles.price}>{item.product_id.price}</Text>
          <View style={styles.buttonContainer}>
            <Pressable onPress={decreaseQuantity}>
              <Image
                style={styles.buttonIcon}
                source={require('../images/minus.png')}
              />
            </Pressable>
            <Text style={styles.quantity}>{quantity}</Text>
            <Pressable onPress={increaseQuantity}>
              <Image
                style={styles.buttonIcon}
                source={require('../images/plus.png')}
              />
            </Pressable>
            <Pressable onPress={handleDelete}>
              <Text style={styles.delete}>Xóa</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
  },
  itemContainer: {
    paddingVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 10,
    marginStart: 8,
    marginEnd: 10,
  },
  textContainer: {
    width: '45%',
  },
  textRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: 'black',
    fontWeight: '500',
    fontSize: 18,
  },
  price: {
    color: '#007537',
    fontWeight: '400',
    fontSize: 20,
    marginVertical: 6,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonIcon: {
    width: 26,
    height: 26,
  },
  quantity: {
    color: 'black',
    fontWeight: '500',
    fontSize: 18,
  },
  delete: {
    color: 'black',
    fontWeight: '500',
    fontSize: 18,
    textDecorationLine: 'underline',
  },
});

export default ItemCart;
