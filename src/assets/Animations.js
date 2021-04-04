import React from 'react';
import { Animated } from 'react-native';

export const animatedElement = (Component) => props => {
  const opacity = props && props.opacity;
  const position = props && props.position && props.position.getLayout();

  return (
    <Animated.View style={{ opacity }} >
      <Animated.View style={position} >
        <Component {...props} />
      </Animated.View>
    </Animated.View>
  )
};