
import styled from 'styled-components';
import { colors } from '../../assets/Colors';

export const InputBox = styled.View`
  margin: 16px 0;
  padding: 0;
`;

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

export const ImageLogin = styled.Image`
  width: 240px;
  height: 240px;
  resize-mode: contain;
`;

