import React from 'react';
import { CustomNote, CustomText } from './Note.styles';

const Note = ({ text }) => {
  return (
    <CustomNote>
      <CustomText>{text}</CustomText>
    </CustomNote>
  );
};

export default Note;