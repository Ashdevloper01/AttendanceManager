import { StyleSheet, ViewStyle, ImageStyle, TextStyle } from 'react-native';
import { moderateScale } from '../../utils/dimension';
import { COLOR_PRIMARY_BACK, LIST_FONT_BLACK, LIST_FONT_GREY } from '../../utils/colors/colors';
import { fontSize } from '../../utils/fonts/fonts';

type Styles = {
  mainContainer: ViewStyle;
  userInfo: ViewStyle;
  image: ImageStyle;
  userDetails: ViewStyle;
  listIconView: ViewStyle;
  editIconView: ViewStyle;
  name: TextStyle;
  surname: TextStyle;
  listIcon: ImageStyle;
};

const styles: Styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: moderateScale(28),
  },
  userInfo: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  image: {
    width: moderateScale(30),
    height: moderateScale(30),
    borderRadius: moderateScale(30 / 2),
  },
  userDetails: {
    marginLeft: moderateScale(10),
    justifyContent: 'center',
  },
  listIconView: {
    height: moderateScale(24),
    width: moderateScale(24),
    borderRadius: moderateScale(6),
    backgroundColor: COLOR_PRIMARY_BACK,
    alignItems: 'center',
    justifyContent: 'center',
  },
  editIconView: {
    height: moderateScale(24),
    width: moderateScale(24),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: moderateScale(20),
  },
  name: {
    marginBottom: moderateScale(2),
    fontSize: fontSize.fontSizeSmallRegular,
    fontWeight: '600',
    color: LIST_FONT_BLACK,
  },
  surname: {
    fontSize: fontSize.fontSizeExtraSmall,
    fontWeight: '500',
    color: LIST_FONT_GREY,
  },
  listIcon: {
    width: moderateScale(10),
    height: moderateScale(10),
  },
});

export default styles;
