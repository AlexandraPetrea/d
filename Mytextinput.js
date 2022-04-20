import React from 'react';
import { View, TextInput } from 'react-native';

const Mytextinput = (props) => {
  return (
    <View
      style={{
        marginLeft: 35,
        marginRight: 35,
        marginTop: 10,
       // borderColor: '#007FFF',
        //borderWidth: 2,
        fontFamily: 'RobotoBold',
        borderRadius: 10,
      }}>
      <TextInput
        underlineColorAndroid="transparent"
        placeholder={props.placeholder}
        placeholderTextColor="white"
        //placeholderTextColor="black"
        // backgroundColor='rgba(13, 13, 23, 0.3)'
        backgroundColor= '#2089dc'
        keyboardType={props.keyboardType}
        onChangeText={props.onChangeText}
        returnKeyType={props.returnKeyType}
        numberOfLines={props.numberOfLines}
        multiline={props.multiline}
        onSubmitEditing={props.onSubmitEditing}
        style={props.style}
        blurOnSubmit={false}
        value={props.value}
        size={700}
      />
    </View>
  );
};

export default Mytextinput;
