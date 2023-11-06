import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';
import { moderateScale } from '../../utils/dimension';
import { COLOR_PRIMARY, COLOR_PRIMARY_BACK } from '../../utils/colors/colors';
import { fontSize } from '../../utils/fonts/fonts';

type Styles = {
  mainContainer: ViewStyle;
  userInfo: ViewStyle;
  image: ImageStyle;
  userDetails: ViewStyle;
  notification: ViewStyle;
  userName: TextStyle;
  arth: TextStyle;
  notificationIcon: ImageStyle;
  downArrow: ImageStyle;
  arthHoursView: ViewStyle;
};

const styles: Styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userInfo: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  image: {
    width: moderateScale(48),
    height: moderateScale(48),
    borderRadius: moderateScale(50 / 2),
  },
  userDetails: {
    marginLeft: moderateScale(10),
    justifyContent: 'center',
  },
  notification: {
    height: moderateScale(30),
    width: moderateScale(30),
    borderRadius: moderateScale(6),
    backgroundColor: COLOR_PRIMARY_BACK,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userName: {
    marginBottom: moderateScale(5),
    fontSize: fontSize.fontSizeExtraLarge,
    fontWeight: '600',
  },
  arth: {
    fontSize: fontSize.fontSizeSmallRegular,
    fontWeight: '600',
    color: COLOR_PRIMARY,
    opacity: 1,
  },
  notificationIcon: {
    width: moderateScale(15),
    height: moderateScale(15),
  },
  downArrow: {
    marginLeft: moderateScale(5),
    width: moderateScale(11),
    height: moderateScale(11),
  },
  arthHoursView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
