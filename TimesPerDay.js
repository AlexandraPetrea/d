import React, { useState, Component} from 'react';
import { StyleSheet, Alert, View, Text, TextInput, TouchableOpacity } from 'react-native';
import RNPickerSelect from "react-native-picker-select";
import { set } from 'react-native-reanimated';

class TimesPerDay extends Component {
    //set how many larms daily
    render () {
        
    var myloop = [];

        for (let i = 0; i < 10; i++) {
          myloop.push(
            <View key={i}>
            <Text>{i}</Text>
            </View>
          );
        }
    

        return (

            <View >
              <Text >Welcome to React Native!</Text>
               {myloop}
            </View>
    
    
        );
      }
    }
const styles = StyleSheet.create({
    passwordView:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    formContainer: {
        width: '100%',
      },
    picker:{
        alignItems: 'center',
        justifyContent  : "center",
        backgroundColor: '#2089dc',
        color: '#ffffff',
        padding: 5,
        // marginTop: ,
        marginLeft: 35,
        marginRight: 35,
        borderRadius: 20,
      },
    titleView:{
        padding: 10,
    },
    titleText:{
        fontSize: 20,
        fontFamily: 'RobotoBold',
        color: 'white',
        fontWeight: 'bold' 
    },
    input: {
        width: "80%",
        height: 40,
        margin: 20,
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        paddingLeft: 15,
    },
    registerBtnView: {
        alignItems: 'center',
        backgroundColor: '#221eeb',
        color: '#ffffff',
        padding: 10,
        marginTop: 16,
        marginLeft: 35,
        marginRight: 35,
        borderRadius: 20,
        
    },
    registerBtnText: {
        color: "white",
    }
});

export default TimesPerDay;