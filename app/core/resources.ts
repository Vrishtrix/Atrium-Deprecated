import * as Font from 'expo-font' 

export const loadResourcesAsync = async() => {
	await Promise.all([
		Font.loadAsync({
			'Trebuchet': require('../assets/fonts/trebuchet-ms-regular.ttf'),
			'Roboto': require('../assets/fonts/roboto-regular.ttf')
		})
	])
}

export const handleLoadingError = (error: Error) => {
	console.warn('\n', error)
}