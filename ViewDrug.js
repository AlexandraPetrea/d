import React, { useState, useEffect} from 'react';
import { FlatList, ImageBackground, StyleSheet, ScrollView,
     TouchableHighlight, Image,  Text, View, Button, Dimensions, SafeAreaView } from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import { DrugCard } from '../AppStyle';

const {width, height} = Dimensions.get('window');

var imageMap = {
    'bb': require('../assets/icons/cookie50.png'),
    'bullet' : require('../assets/icons/bullet.png')
 }

 
const ViewDrug = ({route, navigation}) => {
  let [inputDrugId, setInputDrugId] = useState('');
  let [userData, setUserData] = useState({});
  const [isLoading, setLoading] = useState(true);
   const { itemId } = route.params;

    useEffect(() => {
    var data = {
       "drugID" : itemId
      //   "drugID" : "1"
    }
    var request = new Request('http://10.0.2.2:5000/api/getDrug' , {
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

    <View 
      key={item.drugID} style={styles.formContainer}>
       <Image style={styles.photo} source={imageMap[item.drugIcon]} />  
      
      <Text style={styles.fieldContainer}> Name: {item.drugID}</Text>
      <Text style={styles.fieldContainer}>No per day: {item.noPerDay}</Text>
      <Text style={styles.fieldContainer}>Remaining dose: {item.dose}</Text>
      <Text style={styles.fieldContainer}>Start Date: {item.startDate}</Text>
      <Text style={styles.fieldContainer}>End Date: {item.endDate}</Text>
      <Text style={styles.fieldContainer}>Observations: {item.others}</Text>
      <Text style={styles.fieldContainer}>Observations: {item.others}</Text>
      <Text style={styles.fieldContainer}>Observations: {item.others}</Text>
       
    </View>

  );}
  return (
    
    <ImageBackground    
    // style={styles.imageContainer} source={require("./background.jpg")}>
      // style={styles.imageContainer} source={require("../assets/background4.jpeg")}>
      style={styles.imageContainer} source={require("../assets/background.jpg")}>
    <View>
          <FlatList vertical numColumns={2}
            data={userData}
            ItemSeparatorComponent={listViewItemSeparator}
            renderItem={({ item }) => listItemView(item)}
            keyExtractor={(item) => `${item.drugID}`}
          />

      </View>
    </ImageBackground>
  );
};

export default ViewDrug;

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
    imageContainer2:{
      alignSelf: 'center'
    },
    photo: {
      marginTop: 10,
      alignSelf: 'center',
      width: '25%',
      height: '16%',
    },
    fieldContainer:{
        // marginLeft: 25,
        // marginRight: 25,
        
        marginTop: 10,
        borderColor: '#007FFF',
        fontFamily: 'RobotoBold',
        textShadowColor: 'white',
        backgroundColor: 'rgba(13, 13, 44, 0.7)',
        color: 'white',
        padding: 20,
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
  