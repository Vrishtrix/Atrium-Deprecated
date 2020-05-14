import React, { Component } from 'react';
import {
      StyleSheet,
      View,
      Text,
      TextInput,
      TouchableOpacity,
      Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import * as Font from 'expo-font';

export const LoginScreen = (props: any): JSX.Element => {
      return (
            <View style={styles.container}>
                  <View style={styles.rect}>
                        <Text style={styles.loremIpsum}>New to Atrium? Sign up!</Text>
                  </View>
                  
                  <TextInput
                        placeholder='  E-mail ID'
                        keyboardType='email-address'
                        selectionColor='rgba(208,2,27,1)'
                        style={styles.placeholder}
                  />
                  
                  <View style={styles.iconRow}>
                        <Icon name='arrow-left' style={styles.icon}></Icon>
                        <Text style={styles.signIn}>Sign-In</Text>
                  </View>
                  
                  <TextInput
                        placeholder='  Password'
                        keyboardType='default'
                        secureTextEntry={true}
                        selectionColor='rgba(208,2,27,1)'
                        style={styles.textInput}
                  />
                  
                  <View style={styles.button2StackRow}>
                        <View style={styles.button2Stack}>
                              <TouchableOpacity style={styles.button2}></TouchableOpacity>
                              <Text style={styles.forgotPassword}>Forgot Password?</Text>
                        </View>
                  
                        <TouchableOpacity style={styles.button}>
                              <Text style={styles.signIn2}>Sign-In</Text>
                        </TouchableOpacity>
                  </View>

                  <Image
                        source={require('../assets/images/logo.png')}
                        resizeMode='contain'
                        style={styles.image}
                  />
            </View>
      );
}

const styles = StyleSheet.create({
      container: {
            flex: 1
      },

      rect: {
            width: 375,
            height: 108,
            backgroundColor: '#E6E6E6',
            marginTop: 704
      },

      loremIpsum: {
            fontFamily: 'Trebuchet',
            color: '#121212',
            fontSize: 20,
            marginTop: 30,
            marginLeft: 81
      },

      placeholder: {
            fontFamily: 'Roboto',
            color: 'rgba(155,155,155,1)',
            height: 58,
            width: 324,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: 'rgba(155,155,155,1)',
            fontSize: 20,
            marginTop: -464,
            marginLeft: 25
      },

      icon: {
            color: 'rgba(128,128,128,1)',
            fontSize: 40
      },

      signIn: {
            fontFamily: 'Trebuchet',
            color: 'rgba(155,155,155,1)',
            fontSize: 25,
            textAlign: 'left',
            marginLeft: 220,
            marginTop: 8
      },

      iconRow: {
            height: 41,
            flexDirection: 'row',
            marginTop: -328,
            marginLeft: 14,
            marginRight: 26
      },
      
      textInput: {
            fontFamily: 'Roboto',
            color: 'rgba(155,155,155,1)',
            height: 58,
            width: 324,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: 'rgba(155,155,155,1)',
            fontSize: 20,
            marginTop: 308,
            marginLeft: 25
      },

      button2: {
            top: 0,
            left: 0,
            width: 147,
            height: 30,
            position: 'absolute'
      },

      forgotPassword: {
            top: 6,
            left: 0,
            position: 'absolute',
            fontFamily: 'Trebuchet',
            color: 'rgba(208,2,27,1)',
            height: 30,
            width: 147,
            fontSize: 15,
            textDecorationLine: 'underline'
      },

      button2Stack: {
            width: 147,
            height: 36,
            marginTop: 15
      },

      button: {
            width: 162,
            height: 60,
            backgroundColor: 'rgba(208,2,27,1)',
            borderRadius: 10,
            marginLeft: 16
      },

      signIn2: {
            fontFamily: 'Trebuchet',
            color: 'rgba(255,255,255,1)',
            height: 30,
            width: 162,
            fontSize: 20,
            textAlign: 'center',
            marginTop: 15
      },
      
      button2StackRow: {
            height: 60,
            flexDirection: 'row',
            marginTop: 34,
            marginLeft: 25,
            marginRight: 25
      },

      image: {
            width: 200,
            height: 200,
            marginTop: -431,
            marginLeft: 88
      }
});