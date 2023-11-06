import React from 'react';
import {View, Image, ImageSourcePropType, ImageStyle} from 'react-native';
import styles from './styles';

interface TabIconProps {
  icon: ImageSourcePropType;
  iconStyle: ImageStyle;
}

const TabIcon: React.FC<TabIconProps> = props => {
  const {icon, iconStyle} = props;

  return (
    <View>
      <Image source={icon} style={[styles.icon, iconStyle]} />
    </View>
  );
};

export default TabIcon;
