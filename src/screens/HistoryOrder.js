import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import AxiosInstance from '../helpers/AxiosInstance';
import { useDispatch, useSelector } from 'react-redux';

const HistoryOrder = () => {
    const dispatch = useDispatch();
    const useAppSelector = useSelector;
    const appState = useAppSelector((state) => state.app);
    const user = appState.user;
    const [histories, setHistories] = useState([]);

    // Lấy dữ liệu từ API http://localhost:5000/order/purchase-history/:userId
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await AxiosInstance().get(`order/purchase-history/${user._id}`);
                const result = response.purchaseHistory;
                setHistories(result);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    const renderOrderItem = ({ item }) => (
        <View style={styles.orderItem}>
            <Text style={styles.orderId}>Mã đơn hàng: #{item._id}</Text>
            <Text style={styles.orderDate}>Ngày đặt hàng: {formatDate(item.createdAt)}</Text>
            <Text style={styles.totalAmount}>Tổng số tiền: ${item.totalAmount}</Text>
            <FlatList
                data={item.products}
                renderItem={renderProductItem}
                keyExtractor={(item) => item._id}
            />
        </View>
    );

    const renderProductItem = ({ item }) => (
        <View style={styles.productItem}>
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <View style={styles.productDetails}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productPrice}>Price: ${item.price}</Text>
               
            </View>
        </View>
    );

    const formatDate = (date) => {
        const formattedDate = new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
        return formattedDate;
    };

    return (
        <View style={styles.container}>
            <Header title='LỊCH SỬ GIAO DỊCH' />
            <FlatList
                data={histories}
                renderItem={renderOrderItem}
                keyExtractor={(item) => item._id}
            />
        </View>
    );
};

export default HistoryOrder;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    orderItem: {
        borderBottomWidth: 1,
        borderColor: '#ccc',
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    orderId: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    orderDate: {
        fontSize: 14,
        marginBottom: 5,
    },
    totalAmount: {
        fontSize: 14,
        marginBottom: 10,
        fontWeight: 'bold',
        color:'black'
    },
    productItem: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#ccc',
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    productImage: {
        width: 80,
        height: 80,
        resizeMode: 'cover',
        marginRight: 20,
    },
    productDetails: {
        flex: 1,
    },
    productName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 5,
    },
    productPrice: {
        fontSize: 14,
        marginBottom: 5,
        color: '#007537',
    },
    productQuantity: {
        fontSize: 14,
        color: '#777',
    },
});
