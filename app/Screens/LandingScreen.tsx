import React from 'react';
import {
      Dimensions,
      StyleSheet,
      View,
      Text,
      TouchableOpacity,
      Image
} from 'react-native';

import * as Animatable from 'react-native-animatable';

export const LandingScreen = (props: any) => (
      <View style={styles.container}>
            <View style={styles.topcontainer}>

            </View>


            <View style={styles.middlecontainer}>
                  <Image
                        source={require('../assets/images/logo.png')}
                        style={styles.logo}
                  />

                  <Animatable.Text 
                        style={styles.description}
                        animation='slideInUp'
                        duration={2500}
                  >
                        Winning isn't everything, but wanting to win is.
                  </Animatable.Text>
            </View>

            <View style={styles.bottomcontainer}>
                  <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttontext}> Get Started! </Text>
                  </TouchableOpacity>
            </View>
      </View>
);

const win = Dimensions.get('screen');

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
            backgroundColor: '#fff'
      },

      middlecontainer: {
            flex: 0.3,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff'
      },

      bottomcontainer: {
            flex: 0.3,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff'
      },

      logo: {
            resizeMode: 'contain',
            height: 50,
            width: win.width/1.5
      },

      description: {
            fontFamily: 'museo-sans-regular',
            fontSize: 14
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
      }
});