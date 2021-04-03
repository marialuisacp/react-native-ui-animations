import { Animated } from 'react-native';

export const animatedLogo = (positionLogo) => {
  Animated.sequence([
    Animated.delay(1000),
    Animated.timing(positionLogo, {
      toValue: { x: 0, y: 10 },
      duration: 1000,
      useNativeDriver: false
    }),
    Animated.timing(positionLogo, {
      toValue: { x: 0, y: 0 },
      duration: 1000,
      useNativeDriver: false
    })
  ]).start(() => {
    animatedLogo(positionLogo);
  });
};

