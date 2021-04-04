import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export const CustomIcon = styled(FontAwesomeIcon)`
  color: ${(props) => props.color};
  margin-left: 16px;
`;