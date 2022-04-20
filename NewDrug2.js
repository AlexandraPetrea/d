import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity, KeyboardAvoidingView,
    ImageBackground,
Dimensions } from 'react-native';

// //packages
// import AsyncStorage from '@react-native-community/async-storage';

//components

const {width, height} = Dimensions.get('window');

class AddDrugScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            page: 0, //0: name, 1: username, 2: password
            lastname: "",
        }
    }

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

    //set firstname on keyboard change
    setFirstName = (firstname) => {
        this.setState({firstname: firstname});
    }

    //set lastname on keyboard change
    setLastName = (lastname) => {
        this.setState({lastname: lastname});
    }

    //set org name on keyboard change
    setOrgName = (orgname) => {
        this.setState({orgname: orgname});
    }

    //set username on keyboard change
    setUsername = (username) => {
        this.setState({username: username});;
    }

    //set password on keyboard change
    setPassword = (password) => {
        this.setState({password})
    }

    //navigate to home if valid
    onPressRegister = () => {
        var data = {
            // firstname: this.state.firstname,
            // lastname: this.state.lastname,
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
            <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
                <ImageBackground    
                     style={styles.imageContainer}
                     source={require("../../assets/background.jpg")} />
                <View style={styles.overlay}>
                    {/* <View style={styles.title}>
                        <Text style={styles.pink}>Pill</Text>
                         <Text style={styles.purple}>Reminder</Text>
                    </View> */}
                    {/* <View style = {styles.inputView}>
                        {this.state.page === 0 ?
                        <Username
                            onPressNext = {this.onPressNext}
                            username = {this.setUsername}/>:
                            // this.state.page === 1 ?
                        <Password
                            password = {this.setPassword}
                            register = {this.onPressRegister}/>}
                    </View> */}
                                    <TextInput
                    placeholder="username"
                    style={styles.input}
                    autoCapitalize = 'none'
                    onChangeText={(username) => this.props.username(username)}
                    ref={(ref)=>{this.usernameInput = ref}}
                    maxLength={16}
                    autoCorrect={false}
                    onSubmitEditing={this.props.onPressNext}/>
                    <View style = {styles.backView}>
                        <TouchableOpacity onPress = {this.onPressHome}>
                            <Text style = {styles.backText}>Go Back</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

export default AddDrugScreen;
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
        flex: 2,
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

