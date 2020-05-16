import React from 'react';
import {
      ActivityIndicator,
      Dimensions,
      StyleSheet,
      View,
      Image
} from 'react-native';

export const LoadingScreen = (props: any) => (
      <View style={styles.container}>
            <Image
                  source={require('../assets/images/logo.png')}
                  style={styles.logo}
            />

            <ActivityIndicator 
                  size='small'
                  color='#2e279d'
            />
      </View>
)

const win = Dimensions.get('screen')

const styles = StyleSheet.create({
      container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff'
      },

      logo: {
            resizeMode: 'contain',
            height: 50,
            width: win.width/2
      }
})