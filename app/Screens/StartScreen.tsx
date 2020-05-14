import React, { Component } from 'react';
import { 
      StyleSheet, 
      View, 
      Image, 
      Text, 
      TouchableOpacity 
} from 'react-native';

import Svg, { Ellipse } from 'react-native-svg';

export const StartScreen = (props: any) => {
      return (
            <View style={styles.container}>
                  <View style={styles.ellipseStack}>
                        <Svg viewBox='0 0 470.03 319.9' style={styles.ellipse}>
                              <Ellipse
                                    strokeWidth={0}
                                    fill='rgba(223,246,240,1)'
                                    cx={235}
                                    cy={160}
                                    rx={235}
                                    ry={160}
                              />
                        </Svg>
                  
                        <Image
                              source={require('../assets/images/gametime.png')}
                              resizeMode='contain'
                              style={styles.image}
                        />
                  
                        <Image
                              source={require('../assets/images/logo1.png')}
                              resizeMode='contain'
                              style={styles.image2}
                        />

                        <Text style={styles.loremIpsum}>
                              Winning isn&#39;t everything, but wanting to win is.
                        </Text>
                  </View>
            
                  <TouchableOpacity style={styles.button}>
                        <Text style={styles.getStarted}>Get Started</Text>
                  </TouchableOpacity>
                  
                  <Text style={styles.orLogin}>Have an accout already? Login.</Text>
            </View>
  );
}

const styles = StyleSheet.create({
      container: {
            flex: 1
      },

      ellipse: {
            top: 39,
            width: 470,
            height: 320,
            position: 'absolute',
            left: 18
      },

      image: {
            top: 0,
            left: 0,
            width: 507,
            height: 524,
            position: 'absolute'
      },

      image2: {
            top: 407,
            left: 173,
            width: 161,
            height: 164,
            position: 'absolute'
      },

      loremIpsum: {
            top: 534,
            left: 127,
            position: 'absolute',
            fontFamily: 'roboto-regular',
            color: 'rgba(98,98,98,1)',
            height: 91,
            width: 254,
            textAlign: 'center',
            fontSize: 15
      },

      ellipseStack: {
            width: 507,
            height: 625,
            marginTop: -83,
            marginLeft: -66
      },

      button: {
            width: 296,
            height: 67,
            backgroundColor: 'rgba(77,128,228,1)',
            borderRadius: 10,
            shadowColor: 'rgba(0,0,0,1)',
            shadowOffset: {
                  width: 5,
                  height: 5
            },
            elevation: 60,
            shadowOpacity: 0.3,
            shadowRadius: 20,
            marginTop: 40,
            marginLeft: 39
      },

      getStarted: {
            fontFamily: 'balsamiq-sans-regular',
            color: 'rgba(255,255,255,1)',
            height: 34,
            width: 168,
            fontSize: 25,
            textAlign: 'center',
            marginTop: 18,
            marginLeft: 64
      },

      orLogin: {
            fontFamily: 'roboto-regular',
            color: '#121212',
            height: 32,
            width: 318,
            fontSize: 20,
            textAlign: 'center',
            marginTop: 51,
            marginLeft: 28
      }
});
