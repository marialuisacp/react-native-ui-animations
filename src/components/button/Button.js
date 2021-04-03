import React, { Fragment, useState } from 'react';
import { Animated, Dimensions } from 'react-native';
import { CustomButton, TextButtton, IconButton } from './Button.styles';

const ButtonProject = ({ onPress, background, text, textColor, icon, highLightColor, widthCustom }) => {
  const [dynamicwidth, setDynamicWidth] = useState(100);
  const [animatedWidth, setAnimatedWidth] = useState(new Animated.Value(0))
  const windowWidth = Dimensions.get('window').width;
  let opacityText = new Animated.Value(1);

  const buttonAnimation = (onPress) => {
    Animated.sequence([
      Animated.timing(opacityText, {
        toValue: 0,
        duration: 100,
        useNativeDriver: false
      }),
      Animated.timing(animatedWidth, {
        toValue: 1,
        duration: 120,
        useNativeDriver: false
      }),
      Animated.delay(60)
    ]).start(() => {
      onPress();
    });
  };

  const handleWidth = (event) => {
    const { width } = event.nativeEvent.layout;
    setDynamicWidth(prev => prev + width);
  }

  const onClickButton = (onPress) => {
    buttonAnimation(onPress);
  }

  const paddingPage = 64;
  const widthButton = widthCustom || (windowWidth - paddingPage);
  const widthAfterAnimation = 52;
  return (
    <Animated.View style={{
      width: animatedWidth.interpolate({
        inputRange: [0, 1],
        outputRange: [widthButton, widthAfterAnimation]
      })
    }}>
      <CustomButton
        onLayout={(event) => event && handleWidth(event)}
        onPress={() => onClickButton(onPress)}
        color={background}
        activeOpacity={0.999}
        underlayColor={highLightColor}>
        <Fragment>
          <Animated.View style={{ opacity: opacityText }}>
            <TextButtton color={textColor}> {text} </TextButtton>
          </Animated.View>
          <IconButton color={textColor} icon={icon} size={20} />
        </Fragment>
      </CustomButton>
    </Animated.View>
  )
};

export default ButtonProject;