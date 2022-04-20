import React, { useState, useEffect} from 'react';
import { Alert, FlatList, ImageBackground, StyleSheet, ScrollView, 
     TouchableHighlight, Image,  Text, View, Button, Dimensions, SafeAreaView } from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { DrugCard } from '../AppStyle';
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import { keyExtractor } from 'react-native/Libraries/Lists/VirtualizeUtils';

const {width, height} = Dimensions.get('window');

var imageMap = {
    'bb': require('../assets/icons/cookie50.png'),
    'bullet' : require('../assets/icons/bullet.png')
 }

 
const ViewAlarms = ({route, navigation}) => {
  let [inputDrugId, setInputDrugId] = useState('');
  let [userData, setUserData] = useState({});
  const [isLoading, setLoading] = useState(true);
  const { itemId } = route.params;

  const edit_drugReminder = (item) => {
    console.log("edit");
    item.persist();
    console.log("33", item.id)
    console.log("34", item)
    //navigation.navigate("ViewAlarms", { itemId: item });
    var data = {
        "drugReminderID": "64",
        "time": "11:30"
      }
      console.log(data)
      var request = new Request('http://10.0.2.2:5000/api/updateTimeDrugReminder', {
        method: 'POST',
        headers: new Headers({ 'Content-Type' : 'application/json', 'Accept': 'application/json' }),
        body: JSON.stringify(data)
      });
      fetch(request).then((response) => {
        response.json().then((data) => {
        if (data === true)
        Alert.alert(
            'Success',
            'Time Updated Successfully',
                [
                  {
                    text: 'Ok',
                  },
                ],
                  { cancelable: false }
                );
        else
        Alert.alert(
          'Failed',
          'There is already an alarm at that time. Try again',
          [
           {
             text: 'Ok',
            },
          ],
           { cancelable: false }
          );
        });
        }).catch(function(err){
          console.log(err);
          throw err;
      });
      };
    

  const delete_drugReminder= (item) => {
    console.log("delete");
    item.persist();

    console.log("34", item)
    console.log("77", keyExtractor)
    //navigation.navigate("ViewAlarms", { itemId: item });
    var data = {
        "drugReminderID": "65"
      }
      console.log(data)
      var request = new Request('http://10.0.2.2:5000/api/deleteDrugReminder', {
        method: 'POST',
        headers: new Headers({ 'Content-Type' : 'application/json', 'Accept': 'application/json' }),
        body: JSON.stringify(data)
      });
      fetch(request).then((response) => {
        response.json().then((data) => {
        if (data === true)
        Alert.alert(
            'Success',
            'Drug Reminder Deleted Successfully',
                [
                  {
                    text: 'Ok',
                  },
                ],
                  { cancelable: false }
                );
        else
        Alert.alert(
          'Failed',
          'Drug Reminder NOT Deleted',
          [
           {
             text: 'Ok',
            },
          ],
           { cancelable: false }
          );
        });
        }).catch(function(err){
          console.log(err);
          throw err;
      });
      };
    

  const renderRightActions = () => {
    return (
      <View style={{ justifyContent: 'center'}}>
        <Mybutton  title="Delete" customClick={delete_drugReminder} />
        <Mybutton  title="Edit Time" customClick={edit_drugReminder} /> 
        </View>
    );
  };

    useEffect(() => {
    var data = {
     //   "drugID" : itemId
         "drugID" : "46"
    }
    var request = new Request('http://10.0.2.2:5000/api/getDrugReminder', {
      method: 'POST',
      headers: new Headers({ 'Content-Type' : 'application/json', 'Accept': 'application/json' }),
      body: JSON.stringify(data)
    });

   isLoading && fetch(request)
    .then((response) => response.json())
    .then((json) => {setLoading(false), setUserData(json)})
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));
});

let listViewItemSeparator = () => {
  return (
    <View></View>
    //   style={{ height: 0.2, width: '100%', backgroundColor: '#808080' }}
    // />
  );
};
 let listItemView = (item) => {
  return (
    <Swipeable 
    renderRightActions={renderRightActions} >
    <View 
       key={item.drugID} style={styles.formContainer}> 
        <View style={styles.alarmContainer} >
            <Text style={styles.fieldContainer}>Day: {item.day}</Text>
            <Text style={styles.fieldContainer}>Time: {item.time}</Text>
            <Text style={styles.fieldContainer}>Start Date: {item.startDate}</Text>
            <Text style={styles.fieldContainer}>End Date: {item.endDate}</Text>
        </View>  
    </View>
    </Swipeable>

  );}
  return (
    
    <ImageBackground    
    // style={styles.imageContainer} source={require("./background.jpg")}>
      // style={styles.imageContainer} source={require("../assets/background4.jpeg")}>
      style={styles.imageContainer} source={require("../assets/background.jpg")}>
    <View>
          <FlatList vertical numColumns={1}
            data={userData}
            ItemSeparatorComponent={listViewItemSeparator}
            renderItem={({ item }) => listItemView(item)}
            keyExtractor={(item) => `${item.id}`}
          />

      </View>
    </ImageBackground>
  );
};

export default ViewAlarms;

const styles = StyleSheet.create({
    container: {
    },
    imageContainer: {
      width,
      height,
      resizeMode: 'contain',
      justifyContent: 'center',
      alignItems: 'center',
    },
    alarmContainer: {
        width: '90%',
        marginTop: 10,
        borderRadius: 25,
        backgroundColor: 'rgba(13, 13, 44, 0.7)',
        resizeMode: 'contain',
        justifyContent: 'center',
        alignItems: 'center',
    },

    photo: {
      marginTop: 10,
      alignSelf: 'center',
      width: '25%',
      height: '16%'
    },
    fieldContainer:{
        borderColor: '#007FFF',
        fontFamily: 'RobotoBold',
        textShadowColor: 'white',
        color: 'white',
        fontSize:20,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 3,
        
        elevation: 3},

    // overlay: {
    //   position: 'absolute',
    //   backgroundColor: 'rgba(13, 13, 23, 0.5)',
    //   ...StyleSheet.absoluteFillObject,
    // },
    formContainer: {
      width: '100%',
  
    },
    title: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 50,
      marginBottom: 30,
      // marginTop:
    },
    button: {
      width: '60%',
      backgroundColor: '#44f804',
      alignItems: 'center',
      padding: 20,
      marginTop: 50,
    },
    buttonText: {
      fontSize: 24,
      textTransform: 'uppercase',
      letterSpacing: 2,
      fontFamily: 'RobotoBold',
      fontWeight: '700',
      color: 'white',
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
  