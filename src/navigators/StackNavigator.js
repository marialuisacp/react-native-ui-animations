import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { routes, initialRoute } from './Routes';

import { TouchableOpacity } from 'react-native';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Icon from '../components/icon/Icon';
import { colors } from '../assets/Colors';

const Stack = createStackNavigator();

const screeMenuIcon = ({ navigation }) => (
  <TouchableOpacity onPress={() => openDrawerMenu(navigation)}>
    <Icon
      icon={faBars}
      textColor={colors.BLUE}
    />
  </TouchableOpacity>
);

export const StackNavigator = ({ navigation }) => {

  routes.map((item) => {
    if (!item.options)
      item.options = {};
    if (item && item.showMenuHeader)
      item.options.headerLeft = () => screeMenuIcon({ navigation })
  });

  return (
    <Stack.Navigator initialRouteName={initialRoute}>
      {
        routes.map((screen) => (
          <Stack.Screen
            key={screen.name}
            navigation={navigation}
            {...screen} />
        ))
      }
    </Stack.Navigator>
  );
};

const openDrawerMenu = (navigation) => {
  console.log(navigation);
  navigation.openDrawer();
};