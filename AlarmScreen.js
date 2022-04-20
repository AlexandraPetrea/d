import React, { Component } from 'react';
import { AppState, StyleSheet, ScrollView, View, Text, TextInput, Image, TouchableOpacity, KeyboardAvoidingView,
    ImageBackground,
Dimensions } from 'react-native';
import FirstAlarm from './FirstAlarm';
import RNPickerSelect from "react-native-picker-select";
import Daily from './Daily'
import DaysSpecific from './DaysSpecific'
import DaysInterval from './DaysInterval'
import DayPicker  from '../../components/DayPicker';
import Mybutton from '../../components/Mybutton';
import TimePicker from '../../components/TimePicker';
import RNCalendarEvents from "react-native-calendar-events";
import { timing } from 'react-native-reanimated';
import PushNotification from 'react-native-push-notification';
import PushController from '../Notifications/NotificationController';
// //packages
// import AsyncStorage from '@react-native-community/async-storage';

//components


const {width, height} = Dimensions.get('window');

class AlarmScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            page: 0, //0: name, 1: username, 2: password
            frequency: "",
        }
        this.sendNotification = this.sendNotification.bind(this);
        this.handleAppStateChange = this.handleAppStateChange.bind(this);
    }  

    componentDidMount() {
        AppState.addEventListener('change', this.handleAppStateChange);
      };
      
      componentWillUnmount() {
        AppState.removeEventListener('change', this.handleAppStateChange);
      };
      
      // This will notify the user in 3 seconds after sending the app to the 
      // background (like after pressing the home button or switching apps)
      handleAppStateChange(appState) {
        if (appState === 'background') {
          // Schedule a notification
          console.log("handle app")
          PushNotification.localNotification({
            channelId: 'channel-id',
            message: 'Scheduled delay notification message', // (required)
            date: new Date(Date.now() + (3 * 1000)) // in 3 secs
          });
        }
      };
    
    sendNotification() {
        console.log("send")
        PushNotification.getChannels(function (channel_ids) {
            console.log(channel_ids); // ['channel_id_1']
          });
        PushNotification.localNotificationSchedule({
          channelId: 'channel-id',
          message: 'You pushed the notification button!',
          date: new Date(Date.now() + (3 * 1000))
        });

      };

    //navigate to login page
    onPressNavigateLogin = () => {
        this.props.navigation.navigate("LoginContainer");
    }

    //go back home
    onPressHome = () => {
        this.props.navigation.navigate("Home");
    }

    //when pressed return on keyboard
    onPressNext = () => {
        this.setState({page: this.state.page+1});
    }

    //set lastname on keyboard change
    setFrequency = (frequency) => {
        this.setState({frequency: frequency});
    }

    //navigate to home if valid
    onPressRegister = () => {
        var data = {
            username: this.state.username,
            password: this.state.password,
          }
          var request = new Request('http://10.0.2.2:5000/api/register', {
            method: 'POST',
            headers: new Headers({ 'Content-Type' : 'application/json', 'Accept': 'application/json' }),
            body: JSON.stringify(data)
          });
          fetch(request).then((response) => {
            response.json().then((data) => {
                // await AsyncStorage.setItem('userID', data.userID.toString()); //store userID globally
                this.props.navigation.navigate("HomeScreen");
            });
          }).catch(function(err){
            console.log(err);
        });
    }

    render(){
        return(
            <ScrollView>
            <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
                <ImageBackground    
                     style={styles.imageContainer}
                     source={require("../../../assets/background.jpg")} />
                <View style={styles.overlay}>
                    {/* <View style={styles.title}>
                        <Text style={styles.pink}>Pill</Text>
                         <Text style={styles.purple}>Reminder</Text>
                    </View> */}
            <View style = {styles.titleView}>
                    <Text style = {styles.titleText}>Choose frequency </Text>
            </View>

             <TouchableOpacity onPress = {this.sendNotification}>
                            <Text style = {styles.backText}>Press here</Text>
                        </TouchableOpacity>
            <View style={styles.picker}>
             <RNPickerSelect
                 onValueChange={(value) => {this.setFrequency(value), console.log(value)}}
                 items={[
                     { label: "Daily", value: "daily" },
                     { label: "Specific Days", value: "daysSpecific" },
                     { label: "Days Interval", value: "daysInterval"},
                     { label: "Sometimes", value: "sometimes"}
                  ]}
             />
         </View>
                    <View style = {styles.inputView}>
                        {this.state.frequency === "daily" ?
                        <Daily> </Daily> :
                        this.state.frequency === "daysSpecific" ?
                        <DaysSpecific> </DaysSpecific> :
                        this.state.frequency === "daysInterval" ?
                        <DaysInterval> </DaysInterval>:
                        this.state.frequency === "sometimes" ? 
                        <Text style={styles.alarmText}> No reminder can be set if the drug is taken only sometimes  </Text> : null }

                    </View>
                    <View style = {styles.backView}>
                        <TouchableOpacity onPress = {this.onPressHome}>
                            <Text style = {styles.backText}>Go Back</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        width,
        height,
        resizeMode: 'contain',
        // justifyContent: 'center',
        alignItems: 'center',
      },
      picker:{
        alignItems: 'center',
        justifyContent  : "center",
        backgroundColor: '#2089dc',
        color: '#ffffff',
        padding: 10,
        marginTop: 16,
        marginLeft: 35,
        marginRight: 35,
        borderRadius: 20,
      },
      titleText:{
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 20,
        fontFamily: 'RobotoBold',
        color: 'white',
        fontWeight: 'bold'
    },
    alarmText:{
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 20,
        fontFamily: 'RobotoBold',
        color: 'white',
        fontWeight: 'bold',
        marginLeft:25,
        marginRight:25,
        marginTop:20
    },
      overlay: {
        position: 'absolute',
        backgroundColor: 'rgba(13, 13, 23, 0.3)',
        ...StyleSheet.absoluteFillObject,
      },
      title: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 30,
        // marginTop:
      },
    loginView: {
        flex: 1,
        // backgroundColor: "white",
        backgroundColor: 'rgba(13, 13, 23, 0.9)',
        ...StyleSheet.absoluteFillObject,
        

    },
    logo : {
        resizeMode:'contain',
        width: 50,
        height: 50,
    },
    logoView : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputView: {
        // flex: 2,
        margin: 10,
    },
    input: {
        height: 40,
        margin: 20,
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        paddingLeft: 15,
    },
    backView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    backText: {
        // color: "#F9A908",
        fontFamily: 'RobotoBold',
        fontWeight: '700',
        color: 'white',
        // fontWeight: "bold",
        // fontSize: 15,
        // fontFamily: "Kailasa",
    },
    pink: {
        fontSize: 50,
        fontFamily: 'RobotoBold',
        fontWeight: '700',
        color: '#ff3c98',
      },
      purple: {
        fontSize: 50,
        fontFamily: 'RobotoBold',
        fontWeight: '700',
        color: '#c056fa',
      },
});

export default AlarmScreen;