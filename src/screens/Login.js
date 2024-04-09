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
import RememberandForget from '../components/RememberandForget';
import Button from '../components/Button';
import OrAndLine from '../components/OrAndLine';
import LoginOther from '../components/LoginOther';
import TextHaveAcc from '../components/TextHaveAcc';
import { useNavigation } from '@react-navigation/native';
import { login } from '../redux/UserApi';
import { useDispatch, useSelector } from 'react-redux'



const StyleWapInput = () => {

  return {
    Input: {
      ...stylesApp.wrapInput,
    },
  };
};
console.log('Login.....')
const Login = () => {
  const dispatch = useDispatch()
  const useAppSelector = useSelector;
  const errorLogin = useAppSelector((state) => state.app.errorLogin);
  
  // const dispatch = useAppDispatch();
  const [email, setEmail] = useState('linh1@gmail.com');
  const [password, setPassword] = useState('1234567');
  const navigation = useNavigation();
  const handleLogin = ()=>{
    try {
      const body = {
        emailOrMobile: email,
          password: password
      }
      dispatch(login(body));
  } catch (error) {
      console.log(error);
  }
  }
  const handleClickText = ()=>{
    navigation.navigate('SignUp')
    console.log('SigUp')
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{width:'100%'}}>
      <View>
        <Image
          style={stylesApp.styleImageBackground}
          source={require('../images/backgroundLogin.png')}
        />
        <View style={stylesApp.container}>
          <TitleText title={'Chào mừng bạn'} style={stylesApp.titleText} />
          <SubTitleText
            style={stylesApp.subtitle}
            subtitle={'Đăng nhập tài khoản'}
          />
          <WrapInput
            style={StyleWapInput()}
            placeholder={'Nhập email hoăc số điện thoại'}
            value={email}
            onChange={e => {
              setEmail(e);
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
            errorText={errorLogin}
          />
        </View>
        <View style={stylesApp.RowSpaceBetween}>
          <RememberandForget
            style={stylesApp.FogetpassText}
            tick={require('../images/ri_checkbox-circle-line.png')}
            text={'Nhớ tài khoản'}
          />

          <RememberandForget
            style={stylesApp.FogetpassText}
            text={'Quên mật khẩu'}
          />
        </View>

        {/* Button Đăng nhâp */}
        <Button textButton={'Đăng nhập'} onClick={handleLogin} />
        <OrAndLine />
        <LoginOther />
        <TextHaveAcc onClickText={handleClickText} mainText="Bạn không có tài khoản" actionText=" Đăng ký" />
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
