import React from 'react';

import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './core/navigation';

import { AppLoading } from 'expo';
import { loadResourcesAsync, handleLoadingError } from './core/resources';

import { client } from './core/apollo';
import { ApolloProvider } from '@apollo/react-hooks';

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
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </ApolloProvider>
  );
}