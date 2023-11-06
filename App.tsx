/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from './src/containers/dashboard';
import Attendance from './src/containers/attendance';
import TabIcon from './src/components/tabBarIcon';
import {ICONS} from './src/assets';
import Documentation from './src/containers/documentation';
import Housekeeping from './src/containers/housekeeping';
import SettingsPage from './src/containers/settings';
import More from './src/containers/more';
import {moderateScale} from './src/utils/dimension';
import {COLOR_PRIMARY} from './src/utils/colors/colors';

function App() {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={MyTabs} />
          <Stack.Screen name="Attendance" component={Attendance} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLOR_PRIMARY,
        tabBarStyle: {
          marginHorizontal: moderateScale(20),
          bottom: moderateScale(10),
          height: moderateScale(60),
          alignItems: 'center',
          borderRadius: moderateScale(320),
          shadowColor: '#171717',
          shadowOffset: {width: 1, height: 4},
          shadowOpacity: 0.2,
          shadowRadius: 3,
          position: 'absolute',
          elevation: 20,
        },
        tabBarLabelStyle: {bottom: moderateScale(8)},
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon
              icon={ICONS.PLANNING}
              iconStyle={{tintColor: focused ? COLOR_PRIMARY : 'grey'}}
            />
          ),
        }}
        name="Planning"
        component={Dashboard}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon
              icon={ICONS.DOCUMENTATION}
              iconStyle={{tintColor: focused ? COLOR_PRIMARY : 'grey'}}
            />
          ),
        }}
        name="Documentation"
        component={Documentation}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon
              icon={ICONS.HOUSEKEEPING}
              iconStyle={{
                tintColor: focused ? COLOR_PRIMARY : 'grey',
              }}
            />
          ),
        }}
        name="Housekeeping"
        component={Housekeeping}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon
              icon={ICONS.SETTINGS}
              iconStyle={{tintColor: focused ? COLOR_PRIMARY : 'grey'}}
            />
          ),
        }}
        name="Settings"
        component={SettingsPage}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon
              icon={ICONS.MORE}
              iconStyle={{tintColor: focused ? COLOR_PRIMARY : 'grey'}}
            />
          ),
        }}
        name="More"
        component={More}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
  },
});

export default App;
