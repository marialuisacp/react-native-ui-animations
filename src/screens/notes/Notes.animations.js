import { Animated } from 'react-native';

const animationElementNoteOpacity = (element) =>
  Animated.timing(element.opacity, {
    toValue: 1, duration: 400, useNativeDriver: false
  });

const animationElementNotePosition = (element) =>
  Animated.timing(element.position, {
    toValue: { y: -10, x: 0 },
    duration: 400, useNativeDriver: false
  });

const loadingNote = (element) => Animated.parallel([
  animationElementNoteOpacity(element),
  animationElementNotePosition(element)
]);

export const startPage = (elements) => {
  const sequence = [];

  elements && elements.map((item) => {
    sequence.push(loadingNote(item));
  });

  Animated.sequence(sequence).start();
};


