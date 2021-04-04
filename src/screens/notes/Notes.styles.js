import styled from 'styled-components';
import { Animated, Dimensions } from 'react-native';
import Note from '../../components/note/Note';

export const Grid = styled.View`
  display: flex;
  margin: 0px;
  padding: 8px;
`;

export const CustomNote = styled(Note)`
  /* flex-shrink: 2; */
  flex-basis: 0;
  flex-grow: 1;
  width: ${Dimensions.get('window').width}
`;
