import React from 'react';
import { StyleSheet, View } from 'react-native';

import { AppLoading } from 'expo'
import { loadResourcesAsync, handleLoadingError } from './core/resources'

//Screens
import { StartScreen } from './Screens/StartScreen';
import { LoginScreen } from './Screens/LoginScreen';

export default function App() {

  const [isLoadingComplete, setLoadingComplete] = React.useState(false)
  
  if (!isLoadingComplete) {
		return (
			<AppLoading
				startAsync={loadResourcesAsync}
				onError={handleLoadingError}
				onFinish={() => setLoadingComplete(true)}
			/>
		)
	}
  return (
    <View style={styles.container}>
      <StartScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
