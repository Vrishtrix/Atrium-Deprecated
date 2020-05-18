import React from 'react';

import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native'
import { Navigation } from './core/navigation'

import { AppLoading } from 'expo';
import { loadResourcesAsync, handleLoadingError } from './core/resources'

import { LoadingScreen } from './Screens';


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
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>

  );
}