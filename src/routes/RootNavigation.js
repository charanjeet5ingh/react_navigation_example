import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import RouteNames from './RouteNames';
import TabNavigator from './TabNavigation';
import ConversationScreen from '../screens/Conversation.screen';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

const Stack = createStackNavigator();

function getHeaderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';

  switch (routeName) {
    case RouteNames.CHAT:
      return 'Chat';
    case RouteNames.HOMEPAGE:
      return 'HOME';
  }
}

const AuthenticatedRoutes = ({navigation}) => (
  <Stack.Navigator initialRouteName={RouteNames.HOMEPAGE}>
    <Stack.Screen
      options={({route}) => ({
        headerTitle: getHeaderTitle(route),
      })}
      name={RouteNames.HOMEPAGE}
      component={TabNavigator}
    />
    <Stack.Screen
      name={RouteNames.CONVERSATION}
      component={ConversationScreen}
    />
  </Stack.Navigator>
);

export default AuthenticatedRoutes;
