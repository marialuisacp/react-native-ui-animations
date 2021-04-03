import styled from 'styled-components';

export const CustomInput = styled.TextInput`
  height: 40px;
  margin: 12px;
  border: solid 2px ${(props) => props.borderColor};
  color: ${(props) => props.textColor};
  padding: 4px 24px;
  font-size: 14px;
  border-radius: 24px;
  background: #fff;
`;