import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { clearLogin } from '../redux/Reducer';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
const Profile = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const appSelector= useSelector;
    const user = appSelector(state => state.app.user);
  
    const handleLogout = () => {
        dispatch(clearLogin());
    };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PROFILE</Text>
      <View style={styles.profileContainer}>
        <View style={styles.profileInfo}>
          {
            user.avatar ? 
            <Image source={{uri: user.avatar}} style={styles.avatar}/>
             : <Image source={require('../images/avatardefault.jpg')} style={styles.avatar}/>
          }
          <View style={styles.userInfo}>
            <Text style={styles.userName}>{user.name}</Text>
            <Text style={styles.userEmail}>{user.email}</Text>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Chung</Text>
          <View style={styles.divider} />
          <Text style={styles.sectionItem} onPress={() => navigation.navigate('EditProfile')}>Chỉnh sửa thông tin</Text>
          <Text style={styles.sectionItem}>Cẩm nang trồng cây</Text>
          <Text style={styles.sectionItem} onPress={() => navigation.navigate('HistoryOrder')}>Lịch sử giao dịch</Text>
          <Text style={styles.sectionItem}>Q & A</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Bảo mật và Điều khoản</Text>
          <View style={styles.divider} />
          <Text style={styles.sectionItem}>Điều khoản và điều kiện</Text>
          <Text style={styles.sectionItem}>Chính sách quyền riêng tư</Text>
          <Text style={styles.logout} onPress={handleLogout}>Đăng xuất</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'black',
  },
  profileContainer: {
    flex: 1,
    marginHorizontal: 36,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  userInfo: {
    marginLeft: 20,
  },
  userName: {
    fontSize: 18,
    color: 'black',
    fontWeight: '400',
  },
  userEmail: {
    fontSize: 14,
    fontWeight: '400',
  },
  section: {
    marginTop: 40,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '400',
  },
  divider: {
    width: '100%',
    marginTop: 8,
    height: 1.3,
    backgroundColor: 'gray',
    marginHorizontal: 5,
  },
  sectionItem: {
    fontSize: 18,
    marginTop: 20,
    color: 'black',
    fontWeight: '400',
  },
  logout: {
    fontSize: 18,
    marginTop: 20,
    color: 'red',
    fontWeight: '400',
  },
});

export default Profile;
