import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

class FirstAlarm extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    componentDidMount(){
        this.usernameInput.focus();
    }

    render(){
        return(
            <View style = {styles.usernameView}>
                <View style = {styles.titleView}>
                    <Text style = {styles.titleText}> First Alarm</Text>
                </View>
                <TextInput
                    placeholder="username"
                    style={styles.input}
                    autoCapitalize = 'none'
                    onChangeText={(username) => this.props.username(username)}
                    ref={(ref)=>{this.usernameInput = ref}}
                    maxLength={16}
                    autoCorrect={false}
                    onSubmitEditing={this.props.onPressNext}/>
                    
            </View> 
     
        )
    }
}
const styles = StyleSheet.create({
    usernameView:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleView:{
        padding: 10,
    },
    titleText:{
        fontSize: 20,
        fontFamily: 'RobotoBold',
        color: 'white',
        fontWeight: 'bold',
        padding: 10
    },
    input: {
        width: "80%",
        height: 40,
        margin: 15,
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        paddingLeft: 15,
    },
});

export default FirstAlarm;