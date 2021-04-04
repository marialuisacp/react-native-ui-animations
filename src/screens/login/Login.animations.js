import { Animated } from 'react-native';

const animationElementOpacity = (element) =>
  Animated.timing(element.opacity, {
    toValue: 1, duration: 180, useNativeDriver: false
  });

const animationElementPosition = (element) =>
  Animated.timing(element.position, {
    toValue: { y: -20, x: 0 }, duration: 180, useNativeDriver: false
  });

export const startPage = (elementsPage) => {
  let sequence = [Animated.delay(1000)];
  Object.keys(elementsPage).map((item) => {
    const itemSequence = [
      animationElementOpacity(elementsPage[item]),
      animationElementPosition(elementsPage[item])
    ];
    sequence.push(Animated.sequence(itemSequence));
  });
  Animated.sequence(sequence).start();
};
