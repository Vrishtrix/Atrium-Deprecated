import React from 'react';
import { StyleSheet, View } from 'react-native';

import { AppLoading } from 'expo';
import { loadResourcesAsync, handleLoadingError } from './core/resources'

//Screens
import { LoadingScreen, LandingScreen, LoginScreen } from './Screens';


export default function App() {

  const [isLoadingComplete, setLoadingComplete] = React.useState(false)
  
  if (!isLoadingComplete) {
        return (
            <>
            <LoadingScreen />
            <AppLoading
                startAsync={loadResourcesAsync}
                onError={handleLoadingError}
                onFinish={() => setLoadingComplete(true)}
            />
            </>
        )
  }
  return (
    <View style={styles.container}>
      <LoginScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});