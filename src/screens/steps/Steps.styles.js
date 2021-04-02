import styled from 'styled-components';
import { colors } from '../../assets/Colors';

export const ContentSteps = styled.View`
  width: 100%;
  height: 100%;
  background: #f00;
`;

export const ImageBackgroundSteps = styled.ImageBackground`
  width: 100%;
  height: 100%;
  justify-content: center;
  background: #f0f;
  align-items: center;
`;

export const TitleApp = styled.Text`
  text-align: center;
  color: #fff;
  font-weight: bold;
  font-size: 24px;
  margin-top: 40px;
`;

export const SubTitleApp = styled.Text`
  text-align: center;
  color: ${colors.PINK};
  font-weight: bold;
  margin-top: 20px;
  font-size: 14px;
`;

export const ImageLogo = styled.Image`
  width: 320px;
  height: 320px;
  resize-mode: contain;
`;