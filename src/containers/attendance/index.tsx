import React, {useState} from 'react';
import {
  View,
  Text,
  Pressable,
  Image,
  FlatList,
  ImageSourcePropType,
  Modal,
  Platform,
} from 'react-native';
import styles from './styles';
import Header from '../../components/header';
import {ICONS} from '../../assets';
import {attendanceData} from '../../utils/constants/attendancedata';
import StudentAttendance from '../../components/studentAttendance';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import {COLOR_PRIMARY} from '../../utils/colors/colors';
import {NavigationContainerProps} from '@react-navigation/native';
import {moderateScale} from '../../utils/dimension';

interface AttendanceData {
  id: number;
  image: ImageSourcePropType;
  name: string;
  surname: string;
}

interface Attendance {
  AttendanceData: object;
  showCalender: boolean;
  navigation: NavigationContainerProps;
}

const Attendance: React.FC<Attendance> = ({navigation}) => {
  const [showCalender, setShowCalender] = useState<Boolean>(false);
  const [date, setDate] = useState<string>(new Date().toDateString());
  const [shownDate, setShownDate] = useState<string>(
    `${new Date()
      .toDateString()
      .slice(4, 7)} ${new Date().getDate()}, ${new Date().getFullYear()}`,
  );

  const onChange = (
    _event: DateTimePickerEvent,
    selectedDate: Date | undefined,
  ) => {
    const currentMonth = selectedDate?.toDateString().slice(4, 7);
    const currentNewDate = selectedDate?.getDate();
    const currentDate = selectedDate?.toDateString();
    const currentYear = selectedDate?.getFullYear();
    if (
      currentDate === undefined ||
      currentMonth === undefined ||
      currentYear === undefined
    ) {
      return;
    }
    const formatedDate = `${currentMonth} ${currentNewDate}, ${currentYear}`;
    setShownDate(formatedDate);
    Platform.OS === 'ios' ? setDate(currentDate) : null;
    setShowCalender(false);
  };

  const onCancel = () => {
    setShownDate(
      `${new Date()
        .toDateString()
        .slice(4, 7)} ${new Date().getDate()}, ${new Date().getFullYear()}`,
    );
    Platform.OS === 'ios' ? setDate(new Date().toDateString()) : null;
    setShowCalender(false);
  };

  const renderItem = ({item}: {item: AttendanceData}) => {
    return (
      <StudentAttendance
        key={item.id}
        profileImage={item.image}
        name={item.name}
        surname={item.surname}
      />
    );
  };

  const onPress = () => {
    setShowCalender(true);
  };

  return (
    <View style={styles.mainContainer}>
      <Header
        leftIcon={ICONS.ARROWLEFT}
        rightIcon={ICONS.SEARCH}
        heading={'Attendance'}
        onPressLeft={() => navigation.goBack()}
      />
      <View style={styles.students}>
        <View style={styles.dailyAttendanceView}>
          <View>
            <View style={styles.calendarView}>
              <Text style={styles.arthHours}>ArthHours - Dhara</Text>
              <Image source={ICONS.DOWNARROW} style={styles.downArrow} />
            </View>
            <View style={styles.calendarButtonView}>
              <Pressable style={styles.leftArrowBox}>
                <Image source={ICONS.LEFTARROW} />
              </Pressable>
              <Pressable style={styles.dateBox} onPress={() => onPress()}>
                <Text style={styles.date}>{`${shownDate}`}</Text>
              </Pressable>
              <Pressable style={styles.rightArrowBox}>
                <Image source={ICONS.RIGHTARROW} />
              </Pressable>
            </View>
          </View>
          <Pressable style={styles.dailyAttendance}>
            <Text style={styles.dailyAttendanceText}>Daily Attendance</Text>
            <Image source={ICONS.DOWNARROW} style={styles.downArrowWhite} />
          </Pressable>
        </View>
        <View style={styles.studentsHeader}>
          <Text style={styles.studentsCount}>All Students(120)</Text>
          <Pressable style={styles.markAllPresent}>
            <Text style={styles.markAllText}>Mark all present</Text>
            <Image source={ICONS.CIRCLECHECK} style={styles.circleCheck} />
          </Pressable>
        </View>
        <View style={styles.studentList}>
          <FlatList
            data={attendanceData}
            contentContainerStyle={{
              paddingBottom: moderateScale(230),
            }}
            showsVerticalScrollIndicator={false}
            renderItem={renderItem}
          />
        </View>
      </View>
      {Platform.OS === 'ios' ? (
        <Modal
          visible={showCalender}
          animationType="slide"
          onRequestClose={() => setShowCalender(false)}
          transparent={true}>
          <View style={styles.datePicker}>
            <DateTimePicker
              testID="dateTimePicker"
              value={date ? new Date(date) : new Date()}
              mode={'date'}
              onChange={onChange}
              display="inline"
              accentColor={COLOR_PRIMARY}
            />
            <View style={styles.modalButtonsView}>
              <Pressable
                style={styles.calenderButtons}
                onPress={() => onCancel()}>
                <Text style={styles.modalText}>CANCEL</Text>
              </Pressable>
              <Pressable
                style={styles.calenderButtons}
                onPress={() => setShowCalender(false)}>
                <Text style={styles.modalText}>OK</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      ) : showCalender ? (
        <DateTimePicker
          testID="dateTimePicker"
          value={new Date()}
          mode={'date'}
          onChange={onChange}
        />
      ) : null}
    </View>
  );
};

export default Attendance;
