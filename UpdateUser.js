import React, { useState } from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  SafeAreaView,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import { openDatabase } from 'react-native-sqlite-storage';

const {width, height} = Dimensions.get('window');

var db = openDatabase({ name: 'UserDatabase.db' });

const UpdateUser = ({ navigation }) => {
  let [inputUserId, setInputUserId] = useState('');
  let [userName, setUserName] = useState('');
  let [userContact, setUserContact] = useState('');
  let [userAddress, setUserAddress] = useState('');

  let updateAllStates = (name, contact, address) => {
    setUserName(name);
    setUserContact(contact);
    setUserAddress(address);
  };

  //go back home
  onPressHome = () => {
    this.props.navigation.navigate("Home");
  }

  let searchUser = () => {
    console.log(inputUserId);
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM table_user where user_id = ?',
        [inputUserId],
        (tx, results) => {
          var len = results.rows.length;
          if (len > 0) {
            let res = results.rows.item(0);
            updateAllStates(res.user_name, res.user_contact, res.user_address);
          } else {
            alert('No user found');
            updateAllStates('', '', '');
          }
        }
      );
    });
  };
  let updateUser = () => {
    console.log(inputUserId, userName, userContact, userAddress);

    if (!inputUserId) {
      alert('Please fill User id');
      return;
    }
    if (!userName) {
      alert('Please fill name');
      return;
    }
    if (!userContact) {
      alert('Please fill Contact Number');
      return;
    }
    if (!userAddress) {
      alert('Please fill Address');
      return;
    }

    db.transaction((tx) => {
      tx.executeSql(
        'UPDATE table_user set user_name=?, user_contact=? , user_address=? where user_id=?',
        [userName, userContact, userAddress, inputUserId],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Success',
              'User updated successfully',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('HomeScreen'),
                },
              ],
              { cancelable: false }
            );
          } else alert('Updation Failed');
        }
      );
    });
  };

  return (
    <ScrollView>
    <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
        <ImageBackground    
             style={styles.imageContainer}
             source={require("../assets/background.jpg")} />
        <View style={styles.overlay}>
    <SafeAreaView >
      <View >
        <View >
          <ScrollView keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView
              behavior="padding"
              style={{ flex: 1, justifyContent: 'space-between' }}>
              <Mytextinput
                placeholder="Enter User Id"
                style={{ padding: 10 }}
                onChangeText={(inputUserId) => setInputUserId(inputUserId)}
              />
              <Mybutton title="Search User" customClick={searchUser} />
              <Mytextinput
                placeholder="Enter Name"
                value={userName}
                style={{ padding: 10 }}
                onChangeText={(userName) => setUserName(userName)}
              />
              <Mytextinput
                placeholder="Enter Contact No"
                value={'' + userContact}
                onChangeText={(userContact) => setUserContact(userContact)}
                maxLength={10}
                style={{ padding: 10 }}
                keyboardType="numeric"
              />
              <Mytextinput
                value={userAddress}
                placeholder="Enter Address"
                onChangeText={(userAddress) => setUserAddress(userAddress)}
                maxLength={225}
                numberOfLines={5}
                multiline={true}
                style={{ textAlignVertical: 'top', padding: 10 }}
              />
              <Mybutton title="Update User" customClick={updateUser} />
              
              <View style = {styles.backView}>
                        <TouchableOpacity onPress = {this.onPressHome}>
                            <Text style = {styles.backText}>Go Back</Text>
                        </TouchableOpacity>
                    </View>
            </KeyboardAvoidingView>
          </ScrollView>

        </View>
      </View>
    </SafeAreaView>
    </View>
    </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default UpdateUser;


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
