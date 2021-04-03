import React, { useState, useEffect } from 'react';
import { SafeAreaView, TouchableWithoutFeedback, Animated } from 'react-native';
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
import { startPage } from './Login.animations';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const initPosition = () => new Animated.ValueXY(0, 0);
  const elements = ['Title', 'SubTitle', 'InputEmail', 'InputPassword', 'Text', 'Button'];
  const animatedElements = {};
  elements.map((item) => { animatedElements[item] = initPosition(); });

  useEffect(() => {
    startPage(animatedElements);
  }, []);

  return (
    <SafeAreaView>
      <ImageBackground source={BG_LOGIN}>
        <Animated.View style={{ ...animatedElements.SubTitle.getLayout() }}>
          <TitlePage text={'Sign up'} />
        </Animated.View>

        <Animated.View style={animatedElements.SubTitle.getLayout()}>
          <TextBox>
            <CustomText> Or </CustomText>
            <TouchableWithoutFeedback>
              <Link> Join Now </Link>
            </TouchableWithoutFeedback>
          </TextBox>
        </Animated.View>

        <InputBox>
          <Animated.View style={animatedElements.InputEmail.getLayout()}>
            <InputText
              onChange={setEmail}
              value={email}
              placeholder={'E-mail'}
              type={'email-address'}
              borderColor={colors.BLUE}
              textColor={colors.BROWN}
            />
          </Animated.View>
          <Animated.View style={animatedElements.InputPassword.getLayout()}>
            <InputText
              onChange={setPassword}
              value={password}
              secureTextEntry={true}
              placeholder={'Password'}
              type={'default'}
              borderColor={colors.BLUE}
              textColor={colors.BROWN}
            />
          </Animated.View>
        </InputBox>

        <Animated.View style={animatedElements.Text.getLayout()}>
          <TextBox>
            <TouchableWithoutFeedback>
              <CustomText> Forgot password? </CustomText>
            </TouchableWithoutFeedback>
          </TextBox>
        </Animated.View>

        <Animated.View style={animatedElements.Button.getLayout()}>
          <ButtonProject
            text={'Start now'}
            textColor={colors.WHITE}
            background={colors.ORANGE}
            onPress={() => { }}
            icon={faCheck}
            highLightColor={colorsLighted.ORANGE}
          />
        </Animated.View>

        <ImageLogin source={IMAGE_LIGHT_BULB} />
      </ImageBackground>
    </SafeAreaView>
  );
};
export default Login;
