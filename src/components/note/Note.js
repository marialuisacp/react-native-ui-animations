import React from 'react';
import { CustomNote, CustomText } from './Note.styles';
import { animatedElement } from '../../assets/Animations';

const Note = ({ text }) => {
  return (
    <CustomNote>
      <CustomText>{text}</CustomText>
    </CustomNote>
  );
};

export default animatedElement(Note);