import React from 'react';
import { Title } from './TitlePage.styles';
import { animatedElement } from '../../assets/Animations';

const TitlePage = ({ text, textColor }) => (
  <Title textColor={textColor}> {text} </Title>
);

export default animatedElement(TitlePage);
