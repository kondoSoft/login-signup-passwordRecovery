import React from 'react';
import { Icon } from 'react-native-elements'
import {
  Text,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './src/views/Login/Login';
import Home from './src/views/home/Home';
import ForGotPassword from './src/views/ForGotPassword/ForGotPassword'

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const App = () => {


  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Login} />
        <Tab.Screen name="Settings" component={Home} />
      </Tab.Navigator>
    </NavigationContainer>

  );
};



export default App;
