import React from 'react';

import {
  ContentSteps, ImageBackgroundSteps,
  ImageLogo, TitleApp, SubTitleApp
} from './Steps.styles';
import { BG_STEPS, LOGO_INITIAL } from '../../assets/Assets';

const Steps = () => (
  <ContentSteps>
    <ImageBackgroundSteps source={BG_STEPS}>
      <ImageLogo source={LOGO_INITIAL}></ImageLogo>
      <TitleApp>Simple Example Notes App</TitleApp>
      <SubTitleApp>React Native UI Animations example</SubTitleApp>
    </ImageBackgroundSteps>
  </ContentSteps>
);

export default Steps;