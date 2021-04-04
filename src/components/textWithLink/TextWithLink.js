import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { animatedElement } from '../../assets/Animations';
import { TextBox, CustomText, Link } from './TextWithLink.styles';

const TextWithLink = ({ text, textLink, url }) => (
  <TextBox>
    <CustomText> {text} </CustomText>
    <TouchableWithoutFeedback>
      <Link> {textLink} </Link>
    </TouchableWithoutFeedback>
  </TextBox>
);

export default animatedElement(TextWithLink);