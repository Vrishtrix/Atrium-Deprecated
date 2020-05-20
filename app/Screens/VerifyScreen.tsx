import React from 'react';
import {
      AsyncStorage,
      TextInput,
      StyleSheet,
      View,
      Text,
      TouchableOpacity,
      Image,
      Modal
} from 'react-native';

import axios from 'axios';

export const VerifyScreen = ({ route, navigation }: { route: any, navigation: any }) => {

      const [ wrongOTP, changeWrongOTP ] = React.useState(false);
      const [ OTP, changeOTP ] = React.useState('');

      const doVerification = (OTP: string) => {

            const { hash } = route.params;
            const verify = '62fe5e897218bcf843eefea0'
      
            axios.post('https://atrium-code.herokuapp.com/api/login/otp/verify', {
                  otp: OTP,
                  hash: hash,
                  verify: verify
            })
            .then( (res) => {
                  if(res.data.token != null && res.data.status == true) {
                        //await AsyncStorage.setItem( '@MySuperStore:atriumtoken', JSON.stringify(res.data.token));
                        navigation.navigate('Dashboard')
                  } else {
                        changeWrongOTP(true);
                  }
            })
            .catch( (err) => {
                  console.error('We have encountered a problem while logging you in: \n', err);
            });
      }

      return (
            <View style={styles.container}>

                  <Modal
                        animationType='slide'
                        visible={wrongOTP}
                  >

                  </Modal>

                  <View style={styles.topcontainer}>

                        <Text style={styles.title}>
                              Welcome to Atrium. Please enter your mobile number.
                        </Text>

                  </View>

                  <View style={styles.middlecontainer}>

                        <TextInput 
                              placeholder='One-Time Password'
                              keyboardType='number-pad'
                              value={OTP}
                              maxLength={6}
                              onChangeText={ (val) => changeOTP(val) }
                              style={styles.input}
                        />

                        <TouchableOpacity 
                              onPress={ () => doVerification(OTP) }
                              style={styles.button}
                        >
                              <Text style={styles.buttontext}> Login </Text>
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