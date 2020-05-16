import * as Font from 'expo-font' 

export const loadResourcesAsync = async() => {
	await Promise.all([
		Font.loadAsync({
			'museo-sans-regular': require('../assets/fonts/museo-sans-regular.ttf')
		})
	])
}

export const handleLoadingError = (error: Error) => {
	console.warn('\n', error)
}