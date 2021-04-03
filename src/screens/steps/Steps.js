import React, { useEffect } from 'react';
import { Animated, Dimensions } from 'react-native';
import ButtonProject from '../../components/button/Button';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import {
  ContentSteps, ImageLogo, TitleApp, SubTitleApp,
  ImageBackgroundSteps
} from './Steps.styles';

import { animatedLogo } from './Steps.animations';
import { colors, colorsLighted } from '../../assets/Colors';
import { BG_STEPS, LOGO_INITIAL } from '../../assets/Images';

const Steps = ({ navigation }) => {
  let positionLogo = new Animated.ValueXY(0, 0);
  const goToLogin = () => {
    navigation.navigate('Login');
  };

  useEffect(() => {
    animatedLogo(positionLogo);
  }, []);

  return (
    <ContentSteps>
      <ImageBackgroundSteps source={BG_STEPS}>
        <Animated.View style={positionLogo.getLayout()}>
          <ImageLogo source={LOGO_INITIAL}></ImageLogo>
        </Animated.View>
        <TitleApp>Simple Example Notes App</TitleApp>
        <SubTitleApp>React Native UI Animations example</SubTitleApp>

        <ButtonProject
          text={'Start now'}
          textColor={colors.ORANGE}
          background={colors.WHITE}
          onPress={goToLogin}
          icon={faCheck}
          highLightColor={colorsLighted.WHITE}
          widthCustom={Dimensions.get('window').width * .6}
        />
      </ImageBackgroundSteps>
    </ContentSteps>
  );
};

export default Steps;