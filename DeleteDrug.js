//    blog.edafait.com
//    www.edafait.com
// Screen to delete the user

import React, { useState } from 'react';
import { Button, Text, View, Alert, SafeAreaView } from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';

const DeleteDrug = ({ route, navigation }) => {
  let [inputUserId, setInputUserId] = useState('');
  const { itemId } = route.params;
  let deleteUser = () => {
    var data = {
        "drugID" : itemID
      }
      var request = new Request('http://10.0.2.2:5000/api/deleteDrug' , {
        method: 'POST',
        headers: new Headers({ 'Content-Type' : 'application/json', 'Accept': 'application/json' }),
        body: JSON.stringify(data)
      });
  
     isLoading && fetch(request)
      .then((response) => response.json())
      .then((json) => {setLoading(false), setUserData(json),
                Alert.alert(
              'Success',
              'User deleted successfully',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('HomeScreen'),
                },
              ],
              { cancelable: false }
            );
    })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };
    // db.transaction((tx) => {
    //   tx.executeSql(
    //     'DELETE FROM  table_user where user_id=?',
    //     [inputUserId],
    //     (tx, results) => {
    //       console.log('Results', results.rowsAffected);
    //       if (results.rowsAffected > 0) {
    //         Alert.alert(
    //           'Success',
    //           'User deleted successfully',
    //           [
    //             {
    //               text: 'Ok',
    //               onPress: () => navigation.navigate('HomeScreen'),
    //             },
    //           ],
    //           { cancelable: false }
    //         );
    //       } else {
    //         alert('Please insert a valid User Id');
    //       }
    //     }
    //   );
    // });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 1 }}>
          <Mytextinput
            placeholder="Enter User Id"
            onChangeText={(inputUserId) => setInputUserId(inputUserId)}
            style={{ padding: 10 }}
          />
          <Mybutton title="Delete User" customClick={deleteUser} />
        </View>

      </View>
    </SafeAreaView>
  );
};

export default DeleteDrug;
