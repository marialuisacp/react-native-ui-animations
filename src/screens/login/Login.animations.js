import { Animated } from 'react-native';

const transitionElementPage = (element) =>
  Animated.timing(element, {
    toValue: { x: 0, y: -40, opacity: 1 }, duration: 200, useNativeDriver: false
  });

export const startPage = (elementsPage) => {
  const sequence = [];
  console.log(Object.keys(elementsPage));
  Object.keys(elementsPage).map((item) => sequence.push(transitionElementPage(elementsPage[item])));
  Animated.sequence(sequence).start();
};