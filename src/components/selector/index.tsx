import {Text, Pressable, ViewStyle, TextStyle} from 'react-native';
import styles from './styles';
import React from 'react';

interface SelectorProps {
  text: string;
  onPress: () => void;
  isSelected: string | null;
}

const Selector: React.FC<SelectorProps> = props => {
  const {text, onPress, isSelected} = props;

  const selectedBackgroundColor = () => {
    if (isSelected) {
      if (isSelected === 'A') {
        return styles.selectorViewAbsent;
      } else if (isSelected === 'P') {
        return styles.selectorViewPresent;
      } else if (isSelected === 'E') {
        return styles.selectorViewEarly;
      } else if (isSelected === 'L') {
        return styles.selectorViewLeave;
      }
    }
    return styles.selectorView;
  };

  const selectedTextColor = () => {
    if (isSelected) {
      return styles.selectedTextStyle;
    }
    return styles.selectorText;
  };

  return (
    <Pressable
      style={{...(selectedBackgroundColor() as ViewStyle)}}
      onPress={onPress}>
      <Text style={{...(selectedTextColor() as TextStyle)}}>{text}</Text>
    </Pressable>
  );
};

export default Selector;
