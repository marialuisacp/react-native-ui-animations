import React, { Fragment } from 'react';
import { CustomButton, TextButtton, IconButton } from './Button.styles';

const ButtonProject = ({ onPress, background, text, textColor, icon, highLightColor }) => (
  <CustomButton
    onPress={onPress}
    color={background}
    activeOpacity={0.999}
    underlayColor={highLightColor || '#ddd'}>
    <Fragment>
      <TextButtton color={textColor}> {text} </TextButtton>
      <IconButton color={textColor} icon={icon} size={20} />
    </Fragment>
  </CustomButton>
);

export default ButtonProject;