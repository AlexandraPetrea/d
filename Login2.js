import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Dimensions,
  TextInput
} from 'react-native';
import {
  TextField,
  FilledTextField,
  OutlinedTextField,
} from 'react-native-material-textfield';

const {width, height} = Dimensions.get('window');

const LoginContainer = ({login}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        style={styles.imageContainer}
        source={require('../../assets/background.jpg')}>
        <View style={styles.overlay} />
        <View style={styles.title}>
          <Text style={styles.green}>Up</Text>
          <Text style={styles.orange}>Carrot</Text>
        </View>
        <View style={styles.formContainer}>
          <TextInput
            label="Email"
            keyboardType="email-address"
            textColor="black"
            baseColor="hsla(229, 6%, 43%, 1)"
            tintColor="black"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            label="Password"
            secureTextEntry={true}
            textContentType="password"
            password={true}
            textColor="white"
            title="Choose wisely"
            baseColor="hsla(229, 6%, 43%, 1)"
            tintColor="white"
            multiline={false}
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => login(email, password)}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </ImageBackground>
    </ScrollView>
  );
};
export default LoginContainer;

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
    backgroundColor: 'rgba(13, 13, 23, 0.9)',
    ...StyleSheet.absoluteFillObject,
  },
  formContainer: {
    width: '80%',
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
  green: {
    fontSize: 50,
    fontFamily: 'RobotoBold',
    fontWeight: '700',
    color: '#44f804',
  },
  orange: {
    fontSize: 50,
    fontFamily: 'RobotoBold',
    fontWeight: '700',
    color: '#f8a814',
  },
});