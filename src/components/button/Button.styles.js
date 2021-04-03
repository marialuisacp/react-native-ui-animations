import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export const CustomButton = styled.TouchableOpacity`
  background: ${(props) => props.color};
  padding: 16px;
  display: flex;
  width: 50%;
  justify-content: space-around;
  flex-direction: row;
  margin: 16px;
  border-radius: 16px;
  box-shadow: -2px 2px 4px rgba(0,0,0,0.24);
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