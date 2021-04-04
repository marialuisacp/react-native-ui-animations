import styled from 'styled-components';
import { noteColors, colorsLighted } from '../../assets/Colors';
import Note from './Note';
import { Dimensions } from 'react-native';

const getRandomColor = () => {
  const randomNumber = Math.floor(Math.random() * (noteColors.length));
  return colorsLighted[noteColors[randomNumber]];
};

export const CustomNote = styled.View`
  padding: 10px 20px;
  border-radius: 16px;
  margin: 8px;
  border-bottom-color: #eee;
  border-bottom-width: 2px;
  border-left-color: #eee;
  border-left-width: 1px;
  background-color: ${() => getRandomColor()};
   width: ${(Dimensions.get('window').width - 52) / 2}
`;

export const CustomText = styled.Text`
  line-height: 16px;
  font-size: 14px;
`;
