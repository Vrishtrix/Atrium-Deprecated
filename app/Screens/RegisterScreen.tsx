import React from 'react';
import { 
      TextInput,
      StyleSheet,
      TouchableOpacity,
      View,
      Text,
      Image
} from 'react-native';

import { signup } from '../core/mutations';
import { useMutation } from '@apollo/react-hooks';

export const RegisterScreen = ({ navigation }: { navigation: any }) => {   
      
      const buttonHandler = (firstname: string, lastname: string, phone: string) => {
            changeFirstName(firstname);
            changeLastName(lastname);
            changePhoneNo(phone);
/*
            if (phoneNo.length < 10 && firstName.length < 1 && lastName.length < 1) {
                  changeButtonDisabled(true);
            } else {
                  changeButtonDisabled(false);
            }
*/
      }

      const onPress = () => {
            doRegister({ variables: {verify, firstname, lastname, phone} });
      }

      const [ doRegister, {loading} ] = useMutation(signup, {
            onCompleted: async(data) => {
                  const hash = data.signup.token
                  console.log(hash)
                  navigation.navigate('Verify', { hash });
            }
      });

      const verify = '62fe5e897218bcf843eefea0';
      const [ firstname, changeFirstName ] = React.useState('');
      const [ lastname, changeLastName ] = React.useState('');
      const [ phone, changePhoneNo ] = React.useState('');
      const [ buttonDisabled, changeButtonDisabled ] = React.useState(false)

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
                              value={firstname}
                              onChangeText={ (val) => buttonHandler(val, lastname, phone) }
                              style={styles.input}
                        />

                        <TextInput 
                              placeholder='Last Name'
                              value={lastname}
                              onChangeText={ (val) => buttonHandler(firstname, val, phone) }
                              style={styles.input}
                        />

                        <TextInput 
                              placeholder='Phone Number'
                              keyboardType='number-pad'
                              value={phone}
                              maxLength={10}
                              onChangeText={ (val) => buttonHandler(firstname, lastname, val) }
                              style={styles.input}
                        />

                        <TouchableOpacity
                              disabled={buttonDisabled}
                              onPress={ () => onPress() }
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