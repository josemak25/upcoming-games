import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useThemeContext } from '../theme';
import Screens from '../screens';
import HomeIcon from '../../assets/icons/home';
import SearchIcon from '../../assets/icons/search';
import BookmarkIcon from '../../assets/icons/bookmark';

const Tab = createMaterialBottomTabNavigator();

export default function BottomNavigator() {
  const { colors } = useThemeContext();

  return (
    <Tab.Navigator
      activeColor={colors.ACTION_BG_COLOR}
      inactiveColor={colors.INACTIVE_BG_COLOR}
      barStyle={{ backgroundColor: colors.WHITE_BG_COLOR }}
      screenOptions={{ title: null }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={Screens.HomeScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <HomeIcon
              fillColor={color}
              isFocused={focused}
              style={{ paddingTop: 35 }}
            />
          )
        }}
      />

      <Tab.Screen
        name="SearchScreen"
        component={Screens.SearchScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <SearchIcon
              fillColor={color}
              isFocused={focused}
              style={{ paddingTop: 35 }}
            />
          )
        }}
      />

      <Tab.Screen
        name="BookmarkScreen"
        component={Screens.BookmarkScreen}
        options={{
          tabBarIcon: ({ color, focused }) => {
            return (
              <BookmarkIcon
                fillColor={color}
                isFocused={focused}
                style={{ paddingTop: 35 }}
              />
            );
          }
        }}
      />
    </Tab.Navigator>
  );
}
