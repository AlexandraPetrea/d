import React, { useState } from 'react';
import { StyleSheet, Alert, View, Text, TextInput, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox'
import RNPickerSelect from "react-native-picker-select";

const DaysInterval = (props) => {
    return(
            <View>
            <View style = {styles.titleView}>
                    <Text style = {styles.titleText}>How many days between doses? </Text>
            </View>
         
            <View style={styles.picker}>
             <RNPickerSelect
                 onValueChange={(value) => {props.setHowOften(value), console.log(value)}}
                 items={[
                     { label: "1", value: "1" },
                     { label: "2", value: "2" },
                     { label: "3", value: "3"},
                     { label: "4", value: "4"},
                     { label: "5", value: "5" },
                     { label: "6", value: "6" },
                     { label: "7", value: "7"},
                     { label: "8", value: "8"},
                     { label: "9", value: "9" },
                     { label: "10", value: "10" },
                     { label: "11", value: "11"},
                     { label: "12", value: "12"},
                     { label: "13", value: "13" },
                     { label: "14", value: "14" },
                     { label: "15", value: "15"},
                     { label: "16", value: "16"},
                     { label: "17", value: "17"},
                     { label: "18", value: "18" },
                     { label: "19", value: "19" },
                     { label: "20", value: "20"},
                     { label: "21", value: "21"},
                     { label: "22", value: "22" },
                     { label: "23", value: "23" },
                     { label: "24", value: "24"}
                  ]}
             />
         </View> 

                {/* <TouchableOpacity style = {styles.registerBtnView} onPress = {this.props.register}>
                    <Text style = {styles.registerBtnText}>Register</Text>
                </TouchableOpacity> */}
            </View>
    )
}

const styles = StyleSheet.create({
    passwordView:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
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

export default DaysInterval;