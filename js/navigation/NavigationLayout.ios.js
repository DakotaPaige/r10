import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';

import AboutContainer from '../screens/About';
import ScheduleScreen from '../screens/Schedule';
import FavesScreen from '../screens/Faves';
import SessionScreen from '../screens/Session';
import SpeakerScreen from '../screens/Speaker';
import MapScreen from '../screens/Map';

import colourStyles from '../config/styles';
import { sharedNavigationOptions } from './config';

const aboutStack = createStackNavigator(
  {
    About: AboutContainer
  },
  {
    navigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation),
      title: 'About'
    })
  }
);

const homeStack = createStackNavigator(
  {
    Schedule: ScheduleScreen,
    Session: SessionScreen
  },
  {
    navigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation),
      title: 'Schedule'
    })
  }
);

const mapStack = createStackNavigator(
  {
    Map: MapScreen
  },
  {
    navigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation),
      title: 'Map'
    })
  }
);

export const speakerScreen = createStackNavigator(
  {
    Speaker: SpeakerScreen
  },
  {
    navigationOptions: () => ({
      headerStyle: {
        backgroundColor: 'black',
        borderBottomColor: 'black'
      }
    })
  }
);

const faveStack = createStackNavigator(
  {
    Faves: FavesScreen,
    Session: SessionScreen
  },
  {
    navigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation),
      title: 'Faves'
    })
  }
);

export default createBottomTabNavigator(
  {
    Schedule: homeStack,
    Map: mapStack,
    Faves: faveStack,
    About: aboutStack
  },
  {
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: colourStyles.mediumgray,
      labelStyle: {
        fontSize: 10,
        fontFamily: 'Montserrat'
      },
      style: {
        backgroundColor: 'black'
      }
    },
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Schedule') {
          iconName = `ios-calendar${focused ? '' : '-outline'}`;
        } else if (routeName === 'About') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Faves') {
          iconName = `ios-heart${focused ? '' : '-outline'}`;
        } else if (routeName === 'Map') {
          iconName = `ios-map${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    })
  }
);
