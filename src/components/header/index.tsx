import React from 'react';
import {View, Text, Image, Pressable, ImageSourcePropType} from 'react-native';
import styles from './styles';
import {ICONS} from '../../assets';

interface HeaderProps {
  leftIcon?: ImageSourcePropType;
  rightIcon?: ImageSourcePropType;
  leftIconStyle?: object;
  rightIconStyle?: object;
  heading: string;
  textStyle?: object;
  onPressLeft?: () => void;
  onPressRight?: () => void;
}

const Header: React.FC<HeaderProps> = props => {
  const {
    leftIcon,
    rightIcon,
    leftIconStyle,
    rightIconStyle,
    heading,
    textStyle,
    onPressLeft,
    onPressRight,
  } = props;

  return (
    <View style={styles.mainContainer}>
      {leftIcon ? (
        <Pressable onPress={onPressLeft}>
          <Image source={leftIcon} style={[styles.leftIcon, leftIconStyle]} />
        </Pressable>
      ) : null}
      <Text style={[styles.text, textStyle]}>{heading}</Text>
      {rightIcon ? (
        <Pressable onPress={onPressRight}>
          <Image
            source={rightIcon}
            style={[styles.rightIcon, rightIconStyle]}
          />
        </Pressable>
      ) : null}
    </View>
  );
};

export default Header;
