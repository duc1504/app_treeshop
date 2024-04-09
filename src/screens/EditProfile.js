import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, Pressable, ToastAndroid, View, Image, ActivityIndicator } from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import axios from 'axios';
import Header from '../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { editProfile } from '../redux/UserApi';


const EditProfile = () => {
  const dispatch = useDispatch();
  const appState = useSelector((state) => state.app);
  const User = appState.user;
  const [name, setName] = useState(User.name);
  const [email, setEmail] = useState(User.email);
  const [phone, setPhone] = useState(User.numberMobile);
  const [avatar, setAvatar] = useState(User.avatar);
  const [address, setAddress] = useState(User.address);

  const statusEdit = appState.statusEditProfile;
  const loading = appState.loadingEditProfile;

  useEffect(() => {
    if (statusEdit == true) {
      ToastAndroid.show('Đã cập nhật thành công', ToastAndroid.SHORT);
    } else if (statusEdit == false) {
      ToastAndroid.show('Cập nhật thất bại', ToastAndroid.SHORT);
    }
  }, [statusEdit]);

  const handleEditProfile = () => {
    try {
      const body = {
        id: User._id,
        name: name,
        email: email,
        numberMobile: phone,
        address: address,
        avatar: avatar
      };
      dispatch(editProfile(body));
    } catch (error) {
      console.log(error);
    }
  };

  // xử lí avatar
  const handleEditAvatar = async() => {
    const options = {
      mediaType: 'photo',
      maxWidth: 600,
      maxHeight: 600,
      quality: 1,
    }

   await launchImageLibrary(options, async(response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
      
        console.log(response.assets[0]);
        const formData = new FormData();
      formData.append('upload_preset', 't9fgxqpw');

        formData.append('file', {
          uri: response.assets[0].uri,
          type: response.assets[0].type,
          name: response.assets[0].fileName
        });
        let res = await fetch(
          'https://api.cloudinary.com/v1_1/dcb2afzz4/image/upload',
          {
            method: 'post',
            body: formData,
            headers: {
              'Content-Type': 'multipart/form-data; ',
            },
          }
        );
        let responseJson = await res.json();
        console.log(responseJson.url);
        setAvatar(responseJson.url);
      }
    });
  
  }
  useEffect(() => {
    setName(User.name);
    setEmail(User.email);
    setPhone(User.numberMobile);
    setAddress(User.address);
    setAvatar(User.avatar);
  }, [User]);

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={-50}
    >
      <Header title={'CHỈNH SỬA THÔNG TIN'} />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.avatarContainer}>
         {
          avatar ? 
         <Pressable onPress={handleEditAvatar}>
           <Image style={styles.avatar} source={{uri: avatar}} />
         </Pressable> :
          <Pressable onPress={handleEditAvatar}>
            <Image
          style={styles.avatar}
          source={require('../images/avatardefault.jpg')}
        />
          </Pressable>
         }
        </View>
        <Text style={styles.infoText}>
          Thông tin sẽ được lưu cho lần mua kế tiếp, Bấm vào thông tin chi tiết để chỉnh sửa
        </Text>
        <View style={styles.inputContainer}>
          <TextInput 
            style={styles.input} 
            value={name} 
            onChangeText={(value) => setName(value)} 
            placeholder="Tên" 
          />
          <TextInput 
            style={styles.input} 
            value={email} 
            onChangeText={(value) => setEmail(value)} 
            placeholder="Email" 
          />
          <TextInput 
            style={styles.input} 
            value={phone} 
            onChangeText={(value) => setPhone(value)} 
            placeholder="Số điện thoại" 
          />
          <TextInput 
            style={styles.input} 
            value={address} 
            onChangeText={(value) => setAddress(value)} 
            placeholder="Địa chỉ" 
          />
        </View>
        {loading ? (
          <ActivityIndicator style={styles.activityIndicator} size="large" color="#32733e" />
        ) : (
          <Pressable style={styles.saveButton} onPress={()=>handleEditProfile()}>
            <Text style={styles.saveButtonText}>LƯU THÔNG TIN</Text>
          </Pressable>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentContainer: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: 36,
    paddingTop: 40,
  },
  avatarContainer: {
    marginBottom: 36,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  infoText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'black',
    marginBottom: 36,
  },
  inputContainer: {
    width: '100%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderBottomWidth: 1,
    borderRadius: 5,
    marginTop: 16,
    width: '100%',
  },
  saveButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 45,
    backgroundColor: '#32733e',
    borderRadius: 5,
    position: 'absolute',
    bottom: 26,
   
  },
  saveButtonText: {
    fontSize: 16,
    color: 'white',
  },
  activityIndicator: {
    position: 'absolute',
    bottom: 26,
   
  },
});

export default EditProfile;
