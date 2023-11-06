import React from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  ImageSourcePropType,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from 'react-native';
import {ICONS, IMAGES} from '../../assets';
import styles from './styles';

interface UserHeaderProps {
  containerStyle?: ViewStyle;
  userViewStyle?: ViewStyle;
  userIconStyle?: ImageStyle;
  userDetaliViewStyle?: ViewStyle;
  userNameStyle?: TextStyle;
  arthViewStyle?: ViewStyle;
  arthTextStyle?: TextStyle;
  downArrowStyle?: ImageStyle;
  notificationViewStyle?: ViewStyle;
  notificationStyle?: ImageStyle;
  username: string;
  profileImage: ImageSourcePropType;
}

const UserHeader: React.FC<UserHeaderProps> = props => {
  const {
    containerStyle,
    userViewStyle,
    userIconStyle,
    userDetaliViewStyle,
    userNameStyle,
    arthViewStyle,
    arthTextStyle,
    downArrowStyle,
    notificationViewStyle,
    notificationStyle,
    username,
    profileImage,
  } = props;

  return (
    <View style={[styles.mainContainer, containerStyle]}>
      <View style={[styles.userInfo, userViewStyle]}>
        <Image source={profileImage} style={[styles.image, userIconStyle]} />
        <View style={[styles.userDetails, userDetaliViewStyle]}>
          <Text style={[styles.userName, userNameStyle]}>{username}</Text>
          <View style={[styles.arthHoursView, arthViewStyle]}>
            <Text style={[styles.arth, arthTextStyle]}>Arth Hours - Dhara</Text>
            <Image
              source={ICONS.DOWNARROW}
              style={[styles.downArrow, downArrowStyle]}
            />
          </View>
        </View>
      </View>
      <Pressable style={[styles.notification, notificationViewStyle]}>
        <Image
          source={ICONS.NOTIFICATIONS}
          style={[styles.notificationIcon, notificationStyle]}
        />
      </Pressable>
    </View>
  );
};

export default UserHeader;
