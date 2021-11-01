import React from 'react';
import { Icon } from 'react-native-elements'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ThemeProvider } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'


import Home from './src/views/mainStack/home/Home';
import Section1 from './src/views/mainStack/section/Section1'
import Section2 from './src/views/mainStack/section/Section2'
import Section3 from './src/views/mainStack/section/Section3'
import ForGotPassword from './src/views/loginStack/ForGotPassword/ForGotPassword'
import Login from './src/views/loginStack/Login/Login'
import SignUp from './src/views/loginStack/signUp/SignUp'

import colors from './colors.json'

const theme = {
  Button: {
  },
  Input: {
    color: colors.MAINTEXT
  },
  Text:{
    style: {
      color: colors.MAINTEXT
    }
  }
}
// console.log ('>> ',  DefaultTheme)
const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.MAINTEXT,
    background: colors.MAIN
  },
  headerStyle: {
    background: colors.MAIN
  }
};

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const LoginStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ route }) => ({
          headerTransparent: true,
          headerTintColor: colors.MAINTEXT
        })}>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="sign up" component={SignUp} />
        <Stack.Screen name="forgot password" component={ForGotPassword} />
      </Stack.Navigator>
    </NavigationContainer>
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

const MainStack = () => {
  return (
    <NavigationContainer theme={navTheme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => screenOptions(route, color),
          headerTransparent: true,
          headerTintColor: colors.MAINTEXT,
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="section1" component={Section1} />
        <Tab.Screen name="section2" component={Section2} />
        <Tab.Screen name="section3" component={Section3} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  const user = false
  const Stack = user ? MainStack : LoginStack
  return (
    <ThemeProvider theme={theme}>
        <Stack/>
    </ThemeProvider>
  )
}



export default App;
