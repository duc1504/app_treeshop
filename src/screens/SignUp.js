import {
    Image,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
  } from 'react-native';
  import LinearGradient from 'react-native-linear-gradient';
  import React, {useState} from 'react';
  import stylesApp from '../stylesApp';
  import TitleText from '../components/TitleText';
  import SubTitleText from '../components/SubTitleText';
  import WrapInput from '../components/WrapInput';
  import Button from '../components/Button';
  import OrAndLine from '../components/OrAndLine';
  import LoginOther from '../components/LoginOther';
  import TextHaveAcc from '../components/TextHaveAcc';
import { useNavigation } from '@react-navigation/native';
import { signup } from '../redux/UserApi';
import {useDispatch, useSelector} from 'react-redux';

  
  const StyleWapInput = () => {
    return {
      Input: {
        ...stylesApp.wrapInput,
      },
    };
  };
  const Signup = () => {
    // khởi tạo dispatch
    const dispatch = useDispatch();
    const useAppSelector = useSelector;
    const statusSignup = useAppSelector((state) => state.app.statusSignup);
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [sdt, setSdt] = useState('');
 
    const navigation = useNavigation();

    const handleSigup = ()=>{
     
      try {
        const body = {
          name: name,
          email: email,
          password: password,
          numberMobile: sdt

        }
        dispatch(signup(body));
        
    } catch (error) {
        console.log(error);
    }
    }

    const handleClickText = ()=>{
      navigation.navigate('Login')
    }
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{width:'100%'}}>

        <SafeAreaView>
          <Image
            style={stylesApp.styleImageBackground}
            source={require('../images/backgroundSigup.png')}
          />
          <View style={stylesApp.container}>
            <TitleText title={'Đăng kí'} style={stylesApp.titleText} />
            <SubTitleText
              style={stylesApp.subtitle}
              subtitle={'Tạo tài khoản'}
            />
            <WrapInput
              style={StyleWapInput()}
              placeholder={'Họ tên'}
              value={name}
              onChange={e => {
                setName(e);
              }}
            />

            <WrapInput
              style={StyleWapInput()}
              placeholder={'E-mail'}
              value={email}
              onChange={e => {
                setEmail(e);
              }}
            />

            <WrapInput
              style={StyleWapInput()}
              placeholder={'Số điện thoại'}
              value={sdt}
              onChange={e => {
                setSdt(e);
              }}
            />
            <WrapInput
              style={StyleWapInput()}
              placeholder={'Nhập mật khẩu'}
              value={password}
              onChange={text => {
                setPassword(text);
              }}
              isPassword={true}
              oneye={require('../images/view.png')}
              offeye={require('../images/hide.png')}
              errorText={statusSignup}
             
            />
            <TextHaveAcc mainText="Để đăng kí tài khoản,bạn đồng ý Terms & Condition and" actionText=" Privacy Polyci" />
          </View>
         
          <Button textButton={'Đăng ký'} onClick={handleSigup} />
          <OrAndLine />
          <LoginOther />
          <TextHaveAcc onClickText={handleClickText}  mainText="Tôi đã có tài khoản" actionText="Đăng nhập" />
        </SafeAreaView>
      </KeyboardAvoidingView>
    );
  };
  
  export default Signup;
  