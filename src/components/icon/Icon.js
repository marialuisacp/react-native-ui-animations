import React from 'react';
import { CustomIcon } from './Icon.styles';
import { animatedElement } from '../../assets/Animations';

const Icon = ({ textColor, icon }) => {
  return (
    <CustomIcon color={textColor} icon={icon} size={20} />
  )
};

export default animatedElement(Icon);