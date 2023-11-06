import { StyleSheet, ViewStyle } from 'react-native';
import { moderateScale } from '../../utils/dimension';

type Styles = {
  mainContainer: ViewStyle;
  userHeader: ViewStyle;
};

const styles: Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: moderateScale(20),
    backgroundColor: 'white',
  },
  userHeader: {
    marginVertical: moderateScale(30),
  },
});

export default styles;
