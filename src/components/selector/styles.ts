import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { moderateScale } from '../../utils/dimension';
import {
  COLOR_CIRCLE_GREY,
  COLOR_SELECTION_GREEN,
  COLOR_SELECTION_GREY,
  COLOR_SELECTION_RED,
  COLOR_SELECTION_YELLOW,
  COLOR_WHITE,
  LIST_FONT_BLACK,
} from '../../utils/colors/colors';
import { fontSize } from '../../utils/fonts/fonts';

type SelectorStyles = {
  selectorView: ViewStyle;
  selectorViewPresent: ViewStyle;
  selectorViewAbsent: ViewStyle;
  selectorViewEarly: ViewStyle;
  selectorViewLeave: ViewStyle;
  selectorText:TextStyle;
  selectedTextStyle:TextStyle;
};

const styles: SelectorStyles = StyleSheet.create({
  selectorView: {
    width: moderateScale(24),
    height: moderateScale(24),
    borderRadius: moderateScale(24 / 2),
    marginRight: 16,
    borderWidth: 1,
    borderColor: COLOR_CIRCLE_GREY,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR_WHITE,
  },
  selectorText:{
    fontSize:fontSize.fontSizeSmallMedium,
    fontWeight:'600',
    color:LIST_FONT_BLACK
  },
  selectedTextStyle :{
    fontSize:fontSize.fontSizeSmallMedium,
    fontWeight:'600',
    color:COLOR_WHITE
  },
  selectorViewPresent: {
    width: moderateScale(24),
    height: moderateScale(24),
    borderRadius: moderateScale(24 / 2),
    marginRight: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR_SELECTION_GREEN,
  },
  selectorViewAbsent: {
    width: moderateScale(24),
    height: moderateScale(24),
    borderRadius: moderateScale(24 / 2),
    marginRight: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR_SELECTION_RED,
  },
  selectorViewEarly: {
    width: moderateScale(24),
    height: moderateScale(24),
    borderRadius: moderateScale(24 / 2),
    marginRight: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR_SELECTION_GREY,
  },
  selectorViewLeave: {
    width: moderateScale(24),
    height: moderateScale(24),
    borderRadius: moderateScale(24 / 2),
    marginRight: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR_SELECTION_YELLOW,
  },
});

export default styles;
