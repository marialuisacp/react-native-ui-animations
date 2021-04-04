import React, { useState, useEffect } from 'react';
import { SafeAreaView, Animated } from 'react-native';
import ButtonProject from '../../components/button/Button';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import InputText from '../../components/inputText/InputText';
import TitlePage from '../../components/titlePage/TitlePage';
import { BG_LOGIN, IMAGE_LIGHT_BULB } from '../../assets/Images';
import { ImageBackground } from '../../assets/Styles';
import { colors, colorsLighted } from '../../assets/Colors';
import { InputBox, ImageLogin } from './Login.styles';
import { startPage } from './Login.animations';
import TextWithLink from '../../components/textWithLink/TextWithLink';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const goToHome = () => navigation.navigate('Notes');
  const initOpacity = () => new Animated.Value(0);
  const initPosition = () => new Animated.ValueXY(0, 0);
  const elements = ['Title', 'Subtitle', 'InputEmail', 'InputPassword', 'Text', 'Button'];
  const animatedElements = {};
  elements.map((item) => {
    animatedElements[item] = {};
    animatedElements[item].position = initPosition();
    animatedElements[item].opacity = initOpacity();
  });

  useEffect(() => {
    startPage(animatedElements);
  }, []);

  return (
    <SafeAreaView>
      <ImageBackground source={BG_LOGIN}>
        <TitlePage
          text={'Sign in'}
          opacity={animatedElements.Title.opacity}
          position={animatedElements.Title.position}
        />

        <TextWithLink
          text={'Or'} textLink={'Join now'}
          opacity={animatedElements.Subtitle.opacity}
          position={animatedElements.Subtitle.position}
        />

        <InputBox>
          <InputText
            onChange={setEmail}
            value={email}
            placeholder={'E-mail'}
            type={'email-address'}
            borderColor={colors.BLUE}
            textColor={colors.BROWN}
            opacity={animatedElements.InputEmail.opacity}
            position={animatedElements.InputEmail.position}
          />

          <InputText
            onChange={setPassword}
            value={password}
            secureTextEntry={true}
            placeholder={'Password'}
            type={'default'}
            borderColor={colors.BLUE}
            textColor={colors.BROWN}
            opacity={animatedElements.InputPassword.opacity}
            position={animatedElements.InputPassword.position}
          />
        </InputBox>

        <TextWithLink
          text={'Forgot password?'}
          textLink={'Click here'}
          opacity={animatedElements.Text.opacity}
          position={animatedElements.Text.position}
        />

        <ButtonProject
          text={'Sign in'}
          textColor={colors.WHITE}
          background={colors.ORANGE}
          onPress={goToHome}
          icon={faCheck}
          highLightColor={colorsLighted.ORANGE}
          opacity={animatedElements.Button.opacity}
          position={animatedElements.Button.position}
        />
        <ImageLogin source={IMAGE_LIGHT_BULB} />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Login;
