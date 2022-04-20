import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Mycalendar = (props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.customClick}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#2089dc',
    color: '#ffffff',
    padding: 10,
    marginTop: 16,
    marginLeft: 35,
    marginRight: 35,
    borderRadius: 20,
  },
  text: {
    color: '#ffffff',
  },
});

export default Mycalendar;
