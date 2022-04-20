import React, { useEffect } from 'react';
import { View, Text, SafeAreaView, Dimensions, StyleSheet,  ImageBackground, ScrollView } from 'react-native';
import Mybutton from './components/Mybutton';
import BackButton from './components/BackButton/BackButton'
import Mytext from './components/Mytext';
import { openDatabase } from 'react-native-sqlite-storage';

const {width, height} = Dimensions.get('window');

var db = openDatabase({ name: 'UserDatabase.db' });

const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
        [],
        function (tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS table_user', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), user_contact INT(10), user_address VARCHAR(255))',
              []
            );
          }
        }
      );
    });
  }, []);

  return (
    // <SafeAreaView style={{ flex: 1 }}>
    <ScrollView style={styles.container}>
    <ImageBackground    style={styles.imageContainer} source={require("./background.jpg")}>
    <View style={styles.overlay}/>
     <View style={styles.title}>
          <Text style={styles.pink}>Pill</Text>
          <Text style={styles.purple}>Reminder</Text>
      </View>
        <View style={{ flex: 1 }}>
          <Mybutton
            title="New Contact"
            customClick={() => navigation.navigate('NewContact')}
          />
          <Mybutton
            title="Update"
            customClick={() => navigation.navigate('Update')}
          />
          <Mybutton
            title="View"
            customClick={() => navigation.navigate('View')}
          />
          <Mybutton
            title="View All"
            customClick={() => navigation.navigate('ViewAll')}
          />
          <Mybutton
            title="Delete"
            customClick={() => navigation.navigate('Delete')}
          />
          <Mybutton
            title="Add Drug"
            customClick={() => navigation.navigate('AddDrug')}
          />
          <Mybutton
            title="Scheduler"
            customClick={() => navigation.navigate('TimelineScreen')}
          />
                    <Mybutton
            title="Swipe"
            customClick={() => navigation.navigate('SwipeGesture')}
          />
  
  
        </View>
       {/* <Text style={{ fontSize: 16, textAlign: 'center', color: 'grey' }}>
       
        </Text> */}
      {/* </View> */}
    {/* </SafeAreaView> */}
    </ImageBackground>
    </ScrollView>
  );
};

export default HomeScreen;

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
    backgroundColor: 'rgba(13, 13, 23, 0.2)',
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
