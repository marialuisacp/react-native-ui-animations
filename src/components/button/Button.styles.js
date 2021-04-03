import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export const CustomButton = styled.TouchableHighlight`
  background: ${(props) => props.color};
  padding: 16px 22px;
  display: flex;
  height: 52px;
  justify-content: space-around;
  flex-direction: row;
  margin: 24px;
  border-radius: 32px;
  box-shadow: -2px 8px 8px rgba(216, 110, 75 , 0.44);
`;

export const TextButtton = styled.Text`
  color: ${(props) => props.color};
  font-weight: bold;
  font-size: 16px;
`;

export const IconButton = styled(FontAwesomeIcon)`
  color: ${(props) => props.color};
  margin-left: 8px;
`;