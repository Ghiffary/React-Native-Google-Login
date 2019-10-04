import React from 'react';
import { StyleSheet, Text, View,Platform } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import LoadingScreen from './screens/LoadingScreen';
import OnboardingScreen from './screens/OnboardingScreen'
import RegisterPage from './screens/RegisterPage'
import CheckEmailPage from './screens/CheckEmailPage'
import SetPassword from './screens/SetPassword'
import SetPasswordSuccess from './screens/SetPasswordSuccess'
import MainTabNavigator from './navigation/MainTabNavigator';
import EmailpassScreen from './screens/EmailpassScreen';
import RegisterPage2 from './screens/RegisterPage2';
import Login from './screens/Login';


// import AppNavigator from './navigation/AppNavigator';


import * as firebase from 'firebase';
import { firebaseConfig } from './config';
firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
  render() {
    return (
        <AppNavigator />
      
    );
  }
}

const AppSwitchNavigator = createSwitchNavigator({
  OnboardingScreen: OnboardingScreen,
  LoadingScreen: LoadingScreen,
  LoginScreen: LoginScreen,
  RegisterPage:RegisterPage,
  Main: MainTabNavigator,
  DashboardScreen: DashboardScreen,
  CheckEmailPage : CheckEmailPage,
  SetPassword : SetPassword,
  SetPasswordSuccess : SetPasswordSuccess,
  EmailpassScreen : EmailpassScreen,
  RegisterPage2 : RegisterPage2,
  Login : Login,


});

const AppNavigator = createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

