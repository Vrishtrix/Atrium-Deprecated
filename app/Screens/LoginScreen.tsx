import React from 'react';
import {
      TextInput,
      StyleSheet,
      View,
      Text,
      TouchableOpacity,
      Image
} from 'react-native';

import axios from 'axios';

const doLogin = (phoneNo: string) => {

      const verify = '62fe5e897218bcf843eefea0'

      axios.post('localhost:80/api/login/otp/gen', {
            phone: phoneNo,
            verify: verify
      })
      .then( (res) => {
            res.status ? 'go to otp page' : 'go to register page'
      })
      .catch( (err) => {
            console.error('We have encountered a problem while logging you in: \n', err);
      });
}

export const LoginScreen = (props: any) => {

      const [ phoneNo, changePhoneNo ] = React.useState('')

      return (
            <View style={styles.container}>
                  <View style={styles.topcontainer}>

                        <Text style={styles.title}>
                              Welcome to Atrium. Please enter your mobile number.
                        </Text>

                  </View>

                  <View style={styles.middlecontainer}>

                        <TextInput 
                              placeholder='Phone Number'
                              keyboardType='number-pad'
                              value={phoneNo}
                              maxLength={10}
                              onChangeText={ (val) => changePhoneNo(val) }
                              style={styles.input}
                        />

                        <TouchableOpacity 

                              style={styles.button}
                        >
                              <Text style={styles.buttontext}> Send OTP </Text>
                        </TouchableOpacity>

                  </View>

                  <View style={styles.bottomcontainer}>

                        <Image
                              source={require('../assets/images/logo.png')}
                              style={styles.logo}
                        />
                        
                  </View>
            </View>
      );
}

const styles = StyleSheet.create({
      container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff'
      },

      topcontainer: {
            flex: 0.3,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'transparent'
      },

      middlecontainer: {
            flex: 0.3,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'transparent'
      },

      bottomcontainer: {
            flex: 0.3,
            alignItems: 'center',
            justifyContent: 'flex-end',
            backgroundColor: 'transparent'
      },

      title: {
            fontFamily: 'museo-sans-regular',
            fontSize: 20,
            padding: 10,
            textAlign: 'center'
      },

      input: {
            height: 50,
            paddingHorizontal: '20%',
            marginBottom: 25,
            borderBottomWidth: 1
      },

      button: {
            backgroundColor: '#2e279d',
            borderRadius: 10,
            padding: 15,
            paddingHorizontal: '20%'
      },

      buttontext: {
            fontFamily: 'museo-sans-regular',
            fontSize: 20,
            color: '#fff'
      },

      logo: {
            resizeMode: 'contain',
            alignSelf: 'flex-end',
            height: 50
      }
});