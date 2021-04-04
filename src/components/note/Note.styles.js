import styled from 'styled-components';
import { noteColors, colorsLighted, colorsTransparent } from '../../assets/Colors';
import { Dimensions } from 'react-native';

const getColor = (id) => {
  const fixNumber = noteColors[id % noteColors.length];
  const randomNumber = Math.floor(Math.random() * (noteColors.length));
  return {
    color: colorsLighted[fixNumber] || colorsLighted[noteColors[randomNumber]],
    border: colorsTransparent[fixNumber] || colorsTransparent[noteColors[randomNumber]]
  };
};

export const CustomNote = styled.View`
  padding: 10px 20px;
  border-radius: 8px;
  margin: 8px;
  background-color: ${({ id }) => { const item = getColor(id); return item.color }};
  box-shadow: -2px 8px 8px ${({ id }) => { const item = getColor(id); return item.border }};
  width: ${(Dimensions.get('window').width - 80) / 2};
  flex-basis: 0;
  flex-grow: 1;
`;

export const CustomText = styled.Text`
  line-height: 16px;
  font-size: 14px;
`;
