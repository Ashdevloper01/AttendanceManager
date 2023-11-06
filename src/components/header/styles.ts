import { StyleSheet, ViewStyle, ImageStyle, TextStyle } from 'react-native';
import { moderateScale } from '../../utils/dimension';
import { COLOR_BLACK } from '../../utils/colors/colors';
import { fontSize } from '../../utils/fonts/fonts';

type Styles = {
  mainContainer: ViewStyle;
  leftIcon: ImageStyle;
  rightIcon: ImageStyle;
  text: TextStyle;
};

const styles: Styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop:moderateScale(16)
    
  },
  leftIcon: {
    width: moderateScale(18),
    height: moderateScale(15),
  },
  rightIcon: {
    width: moderateScale(18),
    height: moderateScale(18),
  },
  text: {
    fontWeight: '600',
    fontSize: fontSize.fontSizeExtraXXLarge,
    color: COLOR_BLACK,
  },
});

export default styles;

