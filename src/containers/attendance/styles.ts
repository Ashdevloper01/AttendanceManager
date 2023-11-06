import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';
import { moderateScale } from '../../utils/dimension';
import { COLOR_BLACK, COLOR_PRIMARY, COLOR_WHITE } from '../../utils/colors/colors';
import { fontSize } from '../../utils/fonts/fonts';

type Styles = {
  mainContainer: ViewStyle;
  students: ViewStyle;
  studentsHeader: ViewStyle;
  studentsCount: TextStyle;
  markAllPresent: ViewStyle;
  markAllText: TextStyle;
  circleCheck: ImageStyle;
  studentList: ViewStyle;
  downArrow: ImageStyle;
  rightArrowBox: ViewStyle;
  leftArrowBox: ViewStyle;
  dateBox: ViewStyle;
  dailyAttendanceView:ViewStyle;
  calendarView:ViewStyle;
  arthHours:TextStyle;
  calendarButtonView:ViewStyle;
  dailyAttendance:ViewStyle;
  dailyAttendanceText:TextStyle;
  downArrowWhite:ImageStyle;
  datePicker:ViewStyle;
  calenderButtons:ViewStyle;
  date:TextStyle;
  modalText:TextStyle;
  modalButtonsView:ViewStyle;
};

const styles: Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: moderateScale(20),
    backgroundColor: 'white',
  },
  students: {
    marginBottom: moderateScale(23),
  },
  studentsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: moderateScale(23),
  },
  studentsCount: {
    fontSize: fontSize.fontSizeLarge,
    fontWeight: '600',
    color:COLOR_BLACK
  },
  markAllPresent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  markAllText: {
    fontSize: fontSize.fontSizeSmallMedium,
    fontWeight: '600',
    color: COLOR_PRIMARY,
  },
  circleCheck: {
    marginLeft: moderateScale(5),
  },
  studentList: {
    marginVertical: moderateScale(23),
  },
  downArrow: {
    marginLeft: moderateScale(8),
    width: moderateScale(11),
    height: moderateScale(11),
  },
  dailyAttendanceView:{
    flexDirection: 'row',
    justifyContent:'space-between',
    marginTop: 26,
  },
  calendarView:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  calendarButtonView:{
    marginTop: moderateScale(5), 
    flexDirection: 'row'
  },
  arthHours:{
    fontSize: fontSize.fontSizeLarge, 
    fontWeight: '600',
    color:COLOR_BLACK
  },
  rightArrowBox: {
    height: moderateScale(20),
    width: moderateScale(20),
    marginLeft: moderateScale(2),
    backgroundColor: COLOR_PRIMARY,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftArrowBox: {
    height: moderateScale(20),
    width: moderateScale(20),
    marginLeft: moderateScale(2),
    backgroundColor: COLOR_PRIMARY,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateBox: {
    height: moderateScale(20),
    width: moderateScale(77),
    marginLeft: moderateScale(2),
    backgroundColor: COLOR_PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dailyAttendance:{
    flexDirection:'row',
    backgroundColor:COLOR_PRIMARY,
    alignItems:'center',
    justifyContent:'center',
    width:moderateScale(150),
    height:moderateScale(40),
    borderRadius:moderateScale(10),
    shadowColor: COLOR_BLACK,
    shadowOffset: {width: 1, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 20
  },
  dailyAttendanceText:{
    color:COLOR_WHITE,
    fontSize:fontSize.fontSizeSmall,
    fontWeight:'500'
  },
  downArrowWhite:{
    tintColor:COLOR_WHITE,
    width:moderateScale(10),
    height:moderateScale(10),
    alignSelf:'center',
    marginLeft:moderateScale(5)
  },
  datePicker: {
    height: moderateScale(350),
    width: moderateScale(250),
    backgroundColor:COLOR_WHITE,
    // position:'absolute',
    top:moderateScale(170),
    left:moderateScale(16),
  },
  calenderButtons:{
    marginRight:moderateScale(30),
  },
  date:{
    fontSize:fontSize.fontSizeExtraSmall,
    fontWeight:'600',
    color:COLOR_WHITE
  },
  modalText:{
    color:COLOR_PRIMARY,
    fontSize:fontSize.fontSizeSmallRegular,
    fontWeight:'500'
  },
  modalButtonsView:{
    flexDirection: 'row', 
    justifyContent: 'flex-end',
  }
});

export default styles;
