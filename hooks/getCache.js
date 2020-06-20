import AsyncStorage from '@react-native-community/async-storage';

export const getCache = async (key) => {
	try {
		return await AsyncStorage.getItem(`@${key}`);
	} catch (e) {
		console.log(e);
		// read error
	}
};
