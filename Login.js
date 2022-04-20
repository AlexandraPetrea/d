import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity, KeyboardAvoidingView, ImageBackground,
Dimensions } from 'react-native';

//packages
 import AsyncStorage from '@react-native-async-storage/async-storage';

const {width, height} = Dimensions.get('window');

class LoginScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    //navigate to register
    onPressReigister = () =>{
        this.props.navigation.navigate("RegisterScreen");
    }

    //navigate to authentication main
    onPressBack = () => {
        this.props.navigation.navigate("Home");
    }

    //navigate to home if valid
    onPressLogin = () => {
        var data = {
            username: this.state.username,
            password: this.state.password,
          }
          var request = new Request('http://10.0.2.2:5000/api/login', {
            method: 'POST',
            headers: new Headers({ 'Content-Type' : 'application/json', 'Accept': 'application/json' }),
            body: JSON.stringify(data)
          });
          console.log(data.username)
          fetch(request).then((response) => {

            console.log("37")
            response.json().then((data) => {
                console.log("39")
                if(data.password){ //encrpytion password matches
                    AsyncStorage.setItem('userID', data.userID.toString()); //store userID globally
                    this.props.navigation.navigate("Home"); //navigate to main page

                    console.log("ceva")
                }
            });
          }).catch(function(err){
            console.log(err);
        });
    }

    render(){
        return(
            <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
            <ImageBackground    
                style={styles.imageContainer}
                source={require("../background.jpg")} />
            <View style={styles.overlay}>
                <View style = {styles.loginInputView}>
                    <TextInput
                        placeholder="username"
                        style={styles.input}
                        autoCapitalize = 'none'
                        ref = {(input) => {this.usernameInput = input; }}
                        onChangeText={(username) => this.setState({username})}
                        onSubmitEditing={() => { this.passwordInput.focus(); }}
                        maxLength={16}/>
                    <TextInput
                        placeholder="password"
                        style={styles.input}
                        autoCapitalize = 'none'
                        ref = {(input) => {this.passwordInput = input; }}
                        onChangeText={(password) => this.setState({password})}
                        onSubmitEditing={this.onPressLogin}
                        maxLength={16}
                        secureTextEntry={true}/>
                    <TouchableOpacity style = {styles.loginBtnView} onPress = {this.onPressLogin}>
                        <Text style = {styles.loginBtnText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.backBtnView} onPress = {this.onPressBack}>
                        <Text style = {styles.backBtnText}>Back</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style = {styles.registerView} onPress = {this.onPressReigister}>
                    <Text style = {styles.registerText}>Register</Text>
                </TouchableOpacity>
         </View>
    </KeyboardAvoidingView>
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
      overlay: {
        position: 'absolute',
        backgroundColor: 'rgba(13, 13, 23, 0.3)',
        ...StyleSheet.absoluteFillObject,
      },
    
    loginView:{
        flex: 1,
        backgroundColor: "white",
    },
    logoView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo : {
        resizeMode:'contain',
        width: 50,
        height: 50,
    },
    loginInputView:{
        flex: 1,
        justifyContent: 'center',
    },
    input: {
        height: 40,
        margin: 10,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        paddingLeft: 15,
    },
    loginBtnView: {
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: "#f9a908",
        backgroundColor : "#221eeb",
        borderRadius: 15,
        padding: 5,
        margin: 30,
    },
    loginBtnText: {
        fontSize: 20,
        color: "white",
    },
    backBtnView:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    backBtnText: {
        color: "white"
    },
    registerView: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#221eeb",
        borderRadius: 15,
        padding: 5,
        margin: 20,
        opacity: 0.5,
        marginBottom: 50,
    },
    registerText : {
        fontSize: 20,
        color: "white",
        fontWeight: "500",
        opacity: 1,
    }
});

export default LoginScreen;