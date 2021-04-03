import React, { useState } from 'react';
import { SafeAreaView, TouchableWithoutFeedback } from 'react-native';

import ButtonProject from '../../components/button/Button';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import InputText from '../../components/inputText/InputText';
import TitlePage from '../../components/titlePage/TitlePage';

import { BG_LOGIN, IMAGE_LIGHT_BULB } from '../../assets/Images';
import { ImageBackground } from '../../assets/Styles';
import { colors, colorsLighted } from '../../assets/Colors';

import {
  TextBox, CustomText, Link, InputBox,
  ImageLogin
} from './Login.styles';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView>
      <ImageBackground source={BG_LOGIN}>
        <TitlePage
          text={'Sign up'}
        />
        <TextBox>
          <CustomText> Or </CustomText>
          <TouchableWithoutFeedback>
            <Link> Join Now </Link>
          </TouchableWithoutFeedback>
        </TextBox>

        <InputBox>
          <InputText
            onChange={setEmail}
            value={email}
            placeholder={'E-mail'}
            type={'email-address'}
            borderColor={colors.BLUE}
            textColor={colors.BROWN}
          />
          <InputText
            onChange={setPassword}
            value={password}
            secureTextEntry={true}
            placeholder={'Password'}
            type={'default'}
            borderColor={colors.BLUE}
            textColor={colors.BROWN}
          />
        </InputBox>

        <TextBox>
          <TouchableWithoutFeedback>
            <CustomText> Forgot password? </CustomText>
          </TouchableWithoutFeedback>
        </TextBox>

        <ButtonProject
          text={'Start now'}
          textColor={colors.WHITE}
          background={colors.ORANGE}
          onPress={() => { }}
          icon={faCheck}
          highLightColor={colorsLighted.ORANGE}
        />

        <ImageLogin source={IMAGE_LIGHT_BULB} />
      </ImageBackground>
    </SafeAreaView>
  );
};
export default Login;
