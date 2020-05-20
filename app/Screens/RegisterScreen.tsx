import React from 'react';
import { 
      TextInput,
      StyleSheet,
      TouchableOpacity,
      View,
      Text,
      Image
} from 'react-native';

import axios from 'axios';

export const RegisterScreen = ({ navigation }: { navigation: any }) => {

      const buttonHandler = (firstName: string, lastName: string, phoneNo: string) => {
            changeFirstName(firstName);
            changeLastName(lastName);
            changePhoneNo(phoneNo);

            if (phoneNo.length < 10 && firstName.length < 1 && lastName.length < 1) {
                  changeButtonDisabled(true);
            } else {
                  changeButtonDisabled(false);
            }
      }

      const doRegister = (firstName: string, lastName: string, phoneNo: string) => {
            
            const verify = '62fe5e897218bcf843eefea0'

            axios.post('https://atrium-code.herokuapp.com/api/register', {
                  firstname: firstName,
                  lastname: lastName,
                  phone: phoneNo,
                  verify: verify
            })
            .then( (res) => {

                  const hash = res.data.hash;
                  res.data.status ? navigation.navigate('Verify', { hash }) : navigation.navigate('Login')
            })
            .catch( err => console.error(err) );

      }

      const [ firstName, changeFirstName ] = React.useState('');
      const [ lastName, changeLastName ] = React.useState('');
      const [ phoneNo, changePhoneNo ] = React.useState('');
      const [ buttonDisabled, changeButtonDisabled ] = React.useState(true)

      return(
            <View style={styles.container}>
                  <View style={styles.topcontainer}>
                        <Text style={styles.title}>
                              Welcome to Atrium! Please Register below!
                        </Text>
                  </View>

                  <View style={styles.middlecontainer}>
                        
                        <TextInput 
                              placeholder='First Name'
                              value={firstName}
                              onChangeText={ (val) => buttonHandler(val, lastName, phoneNo) }
                              style={styles.input}
                        />

                        <TextInput 
                              placeholder='Last Name'
                              value={lastName}
                              onChangeText={ (val) => buttonHandler(firstName, val, phoneNo) }
                              style={styles.input}
                        />

                        <TextInput 
                              placeholder='Phone Number'
                              keyboardType='number-pad'
                              value={phoneNo}
                              maxLength={10}
                              onChangeText={ (val) => buttonHandler(firstName, lastName, val) }
                              style={styles.input}
                        />

                        <TouchableOpacity
                              disabled={buttonDisabled}
                              onPress={ () => doRegister(firstName, lastName, phoneNo) }
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
      )
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