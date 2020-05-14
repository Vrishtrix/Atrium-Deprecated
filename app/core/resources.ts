import * as Font from 'expo-font' 

export const loadResourcesAsync = async() => {
	await Promise.all([
		Font.loadAsync({
			'roboto-regular': require('../assets/fonts/roboto-regular.ttf'),
			'balsamiq-sans-regular': require('../assets/fonts/balsamiq-sans-regular.ttf')
		})
	])
}

export const handleLoadingError = (error: Error) => {
	console.warn('\n', error)
}