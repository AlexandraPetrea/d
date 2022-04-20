import 'react-native-gesture-handler';

import * as React from 'react';
import { Button, View, Text, LogBox, ImageBackground, StyleSheet} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../Home';
import HomeScreen from '../HomeScreen';
import NewContact from '../NewContact';
import AddDrug from '../NewDrug';
import UpdateUser from '../UpdateUser';
import ViewUser from '../ViewUser';
import ViewAllDrugs from '../ViewAllDrugs';
import DeleteUser from '../DeleteUser';
import DrugDetails from '../screens/DrugDetails/DrugDetails';
import SplashScreen from '../screens/SplashScreen/SplashScreen'
import SchedulerScreen from '../screens/SchedulerScreen'
import SwipeGesture from '../Swipe'
import LoginScreen from '../screens/Login'
import RegisterScreen from '../screens/Register/Register'
import AlarmScreen from '../screens/Alarm/AlarmScreen'
import AddDrugScreen from '../screens/NewDrug2'
import ModalScreen from '../screens/ModalScreen'
import ViewDrug from '../ViewDrug'
import DeleteDrug from '../DeleteDrug'
import ProductScanRNCamera from '../screens/OpenCamera'
import TimelineScreen from '../screens/TImeline/Timeline'
import ViewAlarms from '../ViewAlarms';
import EditUser from '../EditUser'


LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);
const Stack = createStackNavigator();

const AppContainer = () => {
  return (
    <NavigationContainer >
    
      <Stack.Navigator   
      // screenOptions={{
      //     headerShown: false
      // }}
        initialRouteName="Home"> 
      <Stack.Screen
          name="CameraScreen"
          component={ProductScanRNCamera}
          options={{
            title: 'Camera', //Set Header Title
            headerStyle: { 
                backgroundColor: '#221eeb', //Set Header color
       
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: 'RobotoBold', //Set Header text style
            headerTitleAlign: 'center'
          }}
        />
      <Stack.Screen
          name="TimelineScreen"
          component={TimelineScreen}
          options={{
            title: 'Timeline', //Set Header Title
            headerStyle: { 
                backgroundColor: '#221eeb', //Set Header color
       
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: 'RobotoBold', //Set Header text style
            headerTitleAlign: 'center'
          }}
        />
      <Stack.Screen
          name="ModalScreen"
          component={ModalScreen}
          options={{
            title: 'Home Modal', //Set Header Title
            headerStyle: { 
                backgroundColor: '#221eeb', //Set Header color
       
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: 'RobotoBold', //Set Header text style
            headerTitleAlign: 'center'
          }}
        />
              <Stack.Screen
          name="DeleteDrug"
          component={DeleteDrug}
          options={{
            title: 'Delete Drug', //Set Header Title
            headerStyle: { 
                backgroundColor: '#221eeb', //Set Header color
       
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: 'RobotoBold', //Set Header text style
            headerTitleAlign: 'center'
          }}
        />
              <Stack.Screen
          name="ViewDrug"
          component={ViewDrug}
          options={{
            title: 'View Drug Screen', //Set Header Title
            headerStyle: { 
                backgroundColor: '#221eeb', //Set Header color
       
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: 'RobotoBold', //Set Header text style
            headerTitleAlign: 'center'
          }}
        />
      <Stack.Screen
          name="AlarmScreen"
          component={AlarmScreen}
          options={{
            title: 'Alarm', //Set Header Title
            headerStyle: { 
                backgroundColor: '#221eeb', //Set Header color
       
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: 'RobotoBold', //Set Header text style
            headerTitleAlign: 'center'
          }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: 'Home AAAAA', //Set Header Title
            headerStyle: { 
                backgroundColor: '#221eeb', //Set Header color
       
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: 'RobotoBold', //Set Header text style
            headerTitleAlign: 'center'
          }}
        />
        <Stack.Screen
          name="View"
          component={ViewUser}
          options={{
            title: 'View User', //Set Header Title
            headerStyle: {
              backgroundColor: '#221eeb', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
            headerTitleAlign: 'center'
          }}
        />
        <Stack.Screen
          name="ViewAll"
          component={ViewAllDrugs}
          options={{
            title: 'View Drugs', //Set Header Title
            headerStyle: {
              backgroundColor: '#221eeb', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
            headerTitleAlign: 'center'
          }}
        />
        <Stack.Screen
          name="Update"
          component={UpdateUser}
          options={{
            title: 'Update User', //Set Header Title
            headerStyle: {
              backgroundColor: '#221eeb', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="NewContact"
          component={NewContact}
          options={{
            title: 'New Contact', //Set Header Title
            headerStyle: {
              backgroundColor: '#221eeb', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
            headerTitleAlign: 'center'
          }}
        />
        <Stack.Screen
          name="Delete"
          component={DeleteUser}
          options={{
            title: 'Delete User', //Set Header Title
            headerStyle: {
              backgroundColor: '#221eeb', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="AddDrug"
          component={AddDrug}
          options={{
            title: 'Add Drug', //Set Header Title
            headerStyle: {
              backgroundColor: '#221eeb', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
            headerTitleAlign: 'center'
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home', //Set Header Title
            headerStyle: {
              backgroundColor: '#221eeb', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
            headerTitleAlign: 'center'
          }}
        />
        <Stack.Screen
          name="DrugDetails"
          component={DrugDetails}
          options={{
            title: 'Drug Details', //Set Header Title
            headerStyle: {
              backgroundColor: '#221eeb', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
      <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{
            title: 'Splash Screen', //Set Header Title
            headerStyle: {
              backgroundColor: '#221eeb', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
    <Stack.Screen
          name="SchedulerScreen"
          component={SchedulerScreen}
          options={{
            title: 'Scheduler ', //Set Header Title
            headerStyle: {
              backgroundColor: '#221eeb', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
            <Stack.Screen
          name="SwipeGesture"
          component={SwipeGesture}
          options={{
            title: 'SwipeGesture', //Set Header Title
            headerStyle: {
              backgroundColor: '#221eeb', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
            //gestureEnabled: true,
          }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            title: 'Login Screen', //Set Header Title
            headerStyle: {
              backgroundColor: '#221eeb', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
            headerTitleAlign: 'center'
          }}
        />
      <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            title: 'Register Screen', //Set Header Title
            headerStyle: {
              backgroundColor: '#221eeb', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
            headerTitleAlign: 'center'
          }}
        />
      <Stack.Screen
          name="EditUser"
          component={EditUser}
          options={{
            title: 'Edit User', //Set Header Title
            headerStyle: {
              backgroundColor: '#221eeb', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
            headerTitleAlign: 'center'
          }}
        />
              <Stack.Screen
          name="ViewAlarms"
          component={ViewAlarms}
          options={{
            title: 'Alarms Screen', //Set Header Title
            headerStyle: {
              backgroundColor: '#221eeb', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
            headerTitleAlign: 'center'
          }}
        />
              <Stack.Screen
          name="AddDrugScreen"
          component={AddDrugScreen}
          options={{
            title: 'Add Drug Screen', //Set Header Title
            headerStyle: {
              backgroundColor: '#221eeb', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
            headerTitleAlign: 'center'
          }}
        />
       </Stack.Navigator> 
    </NavigationContainer>
  );
};

export default AppContainer;
