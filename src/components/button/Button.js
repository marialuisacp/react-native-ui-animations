import React from 'react';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import { colors } from '../../assets/Colors';
import { CustomButton, TextButtton, IconButton } from './Button.styles';

const ButtonProject = ({ onPress }) => (
  <CustomButton onClick={onPress} color='#fff'>
    <TextButtton color={colors.PURPLE}> Start now </TextButtton>
    <IconButton color={colors.PURPLE} icon={faCheck} size={20} />
  </CustomButton>
);

export default ButtonProject;