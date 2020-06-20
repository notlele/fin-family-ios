import React from 'react';
import { Text, View, TextInput } from 'react-native';
import styles from '../constants/loginStyles';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { navigation, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import { useInput } from '../hooks/useInput';
import { sendData } from '../hooks/sendData';
import { getCache } from '../hooks/getCache';

export default function Login(props) {
	const navigation = useNavigation();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const handleSubmit = (event) => {
		event.preventDefault();
		// save data locally
		multiSet = async () => {
			const emailCache = ['@email', email];
			const passwordCache = ['@password', password];
			try {
				await AsyncStorage.multiSet([emailCache, passwordCache]);
			} catch (e) {
				console.log(e);
				//save error
			}
		};

		// set json
		setObjectValue = async (value) => {
			try {
				const jsonValue = JSON.stringify({
					email: getCache('email'),
					password: getCache('password')
				});
				// await AsyncStorage.setItem('@cadastro', jsonValue);
				sendData('login', jsonValue);
				console.log(jsonValue);
				// await AsyncStorage.clear();
			} catch (e) {
				console.log(e);
				// save error
			}
		};
		return navigation.navigate('Groups');
	};
	return (
		<View style={styles.bg}>
			<LinearGradient
				colors={['rgba(52,202,154,0.8)', 'rgba(160,61,179,0.45)']}
				start={[0.5, 0.5]}
				end={[0.3, 1.0]}
				style={{ flex: 1 }}>
				<View style={styles.container}>
					<Text style={styles.title}>FinFamily</Text>
					<form>
						<TextInput
							style={styles.input}
							keyboardobype='email-address'
							textContentType='emailAddress'
							placeholder='E-Mail for access'
							value={email}
							onChangeText={(e) => setEmail(e.target.value)}
						/>
						<TextInput
							style={styles.input}
							type='password'
							secureTextEntry={true}
							placeholder='Password'
							value={password}
							onChangeText={(e) => setPassword(e.target.value)}
						/>
						<View style={styles.buttonForm}>
							<TouchableOpacity
								color='#3ED4AF'
								type='submit'
								onPress={handleSubmit}>
								<Text style={styles.txt}>Login</Text>
							</TouchableOpacity>
						</View>
					</form>

					<View style={styles.buttonHelp}>
						<TouchableOpacity color='#3ED4AF' type='submit'>
							<Text style={styles.buttonHelp}>Need Help?</Text>
						</TouchableOpacity>
					</View>
				</View>
			</LinearGradient>
		</View>
	);
}
