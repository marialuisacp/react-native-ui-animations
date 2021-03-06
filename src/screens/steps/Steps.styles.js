import styled from 'styled-components';
import { colors } from '../../assets/Colors';

import ButtonProject from '../../components/button/Button';
import { ImageBackground } from '../../assets/Styles';

export const ContentSteps = styled.View`
  width: 100%;
  height: 100%;
  background: #f00;
`;

export const ImageBackgroundSteps = styled(ImageBackground)`
  align-items: center;
  padding: 32px;
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
  color: ${colors.YELLOW};
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 40px;
  font-size: 16px;
`;

export const ImageLogo = styled.Image`
  width: 320px;
  height: 320px;
  resize-mode: contain;
`;

export const StepsButton = styled(ButtonProject)`
  margin: 84px !important;
  display: none;
`;