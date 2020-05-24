import React from 'react';
import {
      TextInput,
      StyleSheet,
      View,
      Text,
      TouchableOpacity,
      Image
} from 'react-native';

import { checkphone } from '../core/mutations';
import { useMutation } from '@apollo/react-hooks';

import { LoadingScreen } from './LoadingScreen';

export const LoginScreen = ({ navigation }: { navigation: any }) => {

      const verify = '62fe5e897218bcf843eefea0';
      const [ phone, changePhone ] = React.useState('');
      const [isLoadingComplete, setLoadingComplete] = React.useState(true);

      const onPress = () => {
            doLogin({ variables: {verify, phone} });
      }

      const [ doLogin, {loading} ] = useMutation(checkphone, {
            onCompleted: async(data) => {
                  const hash = data.checkphone.token
                  setLoadingComplete(true);
                  if (data.checkphone.code = '100' && hash != null) {
                        await navigation.navigate('Verify', { hash, phone })
                  } else {
                        await navigation.navigate('Register')
                  }
            }
      });

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
                              value={phone}
                              maxLength={10}
                              onChangeText={ (val) => changePhone(val) }
                              style={styles.input}
                        />

                        <TouchableOpacity 
                              onPress={ () => { setLoadingComplete(false); onPress() } }
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