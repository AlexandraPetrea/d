import React, { useState, useEffect } from 'react';
import { FlatList, Alert, Text, View, Image, SafeAreaView, TouchableHighlight, StyleSheet, Dimensions,
  ActivityIndicator, ImageBackground} from 'react-native';
import { DrugCard } from '../AppStyle';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Mybutton from './components/Mybutton';

const {width, height} = Dimensions.get('window');

var imageMap = {
   'bb': require('../assets/icons/cookie50.png'),
   'diamondbrown': require('../assets/icons/cookie50.png'),
   'bullet' : require('../assets/icons/bullet.png')
}


const ViewAllDrugs = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  let [flatListItems, setFlatListItems] = useState([]);

  const onPressDetails = (item) => {
    // navigation.navigate("Home", { item });
    console.log("24", item)
    navigation.navigate("ViewDrug", { itemId: item });
  };

  const edit_drug = (item) => {
    console.log("edit");
    console.log(item);
    item.persist();
    navigation.navigate("ViewAlarms", { itemId: item });
  }
  let delete_drug = (item) => {
    console.log("delete");
    console.log(item.drugID)
    //navigation.navigate("Home");
    
    var data = {
      "drugID": "45" 
    }
    console.log(data)
    var request = new Request('http://10.0.2.2:5000/api/deleteDrug', {
      method: 'POST',
      headers: new Headers({ 'Content-Type' : 'application/json', 'Accept': 'application/json' }),
      body: JSON.stringify(data)
    });
    fetch(request).then((response) => {
      response.json().then((data) => {
      console.log("47", data)
      console.log("48", data[0])
      if (data === true)
       Alert.alert(
        'Success',
         'Drug Deleted Successfully',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('HomeScreen'),
                },
              ],
                { cancelable: false }
              );
      else
      Alert.alert(
        'Failed',
        'Drug NOT Deleted',
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
        <Mybutton  title="Delete Drug" customClick={delete_drug} />
        <Mybutton  title="View Alarms" customClick={edit_drug} /> 
        </View>
    );
  };


  useEffect(() => {
  var request = new Request('http://10.0.2.2:5000/api/getDrugs', {
    method: 'GET',
    headers: new Headers({ 'Content-Type' : 'application/json', 'Accept': 'application/json' }),
    // body: JSON.stringify(data)
  });
  fetch(request)
  .then((response) => response.json())
  .then((json) => setFlatListItems(json))
  .catch((error) => console.error(error))
  .finally(() => setLoading(false));
}, []);


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
        
        renderRightActions={renderRightActions} 
       >
      <TouchableHighlight underlayColor="rgba(73,182,77,0.9)" onPress={() => onPressDetails(parseInt(item.drugID))}>
      <View style={DrugCard.container}
            key={item.drugID} >
        <Text style={DrugCard.title}> Name: {item.drugName}</Text>
        <Image style={styles.photo} source={imageMap[item.drugIcon]} /> 
        <Text style={DrugCard.category}>Daily numbers: {item.noPerDay}</Text>
        <Text style={DrugCard.category}>Start Date: {item.startDate}</Text>
        <Text style={DrugCard.category}>End Date: {item.endDate}</Text>
        <Text style={DrugCard.category}>Observations: {item.others}</Text>
        <Text style={DrugCard.title}>Remaining dose: {item.active}</Text>
         
      </View>
      </TouchableHighlight>
      </Swipeable>
    );
  };

  return  (
    <ImageBackground    
          style={styles.imageContainer} source={require("./background.jpg")}>
      <View>

  <FlatList vertical showsVerticalScrollIndicator={true} numColumns={1}
            data={flatListItems}
            ItemSeparatorComponent={listViewItemSeparator}
            // keyExtractor={(item, item.DrugId) => drugId.toString()}
            renderItem={({ item }) => listItemView(item)}
            keyExtractor={(item) => `${item.drugID}`}
          />
   </View>
        </ImageBackground>

  );
};

export default ViewAllDrugs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
    backgroundColor: 'rgba(13, 13, 23, 0.5)',
    ...StyleSheet.absoluteFillObject,
  },
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
