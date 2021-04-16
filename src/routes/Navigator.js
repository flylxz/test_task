import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {createIonicons} from '../utils';
import {Accounts} from '../screens';
import {Dummy} from '../components';
import {COLORS} from '../constants/theme';

const Tab = createBottomTabNavigator();

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Accounts"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Grid') {
              iconName = focused ? 'grid' : 'grid-outline';
            } else if (route.name === 'Accounts') {
              iconName = focused ? 'wallet' : 'wallet-outline';
            } else if (route.name === 'Person') {
              iconName = focused ? 'person' : 'person-outline';
            }

            return createIonicons(iconName, size, color);
          },
        })}
        tabBarOptions={{
          activeTintColor: COLORS.columbia,
          inactiveTintColor: COLORS.ghost,
          labelStyle: {
            fontSize: 12,
            margin: 0,
            padding: 0,
          },
        }}>
        <Tab.Screen
          name="Grid"
          component={Dummy}
          options={{showLabel: false}}
        />
        <Tab.Screen name="Accounts" component={Accounts} />
        <Tab.Screen name="Person" component={Dummy} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
