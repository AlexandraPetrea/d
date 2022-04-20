import React, { useEffect } from 'react';
import { View, Text,   TouchableOpacity, SafeAreaView, Dimensions, StyleSheet,  ImageBackground, ScrollView} from 'react-native';
import Mybutton from './components/Mybutton';
import Mytext from './components/Mytext';
import { openDatabase } from 'react-native-sqlite-storage';

const {width, height} = Dimensions.get('window');

var db = openDatabase({ name: 'UserDatabase.db' });

const Home = ({ navigation }) => {
  useEffect(() => {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
        [],
      );
    });
  }, []);

  return (
     <ScrollView style={styles.container}>
     <ImageBackground    style={styles.imageContainer} source={require("../../AwesomeProject/assets/background.jpg")}> 
     <View style={styles.overlay}/>
     <View style={styles.title}>
          <Text style={styles.pink}>Pill</Text>
          <Text style={styles.purple}>Reminder</Text>
      </View>
      {/* <Mybutton title="Enter" customClick={() => navigation.navigate('HomeScreen')}  */}
      <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('HomeScreen')}>
          <Text style={styles.buttonText}>Enter</Text>
        </TouchableOpacity>
  
    </ImageBackground> 
     </ScrollView>
  );
};

export default Home;

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
    backgroundColor: 'rgba(13, 13, 23, 0.0)',
    ...StyleSheet.absoluteFillObject,
  },
  formContainer: {
    width: '100%',
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 200,
    marginBottom: 30,
    // marginTop:
  },
  button: {
    width: '60%',
    backgroundColor: '#221eeb',
    alignItems: 'center',
    padding: 20,
    marginTop: 50,
    borderRadius: 40,
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
