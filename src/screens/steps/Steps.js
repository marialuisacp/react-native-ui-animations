import React, { useEffect } from 'react';
import { Animated } from 'react-native';
import ButtonProject from '../../components/button/Button';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import {
  ContentSteps, ImageLogo, TitleApp, SubTitleApp,
  ImageBackgroundSteps
} from './Steps.styles';

import { colors, colorsLighted } from '../../assets/Colors';
import { BG_STEPS, LOGO_INITIAL } from '../../assets/Images';

const Steps = ({ navigation }) => {
  useEffect(() => {
    animatedLogo();
  }, []);

  let positionLogo = new Animated.ValueXY(0, 0);

  const animatedLogo = () => {
    Animated.sequence([
      Animated.delay(1000),
      Animated.timing(positionLogo, {
        toValue: { x: 0, y: 10 },
        duration: 1000,
        useNativeDriver: false
      }),
      Animated.timing(positionLogo, {
        toValue: { x: 0, y: 0 },
        duration: 1000,
        useNativeDriver: false
      })
    ]).start(() => {
      animatedLogo()
    });
  };

  const goToLogin = () => {
    navigation.navigate('Login');
  };

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
        />
      </ImageBackgroundSteps>
    </ContentSteps>
  );
};

export default Steps;