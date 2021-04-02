import React from 'react';
import { View } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

import { StackNavigator } from './StackNavigator';
const Drawer = createDrawerNavigator();
import { routes } from './Routes';

export const customItems = (props) => {
  const {
    navigation: { navigate },
  } = props;

  return (
    <DrawerContentScrollView {...props}>
      <View style={{ flexGrow: 2 }}>
        {routes.map((screen) => (
          <DrawerItem
            key={screen.name}
            label={screen.name}
            hasBottomDivider
            onPress={() => navigate(screen.name)}
          />
        ))}
      </View>
    </DrawerContentScrollView>
  );
};

export const DrawerNavigator = () => (
  <Drawer.Navigator drawerContent={customItems}>
    <Drawer.Screen name='AppScreens' component={StackNavigator} />
  </Drawer.Navigator>
);