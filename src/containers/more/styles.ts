import {StyleSheet} from 'react-native';
import { moderateScale } from '../../utils/dimension';

const styles = StyleSheet.create({
  mainContainer : {
    flex:1,
    paddingHorizontal:moderateScale(20),
    alignItems:'center',
    justifyContent:'center'
  },
})

export default styles;