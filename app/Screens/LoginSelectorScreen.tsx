import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

export const LoginSelectorScreen = (props: any): JSX.Element => {
      return (
            <View style={styles.container}>
                  
                  <Text style={styles.welcomeBack}>Welcome Back!</Text>
                  
                  <View style={styles.buttonStack}>
                        <TouchableOpacity style={styles.button} />
                        <Text style={styles.loginWithEMail}>Login with E-mail</Text>
                  </View>
                  
                  <View style={styles.button2Stack}>
                        <TouchableOpacity style={styles.button2} />
                        <Text style={styles.loginWithPhone}>Login with Phone</Text>
                  </View>
                  
                  <Image
                  source={require('../assets/images/logo1.png')}
                  resizeMode='contain'
                  style={styles.image1}
                  />
            </View>
      );
}

const styles = StyleSheet.create({
      container: {
            flex: 1,
            borderWidth: 1
      },

      welcomeBack: {
            fontFamily: 'dm-sans-regular',
            color: '#121212',
            fontSize: 25,
            textAlign: 'center',
            marginTop: 192
      },

      button: {
            top: 0,
            height: 66,
            position: 'absolute',
            borderWidth: 1,
            borderColor: '#000000',
            borderRadius: 10,
            width: 299,
            backgroundColor: 'rgba(255,255,255,1)'
      },

      loginWithEMail: {
            top: 21,
            position: 'absolute',
            fontFamily: 'roboto-regular',
            color: '#121212',
            fontSize: 20,
            textAlign: 'center',
            left: 0,
            right: 0
      },

      buttonStack: {
            height: 66,
            marginTop: 71
      },

      button2: {
            height: 66,
            position: 'absolute',
            borderWidth: 1,
            borderColor: 'rgba(70,179,230,1)',
            borderRadius: 10,
            width: 299,
            backgroundColor: 'rgba(70,179,230,1)',
            top: 0
      },

      loginWithPhone: {
            top: 20,
            position: 'absolute',
            fontFamily: 'roboto-regular',
            color: 'rgba(255,255,255,1)',
            fontSize: 20,
            textAlign: 'center',
            left: 0,
            right: 0
      },

      button2Stack: {
            height: 66,
            marginTop: 46
      },

      image1: {
            width: 161,
            height: 164,
            marginTop: 95,
            alignSelf: 'center'
      }
});