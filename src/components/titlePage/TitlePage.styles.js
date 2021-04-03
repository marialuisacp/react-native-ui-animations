import styled from 'styled-components';
import { colors } from '../../assets/Colors';

export const Title = styled.Text`
  margin: 12px 0px;
  color: ${(props) => props.textColor || colors.BROWN};
  font-size: 24px;
  font-weight: bold;
`;