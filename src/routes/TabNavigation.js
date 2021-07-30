import React from 'react';
import {Platform, Text, View, Image} from 'react-native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RouteNames from './RouteNames';
import ChatScreen from '../screens/Chat.screen';
import HomeScreen from '../screens/Home.screen';

const Tab = createBottomTabNavigator();

const TAB_DATA = {
  [RouteNames.CHAT]: {
    title: 'Chat',
    image: require('../assets/bottom_tabs/ic_message.png'),
  },
  [RouteNames.HOMEPAGE]: {
    title: 'Home',
    image: require('../assets/bottom_tabs/ic_home.png'),
  },
};

const TabNavigator = props => {
  return (
    <Tab.Navigator
        shifting={true}
      initialRouteName={RouteNames.HOMEPAGE}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          const data = TAB_DATA[route.name];
          return (
            <View key={route.key} style={{alignItems: 'center'}}>
              <Image
                source={data.image}
                resizeMode={'contain'}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused
                    ? 'green'
                    : 'grey',
                }}
              />
            </View>
          );
        },
        tabBarLabel: ({focused, color, size}) => {
          const data = TAB_DATA[route.name];
          return (
            <View key={route.key} style={{alignItems: 'center'}}>
              <Text
                style={[
                  {
                    marginBottom: 4,
                    fontSize: 8,
                    color: focused
                      ? 'green'
                      : 'grey',
                  },
                ]}>
                {data.title}
              </Text>
            </View>
          );
        },
      })}
      tabBarOptions={{
        showLabel: true,
        activeTintColor: 'green',
        inactiveTintColor: 'grey',
        style: {backgroundColor: 'white'},
        labelStyle: {
          fontSize: 11,
          fontWeight: 'bold',
          marginBottom: Platform.OS === 'ios' ? 2 : 0,
        },
      }}>
        <Tab.Screen  name={RouteNames.HOMEPAGE} component={HomeScreen} />
      <Tab.Screen name={RouteNames.CHAT} component={ChatScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
