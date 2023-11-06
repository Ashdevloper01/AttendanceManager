import React, {useState} from 'react';
import {View, Text, Image, Pressable, ImageSourcePropType} from 'react-native';
import styles from './styles';
import {ICONS} from '../../assets';
import Selector from '../selector';
import {attendance} from '../../utils/constants/attendancedata';

interface StudentAttendanceProps {
  containerStyle?: object;
  userViewStyle?: object;
  userIconStyle?: object;
  userDetailViewStyle?: object;
  nameStyle?: object;
  surnameStyle?: object;
  listIconStyle?: object;
  surname: string;
  name: string;
  profileImage: ImageSourcePropType;
  listIconViewStyle?: object;
  editIconViewStyle?: object;
}

const StudentAttendance: React.FC<StudentAttendanceProps> = props => {
  const {
    containerStyle,
    userViewStyle,
    userIconStyle,
    userDetailViewStyle,
    nameStyle,
    surnameStyle,
    listIconStyle,
    surname,
    name,
    profileImage,
    listIconViewStyle,
    editIconViewStyle,
  } = props;

  const [data, setData] = useState(attendance);
  const [isEdit, setIsEdit] = useState(false);

  const onSelection = (id: string) => {
    const selectedData = data.map(item => {
      if (item.id === id) {
        return {...item, isSelected: true};
      } else {
        return {...item, isSelected: false};
      }
    });
    setData(selectedData);
    setIsEdit(true);
  };

  const onEdit = () => {
    setData(attendance);
    setIsEdit(false);
  };

  return (
    <View style={[styles.mainContainer, containerStyle]}>
      <View style={[styles.userInfo, userViewStyle]}>
        <Image source={profileImage} style={[styles.image, userIconStyle]} />
        <View style={[styles.userDetails, userDetailViewStyle]}>
          <Text style={[styles.name, nameStyle]}>{name}</Text>
          <Text style={[styles.surname, surnameStyle]}>{surname}</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={{flexDirection: 'row'}}>
          {data.map(item => {
            return item.isSelected ? (
              <Selector
                key={item?.id}
                text={item?.text}
                onPress={() => onSelection(item?.id)}
                isSelected={isEdit ? item?.text : null}
              />
            ) : null;
          })}
        </View>
        {isEdit ? (
          <Pressable
            style={[styles.editIconView, editIconViewStyle]}
            onPress={() => {
              onEdit();
            }}>
            <Image
              source={ICONS.EDIT}
              style={[styles.listIcon, listIconStyle]}
            />
          </Pressable>
        ) : null}
        <Pressable style={[styles.listIconView, listIconViewStyle]}>
          <Image source={ICONS.LIST} style={[styles.listIcon, listIconStyle]} />
        </Pressable>
      </View>
    </View>
  );
};

export default StudentAttendance;
