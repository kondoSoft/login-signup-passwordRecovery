import React from 'react';
import { Icon } from 'react-native-elements'
import {
  Text,
  View,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/views/home/Home';
import Section1 from './src/views/section/Section1'
import Section2 from './src/views/section/Section2'
import Section3 from './src/views/section/Section3'
import ForGotPassword from './src/views/ForGotPassword/ForGotPassword'
import Login from './src/views/Login/Login'
import SignUp from './src/views/signUp/SingUp'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="sign up" component={SignUp} />
      <Stack.Screen name="forgot password" component={ForGotPassword} />
    </Stack.Navigator>
  );
}

const screenOptions = (route, color) => {
  let iconName;

  switch (route.name) {
    case 'Home':
      iconName = 'home'
      break
    case 'section1':
      iconName = 'book'
      break
    case 'section2':
      iconName = 'person'
      break
    default:
      iconName = 'add'
      break
  }
  return <Icon name={iconName} color={color} size={24} />;
}

const App = () => {


  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => screenOptions(route, color),
        })}>
        <Tab.Screen name="Home" component={MyStack} />
        <Tab.Screen name="section1" component={Section1} />
        <Tab.Screen name="section2" component={Section2} />
        <Tab.Screen name="section3" component={Section3} />
      </Tab.Navigator>
    </NavigationContainer>

  );
};



export default App;
