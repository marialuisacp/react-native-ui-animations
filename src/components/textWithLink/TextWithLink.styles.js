import styled from 'styled-components';
import { colors } from '../../assets/Colors';

export const TextBox = styled.View`
  flex-direction: row;
`;

export const CustomText = styled.Text`
  color: ${colors.BROWN};
`;

export const Link = styled.Text`
  color: ${colors.BLUE};
  text-decoration: underline;
  text-decoration-color: ${colors.BLUE};
`;