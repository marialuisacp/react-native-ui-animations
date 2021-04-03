import React, { useEffect } from 'react';
import { Animated, Dimensions } from 'react-native';
import ButtonProject from '../../components/button/Button';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import {
  ContentSteps, ImageLogo, TitleApp, SubTitleApp,
  ImageBackgroundSteps
} from './Steps.styles';

import { animatedLogo, transitionPage } from './Steps.animations';
import { colors, colorsLighted } from '../../assets/Colors';
import { BG_STEPS, LOGO_INITIAL } from '../../assets/Images';

const Steps = ({ navigation }) => {
  let positionLogo = new Animated.ValueXY(0, 0);
  let positionAreaLogo = new Animated.ValueXY(0, 0);
  let positionTitle = new Animated.ValueXY(0, 0);
  let positionSubTitle = new Animated.ValueXY(0, 0);
  const goToLogin = () => navigation.navigate('Login');

  useEffect(() => {
    animatedLogo(positionLogo);
  }, []);

  return (
    <ContentSteps>
      <ImageBackgroundSteps source={BG_STEPS}>
        <Animated.View style={positionAreaLogo.getLayout()}>
          <Animated.View style={positionLogo.getLayout()}>
            <ImageLogo source={LOGO_INITIAL}></ImageLogo>
          </Animated.View>
        </Animated.View>

        <Animated.View style={positionTitle.getLayout()}>
          <TitleApp>Simple Example Notes App</TitleApp>
        </Animated.View>
        <Animated.View style={positionSubTitle.getLayout()}>
          <SubTitleApp>React Native UI Animations example</SubTitleApp>
        </Animated.View>

        <ButtonProject
          text={'Start now'}
          textColor={colors.ORANGE}
          background={colors.WHITE}
          onPress={() =>
            transitionPage([positionAreaLogo, positionTitle, positionSubTitle], goToLogin)}
          icon={faCheck}
          highLightColor={colorsLighted.WHITE}
          widthCustom={Dimensions.get('window').width * .6}
        />
      </ImageBackgroundSteps>
    </ContentSteps>
  );
};

export default Steps;