import React from 'react';
import {
      StyleSheet,
      View,
      Text
} from 'react-native';

export const DashScreen = ({ navigation }: { navigation: any }) => {

      return(
            <View style={styles.container}>
                  <Text> It worked! </Text>
            </View>
      );
}

const styles = StyleSheet.create({
      container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff'
      }
});