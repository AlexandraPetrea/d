import React, { useState } from 'react';
import { StyleSheet, Alert, View, Text, TextInput, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox'
import DayPicker  from '../../components/DayPicker';
import RNPickerSelect from "react-native-picker-select";
import DaysInterval from './DaysInterval';
import Daily from './Daily';
const DaysSpecific = (props) => {

    return(
            <View >
            <View style = {styles.titleView}>
                    <Text style = {styles.titleText}>In which days? </Text>
            </View>
            <View>
            <DayPicker> </DayPicker>

                <View style={styles.checkboxContainer}>
                    <CheckBox
                        value={props.Monday}
                        onValueChange={props.setMonday}
                        style={styles.checkbox}
                    />
                <Text style={styles.titleText}>Monday</Text>
                </View>
                <View style={styles.checkboxContainer}>
                    <CheckBox
                        value={props.Tuesday}
                        onValueChange={props.setTuesday}
                        style={styles.checkbox}
                    />
                <Text style={styles.titleText}>Tuesday</Text>
                </View>
                <View style={styles.checkboxContainer}>
                    <CheckBox
                        value={props.Wednesday}
                        onValueChange={props.setWednesday}
                        style={styles.checkbox}
                    />
                <Text style={styles.titleText}>Wednesday</Text>
                </View>
                <View style={styles.checkboxContainer}>
                    <CheckBox
                        value={props.Thursday}
                        onValueChange={props.setThursday}
                        style={styles.checkbox}
                    />
                <Text style={styles.titleText}>Thursday</Text>
                </View>
                <View style={styles.checkboxContainer}>
                    <CheckBox
                        value={props.Friday}
                        onValueChange={props.setFriday}
                        style={styles.checkbox}
                    />
                <Text style={styles.titleText}>Friday</Text>
                </View>
                <View style={styles.checkboxContainer}>
                    <CheckBox
                        value={props.Saturday}
                        onValueChange={props.setSaturday}
                        style={styles.checkbox}
                    />
                <Text style={styles.titleText}>Saturday</Text>
                </View>
                <View style={styles.checkboxContainer}>
                    <CheckBox
                        value={props.Sunday}
                        onValueChange={props.setSunday}
                        style={styles.checkbox}
                    />
                <Text style={styles.titleText}>Sunday</Text>
                </View>
            </View>
{/*      
            <View style = {styles.inputView}>
             { (Monday || Tuesday || Wednesday || Thursday || Friday ||  Saturday || Sunday) ?
             <Daily> </Daily> : null }
            </View> */}
      
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
        marginBottom: 10,
      },
    formContainer: {
        width: '100%',
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

export default DaysSpecific;