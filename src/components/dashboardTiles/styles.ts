import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { moderateScale } from '../../utils/dimension';
import { fontSize } from '../../utils/fonts/fonts';
import { COLOR_BLACK_100 } from '../../utils/colors/colors';

type Styles = {
  box: ViewStyle;
  iconStyle: ImageStyle;
  tilesText: TextStyle;
  tileInfo: ViewStyle;
};

const styles: Styles = StyleSheet.create({
  box: {
    height: moderateScale(140),
    width: moderateScale(160),
    borderRadius: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: moderateScale(10),
  },
  iconStyle: {
    height: moderateScale(50),
    width: moderateScale(50),
    marginBottom: moderateScale(15),
  },
  tilesText: {
    fontSize: fontSize.fontSizeMedium,
    fontWeight: '600',
    color:COLOR_BLACK_100
  },
  tileInfo: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
