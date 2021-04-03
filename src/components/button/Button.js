import React, { Fragment, useState } from 'react';
import { Animated, Dimensions } from 'react-native';
import { CustomButton, TextButtton, IconButton } from './Button.styles';

const ButtonProject = ({ onPress, background, text, textColor, icon, highLightColor }) => {
  const [dynamicwidth, setDynamicWidth] = useState(100);
  const [animatedWidth, setAnimatedWidth] = useState(new Animated.Value(0))
  const windowWidth = Dimensions.get('window').width;
  let opacityText = new Animated.Value(1);

  const buttonAnimation = () => {
    Animated.sequence([
      Animated.timing(opacityText, {
        toValue: 0,
        duration: 100,
        useNativeDriver: false
      }),
      Animated.timing(animatedWidth, {
        toValue: 1,
        duration: 200,
        useNativeDriver: false
      })
    ]).start();
  };

  const handleWidth = (event) => {
    const { width } = event.nativeEvent.layout;
    setDynamicWidth(prev => prev + width);
  }

  const onClickButton = (onPress) => {
    buttonAnimation();
    onPress();
  }

  return (
    <Animated.View style={{
      width: animatedWidth.interpolate({
        inputRange: [0, 1],
        outputRange: [windowWidth * .6, 100]
      })
    }}>
      <CustomButton
        onLayout={(event) => event && handleWidth(event)}
        onPress={() => onClickButton(onPress)}
        color={background}
        activeOpacity={0.999}
        underlayColor={highLightColor || '#ddd'}>
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