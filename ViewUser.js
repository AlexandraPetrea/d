import React, { useState, useEffect } from 'react';
import { FlatList, ImageBackground, Dimensions, StyleSheet, TouchableHighlight,  Text, View, Button, SafeAreaView } from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import { DrugCard } from '../AppStyle';

import AsyncStorage from '@react-native-async-storage/async-storage';
const {width, height} = Dimensions.get('window');

const ViewUser = ({ navigation }) => {
// const ViewUser = ({route, navigation}) => {
  let [inputDrugId, setInputDrugId] = useState('');
  let [userData, setUserData] = useState({});
  const [isLoading, setLoading] = useState(true);
  // const { itemId } = route.params;

  const onPressDetails = (item) => {
    console.log("24", item)
    //navigation.navigate("Home", { item });
     navigation.navigate("EditUser", { itemId: item });
  };



    useEffect(() => { searchUser()});
    let searchUser = async () => {
      let userID = await AsyncStorage.getItem('userID'); 
      console.log("25", userID)
      var data = {
        "userID" : userID
      }
      var request = new Request('http://10.0.2.2:5000/api/getUserInfo' , {
        method: 'POST',
        headers: new Headers({ 'Content-Type' : 'application/json', 'Accept': 'application/json' }),
        body: JSON.stringify(data)
      });
  
     isLoading && fetch(request)
      .then((response) => response.json())
      .then((json) => {setLoading(false), setUserData(json)})
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

 let listItemView = (item) => {
  return (
    <TouchableHighlight underlayColor="rgba(73,182,77,0.9)" onPress={() => onPressDetails(item)}>
    <View 
      key={item.userID}
      style={styles.container} >
      <Text style={styles.title}> Name: {item.fullName}</Text>
      <Text style={styles.category}>Age: {item.age}</Text>
      <Text style={styles.category}>Height: {item.height}</Text>
      <Text style={styles.category}>Weight: {item.weight}</Text>
      <Text style={styles.category}>Known Disease: {item. knownDisease}</Text>
       
    </View>
    </TouchableHighlight>

  );}

  return (
    <SafeAreaView style={{ flex: 1 }}>
    {/* <View style={{ flex: 1, backgroundColor: 'white' }}> */}
    <ImageBackground    
             style={styles.imageContainer}
             source={require("../assets/background.jpg")} />
        <View style={styles.overlay}>
        <View style={{ flex: 1 }}>
          {/* <Mytextinput
            placeholder="Enter User Id"
            onChangeText={(inputDrugId) => setInputDrugId(inputDrugId)}
            style={{ padding: 10 }}
          /> 
       
          <Mybutton title="Search User" customClick={searchUser} /> */}
          <FlatList vertical showsVerticalScrollIndicator={true} numColumns={1}
            data={userData}
            renderItem={({ item }) => listItemView(item)}
            keyExtractor={(item) => `${item.drugID}`}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ViewUser;

const styles = StyleSheet.create({
  imageContainer: {
      flex: 1,
      width,
      height,
      resizeMode: 'contain',
      // justifyContent: 'center',
      alignItems: 'center',
    },
    container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderColor: '#cccccc',
    borderWidth: 0.5,
    borderRadius: 15,
   // backgroundColor: '#2089dc',
   backgroundColor: 'rgba(13, 13, 44, 0.7)',
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
  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    //color: '#444444',
    color: 'white',
    marginTop: 3,
    marginRight: 5,
    marginLeft: 5,
  },
  category: {
    marginTop: 1,
    marginBottom: 1,
    color: 'white',
    fontSize: 18
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
  text:{
    backgroundColor: 'rgba(13, 13, 44, 0.7)',
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
