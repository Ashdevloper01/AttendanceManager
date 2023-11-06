import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './styles';

interface DashboardTilesProps {
  boxStyle?: object;
  tileInfoView?: object;
  iconStyles?: object;
  tilesTextStyle?: object;
  tileText: string;
  iconImage: any;
  onPress: () => void;
}

const DashboardTiles: React.FC<DashboardTilesProps> = props => {
  const {
    boxStyle,
    tileInfoView,
    iconStyles,
    tilesTextStyle,
    tileText,
    iconImage,
    onPress,
  } = props;

  return (
    <Pressable style={[styles.box, boxStyle]} onPress={onPress}>
      <View style={[styles.tileInfo, tileInfoView]}>
        <Image
          source={iconImage}
          resizeMode="contain"
          style={[styles.iconStyle, iconStyles]}
        />
        <Text style={[styles.tilesText, tilesTextStyle]}>{tileText}</Text>
      </View>
    </Pressable>
  );
};

export default DashboardTiles;
