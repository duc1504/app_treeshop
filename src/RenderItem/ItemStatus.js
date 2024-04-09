import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native'; // Import useFocusEffect
import { useSelector, useDispatch } from 'react-redux';
import { getProductsByCategory } from '../redux/MainApi';

const ItemStatus = ({ categories }) => {
  const [selectedItem, setSelectedItem] = useState(0);
  const [allStatus, setAllStatus] = useState([]);
  const dispatch = useDispatch();
  const useAppSelector = useSelector;

  useEffect(() => {
    // Check if dataStatus is available
    if (categories && categories.length > 0) {
      // Adding 'Tất cả' option to the status array
      const updatedAllStatus = [{ name: 'All', _id: '' }, ...categories.map(item => item)];
      setAllStatus(updatedAllStatus);
    }
  }, [categories]);

  // Sử dụng useFocusEffect để cập nhật lại trạng thái khi quay lại từ trang khác
  useFocusEffect(
    React.useCallback(() => {
      setSelectedItem(0); // Reset selected item index
    }, [])
  );

  const handleItemPress = (index, _id) => {
    dispatch(getProductsByCategory(_id));
    setSelectedItem(index);
  };

  return (
    <FlatList
      data={allStatus}
      keyExtractor={(item, index) => item._id.toString()} // Sử dụng index của mảng làm key
      horizontal={true} // Sắp xếp các phần tử theo chiều ngang
      showsHorizontalScrollIndicator={false} // Ẩn thanh cuộn ngang
      contentContainerStyle={{ justifyContent: 'space-between' }} // Canh giữa các phần tử theo chiều ngang
      renderItem={({ item, index }) => (
        <TouchableOpacity
          onPress={() => handleItemPress(index, item._id)}
          style={[
            styles.statusText,
            { backgroundColor: selectedItem === index ? '#32733e' : 'white' },
          ]}
        >
          <Text style={{ color: selectedItem === index ? 'white' : 'black' }}>
            {item.name}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  statusText: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginEnd: 5,
    borderRadius: 6,
    borderColor: '#32733e',
    borderWidth: 1,
  },
});

export default ItemStatus;
