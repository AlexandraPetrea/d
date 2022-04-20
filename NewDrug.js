import React, { useState } from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  SafeAreaView,
  Text,
  ImageBackground,
  StyleSheet, 
  Button,
  ActivityIndicator,
  Modal, 
  Dimensions
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CheckBox from '@react-native-community/checkbox'
import DayPicker  from './components/DayPicker';
// import {Picker} from '@reacy-native-picker/picker'
import DatePicker from 'react-native-date-picker'
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import Mycalendar from './components/Mycalendar';
import RNPickerSelect from "react-native-picker-select";
import Daily from './screens/Alarm/Daily'
import TimesPerDay from './screens/Alarm/TimesPerDay';
import ProductScanRNCamera from './screens/OpenCamera'
import DaysInterval from './screens/Alarm/DaysInterval'
import Alarm from './screens/Alarm/AlarmScreen'
import { interpolate, Value } from 'react-native-reanimated';

const {width, height} = Dimensions.get('window');

const AddDrug = ({ navigation }) => {
  const d = new Date();
  var options = {
    weekday: "short",
    year: "numeric",
    month: "2-digit",
    day: "numeric"
};

  let [isDateTimePickerVisible, setisDateTimePickerVisible] = useState(false)
  const [displayStartDate, setDisplayStartDate] = useState(false)
  const [displayEndDate, setDisplayEndDate] = useState(false)
  const [date, setDate] = useState(new Date())
  const [openEndDate, setOpenEndDate] = useState(false)
  const [openStartDate, setOpenStartDate] = useState(false)
  let [name, setName] = useState('');
  let [dose, setDose] = useState('');
  let [dosage, setDosage] = useState(0);
  let [totalNoOfDoses, setTotaNoOfDoses] = useState(0);
  let [noPerDay, setNoPerDay] = useState(0);
  let [icon, setIcon] = useState('');
  let [reminderTime, setReminderTime] = useState('');
  let [startDate, setStartDate] = useState(d.toLocaleDateString("en", options));
  let [endDate, setEndDate] = useState('');
  let [active, setActive] = useState('');
  let [others, setOthers] = useState('');
  let [shape, setShape] = useState('round');
  let [color, setColor] = useState('oval');
  let [instructions, setInstructions] = useState('Before food');
  let [page, setPage] = useState(0);
  let [frequency, setFrequency] = useState('');
  let [days, setDays] = useState("");
  let [time, setTime] = useState("");
  let [howOften, setHowOften] = useState('');

  let [timePickerVisible, setTimePickerVisible] = useState(false)
  const [displayTime, setDisplayTime] = useState(false)
  let [openTime1, setOpenTime1] = useState(false);
  let [openTime2, setOpenTime2] = useState(false);
  let [openTime3, setOpenTime3] = useState(false);
  let [openTime4, setOpenTime4] = useState(false);
  let [openTime5, setOpenTime5] = useState(false);
  let [openTime6, setOpenTime6] = useState(false);
  let [openTime7, setOpenTime7] = useState(false);
  let [openTime8, setOpenTime8] = useState(false);
  let [openTime9, setOpenTime9] = useState(false);
  let [openTime10, setOpenTime10] = useState(false);
  let [openTime11, setOpenTime11] = useState(false);
  let [openTime12, setOpenTime12] = useState(false);
  let [openTime13, setOpenTime13] = useState(false);
  let [openTime14, setOpenTime14] = useState(false);
  let [openTime15, setOpenTime15] = useState(false);
  let [openTime16, setOpenTime16] = useState(false);
  let [openTime17, setOpenTime17] = useState(false);
  let [openTime18, setOpenTime18] = useState(false);
  let [openTime19, setOpenTime19] = useState(false);
  let [openTime20, setOpenTime20] = useState(false);
  let [openTime21, setOpenTime21] = useState(false);
  let [openTime22, setOpenTime22] = useState(false);
  let [openTime23, setOpenTime23] = useState(false);
  let [openTime24, setOpenTime24] = useState(false);
  let [timesPerDay, setTimesPerDay] = useState(0);
  let [alarm1, setAlarm1] = useState('08:00');
  let [alarm2, setAlarm2] = useState('08:00');
  let [alarm3, setAlarm3] = useState('08:00');
  let [alarm4, setAlarm4] = useState('08:00');
  let [alarm5, setAlarm5] = useState('08:00');
  let [alarm6, setAlarm6] = useState('08:00');
  let [alarm7, setAlarm7] = useState('08:00');
  let [alarm8, setAlarm8] = useState('08:00');
  let [alarm9, setAlarm9] = useState('08:00');
  let [alarm10, setAlarm10] = useState('08:00');
  let [alarm11, setAlarm11] = useState('08:00');
  let [alarm12, setAlarm12] = useState('08:00');
  let [alarm13, setAlarm13] = useState('08:00');
  let [alarm14, setAlarm14] = useState('08:00');
  let [alarm15, setAlarm15] = useState('08:00');
  let [alarm16, setAlarm16] = useState('08:00');
  let [alarm17, setAlarm17] = useState('08:00');
  let [alarm18, setAlarm18] = useState('08:00');
  let [alarm19, setAlarm19] = useState('08:00');
  let [alarm20, setAlarm20] = useState('08:00');
  let [alarm21, setAlarm21] = useState('08:00');
  let [alarm22, setAlarm22] = useState('08:00');
  let [alarm23, setAlarm23] = useState('08:00');
  let [alarm24, setAlarm24] = useState('08:00');

  let [Monday, setMonday] = useState(false);
  let [Tuesday, setTuesday] = useState(false);
  let [Wednesday, setWednesday] = useState(false);
  let [Thursday, setThursday] = useState(false);
  let [Friday, setFriday] = useState(false);
  let [Saturday, setSaturday] = useState(false);
  let [Sunday, setSunday] = useState(false);

  let setAlarm = (index, value) => {
    if (index == 1){
      setAlarm1(value)
    } else if (index == 2){
      setAlarm2(value)
    } else if (index == 3){
      setAlarm3(value)
    } else if (index == 4){
      setAlarm4(value)
    } else if (index == 5){
      setAlarm5(value)
    } else if (index == 6){
      setAlarm6(value)
    } else if (index == 7){
      setAlarm7(value)
    } else if (index == 8){
      setAlarm8(value)
    } else if (index == 9){
      setAlarm9(value)
    } else if (index == 10){
      setAlarm10(value)
    } else if (index == 11){
      setAlarm11(value)
    } else if (index == 12){
      setAlarm12(value)
    } else if (index == 13){
      setAlarm13(value)
    } else if (index == 14){
      setAlarm14(value)
    } else if (index == 15){
      setAlarm15(value)
    } else if (index == 16){
      setAlarm16(value)
    } else if (index == 17){
      setAlarm17(value)
    } else if (index == 18){
     setAlarm18(value)
    } else if (index == 19){
      setAlarm19(value)
    } else if (index == 20){
      setAlarm20(value)
    } else if (index == 21){
      setAlarm21(value)
    } else if (index == 22){
      setAlarm22(value)
    } else if (index == 23){
      setAlarm23(value)
    } else if (index == 24){
      setAlarm24(value)
  }
}

  let setOpenTime = (index, value) => {
    if (index == 1){
      setOpenTime1(value)
    } else if (index == 2){
      setOpenTime2(value)
    } else if (index == 3){
      setOpenTime3(value)
    } else if (index == 4){
      setOpenTime4(value)
    } else if (index == 5){
      setOpenTime5(value)
    } else if (index == 6){
      setOpenTime6(value)
    } else if (index == 7){
      setOpenTime7(value)
    } else if (index == 8){
      setOpenTime8(value)
    } else if (index == 9){
      setOpenTime9(value)
    } else if (index == 10){
      setOpenTime10(value)
    } else if (index == 11){
      setOpenTime11(value)
    } else if (index == 12){
      setOpenTime12(value)
    } else if (index == 13){
      setOpenTime13(value)
    } else if (index == 14){
      setOpenTime14(value)
    } else if (index == 15){
      setOpenTime15(value)
    } else if (index == 16){
      setOpenTime16(value)
    } else if (index == 17){
      setOpenTime17(value)
    } else if (index == 18){
     setOpenTime18(value)
    } else if (index == 19){
      setOpenTime19(value)
    } else if (index == 20){
      setOpenTime20(value)
    } else if (index == 21){
      setOpenTime21(value)
    } else if (index == 22){
      setOpenTime22(value)
    } else if (index == 23){
      setOpenTime23(value)
    } else if (index == 24){
      setOpenTime24(value)
  }
  }

  let getAlarm = (index) => {
    if (index == 1){
      return alarm1
    } else if (index == 2){
      return alarm2
    } else if (index == 3){
      return alarm3
    } else if (index == 4){
      return alarm4
    } else if (index == 5){
      return alarm5
    } else if (index == 6){
      return alarm6
    } else if (index == 7){
      return alarm7
    } else if (index == 8){
      return alarm8
    } else if (index == 9){
      return alarm9
    } else if (index == 10){
      return alarm10
    } else if (index == 11){
      return alarm11
    } else if (index == 12){
      return alarm12
    } else if (index == 13){
      return alarm13
    } else if (index == 14){
      return alarm14
    } else if (index == 15){
      return alarm15
    } else if (index == 16){
      return alarm16
    } else if (index == 17){
      return alarm17
    } else if (index == 18){
     return alarm18
    } else if (index == 19){
      return alarm19
    } else if (index == 20){
      return alarm20
    } else if (index == 21){
      return alarm21
    } else if (index == 22){
      return alarm22
    } else if (index == 23){
      return alarm23
    } else if (index == 24){
      return alarm24
  }
  }

  let getOpenTime = (index) => {
    if (index == 1){
      return openTime1
    } else if (index == 2){
      return openTime2
    } else if (index == 3){
      return openTime3
    } else if (index == 4){
      return openTime4
    } else if (index == 5){
      return openTime5
    } else if (index == 6){
      return openTime6
    } else if (index == 7){
      return openTime7
    } else if (index == 8){
      return openTime8
    } else if (index == 9){
      return openTime9
    } else if (index == 10){
      return openTime10
    } else if (index == 11){
      return openTime11
    } else if (index == 12){
      return openTime12
    } else if (index == 13){
      return openTime13
    } else if (index == 14){
      return openTime14
    } else if (index == 15){
      return openTime15
    } else if (index == 16){
      return openTime16
    } else if (index == 17){
      return openTime17
    } else if (index == 18){
     return openTime18
    } else if (index == 19){
      return openTime19
    } else if (index == 20){
      return openTime20
    } else if (index == 21){
      return openTime21
    } else if (index == 22){
      return openTime22
    } else if (index == 23){
      return openTime23
    } else if (index == 24){
      return openTime24
  }
  }

  _showDateTimePicker = () => setisDateTimePickerVisible(true)
  _showTimePicker = () => setTimePickerVisible(true)

  let get_time = () => {
    const views = [];
    for (let i = 1; i <= timesPerDay; i++) {
      views.push(
        <View key={i} style={styles.picker}>
        <Text style={styles.text}>Alarm {i} </Text> 
        <Mytextinput style={styles.text1}
          placeholder=""
          onFocus={ () => _showTimePicker() }
          value={getAlarm(i)}/>
        
        <Mycalendar  style={styles.modal} title="Adjust alarm time" customClick={() => {setOpenTime(i, true)}}/>
           
        <DatePicker
          modal
          mode="time"
          open={getOpenTime(i)}
          date={date}
          onConfirm={(time) => {
            setOpenTime(i, false)
            setDisplayTime(i, true)
            setAlarm(i, time.toLocaleTimeString({minimumFractionDigits: 2, maximumFractionDigits: 2}))
          }}
          onCancel={() => {
            setOpenTime(i, false)
          }}
          />
          
        </View>

      );
    }
    return views;
  }
  let get_days = () => {
    days = ""
    if (frequency == "daily" ){
      days = "Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday"
    } else if (frequency == "daysSpecific"){
      if (Monday)
        days = "Monday"
      if (Tuesday){
        if (days.length != 0)
          days = days + ","
        days = days + "Tuesday"}
      if (Wednesday){
        if (days.length != 0)
          days = days + ","
        days = days +"Wednesday"}
      if (Thursday){
        if (days.length != 0)
          days = days + ","
        days = days +"Thursday"}
      if (Friday){
        if (days.length != 0)
          days = days + ","
        days = days +"Friday"}
      if (Saturday){
        if (days.length != 0)
          days = days + ","
        days = days +"Saturday"}
      if (Sunday){
        if (days.length != 0)
          days = days + ","
        days = days +"Sunday"}
    } else if (frequency == "daysInterval"){
      const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
      days = weekday[d.getDay()]
    }

  return days
}

  let get_alarms_time = () => {
    let alarms = [];
    for (let i = 1; i <= timesPerDay; i++) {
      alarms = alarms.concat(getAlarm(i))
    }
    return alarms
  }

  let get_totalNoOfDoses = (days) => {
    let noDays =  days.split(',').length
    return noDays * timesPerDay
    
  }

  let register_drug = async () => {
    console.log(name, dose, noPerDay, icon, reminderTime, startDate, endDate, active, others);
    let userID = await AsyncStorage.getItem('userID'); 
    // if (!name) {
    //   alert('Please fill drug name');
    //   return;
    // }
    // if (!dose) {
    //   alert('Please fill drug dose');
    //   return;
    // }

    _showDateTimePicker = () => setisDateTimePickerVisible(true)

    _hideDateTimePicker = () => setisDateTimePickerVisible(false)
  
    days = get_days()
    totalNoOfDoses = get_totalNoOfDoses(days)
    time = get_alarms_time()
    
    console.log('88', days)
    var data = {
      "active": 1, 
      "dosage": dosage,
      "drugIcon": shape + color, 
      "endDate": 1, 
      "drugName": name,
      "instructions": instructions,
      "totalNoOfDoses" : totalNoOfDoses,
      "others": "A", 
      "reminderTime": "a", 
      "startDate": 20220326, 
      "frequency" : frequency,
      "days": days,
      "userID": userID,
      "time" : time
  
    }
    console.log(data)
  //   var request = new Request('http://10.0.2.2:5000/api/storeDrug', {
  //     method: 'POST',
  //     headers: new Headers({ 'Content-Type' : 'application/json', 'Accept': 'application/json' }),
  //     body: JSON.stringify(data)
  //   });
  //   fetch(request).then((response) => {
  //     response.json().then((data) => {
  //       console.log(data)
  //       if (data[0] === "Not OK")
  //         Alert.alert(
  //           'Failed',
  //           'Drug NOT Registered ',
  //           [
  //             {
  //               text: 'Ok',
  //             },
  //           ],
  //           { cancelable: false }
  //         );
  //       else
  //         Alert.alert(
  //           'Success',
  //           'Drug Registered Successfully',
  //           [
  //             {
  //               text: 'Ok',
  //               onPress: () => navigation.navigate('HomeScreen'),
  //             },
  //           ],
  //             { cancelable: false }
  //           );
  //     });
  //   }).catch(function(err){
  //     console.log(err);
  //     throw err;
  // });

    // db.transaction(function (tx) {
    //   tx.executeSql(
    //     'INSERT INTO table_drug (drug_name, drug_dose) VALUES (?,?)',
    //     [userName, userContact, userAddress],
    //     (tx, results) => {
    //       console.log('Results', results.rowsAffected);
    //       if (results.rowsAffected > 0) {
    //         Alert.alert(
    //           'Success',
    //           'Drug Registered Successfully',
    //           [
    //             {
    //               text: 'Ok',
    //               onPress: () => navigation.navigate('HomeScreen'),
    //             },
    //           ],
    //           { cancelable: false }
    //         );
    //       } else alert('Drug Registration Failed');
    //     }
    //   );
    // }
    // );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
       <ImageBackground    style={styles.imageContainer} source={require("./background.jpg")}>
       <View style={styles.overlay}>
          <ScrollView keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView
              behavior="padding"
              style={{ flex: 1, justifyContent: 'space-between' }}>
              <Mytextinput
                placeholder="Enter Drug Name"
                onChangeText={(name) => setName(name)}
                style={{ padding: 10 }}
                autoFocus={true}
              />
            <Mybutton title="Scan Drug Name" />
            {/* <Mybutton title="Scan Drug Name" onClick={navigation.navigate("CameraScreen")} /> */}
              <Mytextinput
                placeholder="Enter Drug Dose"
                onChangeText={(dosage) => setDosage(dosage)}
                maxLength={10}
                keyboardType="numeric"
                style={{ padding: 10 }}
              />
          <View style={styles.picker}>
            <Text style={styles.text}> Shape:</Text> 
             <RNPickerSelect
                 onValueChange={(value) => {setShape(value), console.log(value)}}
                 items={[
                     { label: "Bullet", value: "bullet" },
                     { label: "Capsule", value: "capsule" },
                     { label: "Clover", value: "clover" },
                     { label: "Diamond", value: "diamond" },
                     { label: "Double Circle", value: "doubleCircle" },
                     { label: "Oval", value: "oval" },
                     { label: "Round", value: "round" },
                     { label: "Triangle", value: "triangle" },
                 ]}
             />
         </View>

         <View style={styles.picker}>
             <Text style={styles.text}>Color:</Text>
             <RNPickerSelect
                 onValueChange={(value) => {setColor(value), console.log(value)}}
                 items={[
                     { label: "White", value: "white" },
                     { label: "Gray", value: "gray" },
                     { label: "Black", value: "black" },
                     { label: "Blue", value: "blue" },
                     { label: "Brown", value: "brown" },
                     { label: "Green", value: "green" },
                     { label: "Orange", value: "orange" },
                     { label: "Pink", value: "pink" },
                     { label: "Purple", value: "purple" },
                     { label: "Red", value: "red" },
                     { label: "Turquoise", value: "turquoise" },
                     { label: "Yellow", value: "yellow" },
                  ]}
             />
         </View>

        <View style={{flexDirection:'row', width: '50%'}}>
        <Mytextinput
        placeholder="Start Date.."
        onFocus={ () => _showDateTimePicker() }
        value={startDate}
        />
          <Mycalendar  style={styles.modal} title="Open" customClick={() => {setOpenStartDate(true), console.log("Da")}}/>
           <DatePicker
              modal
              mode="date"
              open={openStartDate}
              date={date}
              onConfirm={(date) => {
                setOpenStartDate(false)
                setDisplayStartDate(true)
                setStartDate(date.toLocaleString())
              }}
              onCancel={() => {
                setOpenStartDate(false)
              }}
          />
      
      </View>


          {/* <Mytextinput
                placeholder="Enter end date"
                onChangeText={(endDate) => setEndDate(endDate)}
                maxLength={10}
                keyboardType="numeric"
                style={{ padding: 10 }}
              /> */}
                            <View style={{flexDirection:'row'}}>
              <Mytextinput
        placeholder=" End Date.."
        onFocus={ () => _showDateTimePicker() }
        value={endDate}
        />
            <Mycalendar  style={styles.modal} title="Open" customClick={() => {setOpenEndDate(true), console.log("Da")}}/>
           <DatePicker
              modal
              mode="date"
              open={openEndDate}
              date={date}
              onConfirm={(date) => {
                setOpenEndDate(false)
                setDisplayEndDate(true)
                setEndDate(date.toLocaleString())
              }}
              onCancel={() => {
                setOpenEndDate(false)
              }}
          />
      
      </View>
            <Mytextinput
                placeholder="Enter other instructions"
                onChangeText={(others) => setOthers(others)}
                maxLength={10}
                keyboardType="numeric"
                style={{ padding: 10 }}
              />
          <View style={styles.picker}>
             <Text style={styles.text}>Instructions:</Text>
             <RNPickerSelect
                 onValueChange={(instructions) => {setInstructions(instructions), console.log(instructions)}}
                 items={[
                     { label: "Before food", value: "before" },
                     { label: "With food", value: "with" },
                     { label: "After food", value: "after" },
                     { label: "Unknown", value: "unknown" },

                  ]}
             />
         </View>

         <View style={styles.picker}>
            <Text style={styles.text}>Frequency:</Text>
             <RNPickerSelect
                 onValueChange={(value) => {setFrequency(value), console.log(value)}}
                 items={[
                     { label: "Daily", value: "daily" },
                     { label: "Specific Days", value: "daysSpecific" },
                     { label: "Days Interval", value: "daysInterval"},
                     { label: "Sometimes", value: "sometimes"}
                  ]}
             />
         </View>
                    <View style = {styles.inputView}>
                        {frequency === "daily" ?
                       <View>
                          <Daily setTimesPerDay ={setTimesPerDay}> </Daily> 
                          <View>
                             {get_time()}
                            </View>  
                        </View>
                          :
                        frequency === "daysSpecific" ?
                        <View>
                          <View style={styles.checkboxContainer}>
                          <CheckBox
                             value={Monday}
                             onValueChange={setMonday}
                             style={styles.checkbox}/>
                            <Text style={styles.titleText}>Monday</Text>
                          </View>
                        
                        <View style={styles.checkboxContainer}>
                          <CheckBox
                            value={Tuesday}
                            onValueChange={setTuesday}
                            style={styles.checkbox}/>
                          <Text style={styles.titleText}>Tuesday</Text>
                        </View>
                
                        <View style={styles.checkboxContainer}>
                          <CheckBox
                            value={Wednesday}
                            onValueChange={setWednesday}
                            style={styles.checkbox}/>
                          <Text style={styles.titleText}>Wednesday</Text>
                        </View>
                      
                        <View style={styles.checkboxContainer}>
                          <CheckBox
                            value={Thursday}
                            onValueChange={setThursday}
                            style={styles.checkbox}/>
                          <Text style={styles.titleText}>Thursday</Text>
                        </View>
                
                        <View style={styles.checkboxContainer}>
                          <CheckBox
                            value={Friday}
                            onValueChange={setFriday}
                            style={styles.checkbox}/>
                        <Text style={styles.titleText}>Friday</Text>
                        </View>
                
                        <View style={styles.checkboxContainer}>
                          <CheckBox
                            value={Saturday}
                            onValueChange={setSaturday}
                            style={styles.checkbox}/>
                        <Text style={styles.titleText}>Saturday</Text>
                        </View>
                      
                        <View style={styles.checkboxContainer}>
                          <CheckBox
                            value={Sunday}
                            onValueChange={setSunday}
                            style={styles.checkbox}/>
                        <Text style={styles.titleText}>Sunday</Text>
                        </View> 
                        {Monday || Tuesday || Wednesday || Thursday || Friday || Saturday || Sunday ? 
                        <View>
                          <Daily setTimesPerDay ={setTimesPerDay}> </Daily> 
                          <View>
                             {get_time()}
                            </View>  
                        </View> : null}
                      </View> 
                      :
                        frequency === "daysInterval" ?
                        <View>
                          <DaysInterval setHowOften ={setHowOften}> </DaysInterval> 
                          {howOften ? 
                          <View>
                           <Daily setTimesPerDay ={setTimesPerDay}> </Daily> 
                            <View>
                               {get_time()}
                              </View>  
                         </View> : null }
                        </View>
                      :
                        frequency === "sometimes" ? 
               
                          <Text style={styles.alarmText}> No reminder can be set if the drug is taken only sometimes  </Text> : null }
                        
                    </View>

              <Mybutton title="Submit" customClick={register_drug} />
          

            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
    
export default AddDrug;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  alarmText:{
    fontSize: 20,
    fontFamily: 'RobotoBold',
    color: 'white',
    fontWeight: 'bold',
    padding: 10,
    marginTop: 16,
    marginLeft: 35,
    marginRight: 35,
  },
  pickerNew:{
    flexDirection: 'column',
    flexWrap: "wrap",
    backgroundColor: '#2089dc',
    color: '#ffffff',
    padding: 10,
    marginTop: 16,
    marginLeft: 35,
    marginRight: 35,
    borderRadius: 20,
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
picker2:{
  alignItems: 'center',
  justifyContent  : "center",
  backgroundColor: '#2089dc',
  color: '#ffffff',
  padding: 10,
  borderRadius: 20,
},
text: {
  color: '#ffffff',
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
  
  titleView:{
    padding: 5,
},
titleText:{
    fontSize: 20,
    fontFamily: 'RobotoBold',
    color: 'white',
    fontWeight: 'bold' 
},
text1: {
  fontSize: 20,
  fontFamily: 'RobotoBold',
  fontWeight: '700',
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
