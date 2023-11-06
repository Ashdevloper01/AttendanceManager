import { StyleSheet, ImageStyle } from 'react-native';
import { moderateScale } from '../../utils/dimension';

type Styles = {
  icon: ImageStyle;
};

const styles: Styles = StyleSheet.create({
  icon: {
    width: moderateScale(17),
    height: moderateScale(17),
    resizeMode: 'contain',
  },
});

export default styles;
