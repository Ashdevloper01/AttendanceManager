import React from 'react';
import {
  View,
  ImageSourcePropType,
  NavigationScreenProp,
  NavigationRoute,
} from 'react-native';
import UserHeader from '../../components/userHeader';
import styles from './styles';
import {IMAGES} from '../../assets';
import DashboardTiles from '../../components/dashboardTiles';
import {tilesData} from '../../utils/constants/dashboardData';

interface DashboardProps {
  navigation: NavigationScreenProp<NavigationRoute>;
}

interface TileData {
  id: number;
  image: ImageSourcePropType;
  text: string;
  color: string;
}

const Dashboard: React.FC<DashboardProps> = ({navigation}) => {
  const onPressTiles = (id: number) => {
    if (id === 2) {
      navigation.navigate('Attendance');
    }
  };

  return (
    <View style={styles.mainContainer}>
      <UserHeader
        username={'Ratul Sarkar'}
        profileImage={IMAGES.USER}
        containerStyle={styles.userHeader}
      />
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}>
        {tilesData.map((item: TileData) => {
          return (
            <View key={item.id}>
              <DashboardTiles
                iconImage={item.image}
                tileText={item.text}
                boxStyle={{backgroundColor: item.color}}
                onPress={() => onPressTiles(item.id)}
              />
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default Dashboard;
