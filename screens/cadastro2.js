import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import styles from '../constants/loginStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { Icon, Input } from 'react-native-elements';
import { navigation, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import { useInput } from '../hooks/useInput';
import { sendData } from '../hooks/sendData';
import { getCache } from '../hooks/getCache';

// TODO: Icons in inputs + phone field css

export default function Cadastro2(props) {
	const navigation = useNavigation();

	const Cadastro2 = () => {
		const [email, setEmail] = useState('');
		const [password, setPassword] = useState('');
		const [password2, setPassword2] = useState('');

		const handleSubmit = (evt) => {
			// evt.preventDefault();
			if (password === password2) {
				// save data locally
				async () => {
					const emailCache = ['@email', email];
					const passwordCache = ['@password', password];
					try {
						await AsyncStorage.multiSet([emailCache, passwordCache]);
					} catch (e) {
						console.log(e);
						//save error
					}
				};
				return navigation.navigate('Cadastro3');
			} else {
				return () =>
					Alert.alert(
						'Passwords do not match',
						'Type the password again.',
						[{ text: 'OK' }],
						{
							cancelable: false,
						}
					);
			}
		};

		return (
			<View style={styles.bg}>
				<LinearGradient
					colors={['rgba(52,202,154,0.8)', 'rgba(160,61,179,0.45)']}
					start={[0.5, 0.5]}
					end={[0.3, 1.0]}
					style={{ flex: 1 }}>
					<View style={styles.container}>
						<Text style={styles.titleCreate}>Create Account</Text>
						<Text style={styles.subtitle}>Access Information</Text>
						<View style={styles.form}>
							<form onSubmit={handleSubmit}>
								<Input
									leftIcon={
										<Icon
											name='mail-outline'
											type='material'
											color='#rgba(0,0,0,0.7)'
										/>
									}
									leftIconContainerStyle={{ marginLeft: 15, marginRight: 5 }}
									inputContainerStyle={styles.input}
									keyboardobype='email-address'
									textContentType='emailAddress'
									placeholder='E-mail'
									value={email}
									onChangeText={(e) => setEmail(e)}
								/>
								<Input
									leftIcon={
										<Icon
											name='lock-outline'
											type='material'
											color='#rgba(0,0,0,0.7)'
										/>
									}
									leftIconContainerStyle={{ marginLeft: 15, marginRight: 5 }}
									inputContainerStyle={styles.input}
									type='password'
									secureTextEntry={true}
									placeholder='Password'
									value={password}
									onChangeText={(e) => setPassword(e)}
								/>
								<Input
									leftIcon={
										<Icon
											name='lock-outline'
											type='material'
											color='#rgba(0,0,0,0.7)'
										/>
									}
									leftIconContainerStyle={{ marginLeft: 15, marginRight: 5 }}
									inputContainerStyle={styles.input}
									type='password'
									secureTextEntry={true}
									placeholder='Confirm password'
									value={password2}
									onChangeText={(e) => setPassword2(e)}
								/>
								<View style={styles.buttonForm}>
									<TouchableOpacity color='#3ED4AF'>
										{/* <input type='submit' value='Next' /> */}
										<Text
											style={styles.txt}
											onPress={((evt) => evt.preventDefault(), handleSubmit)}>
											Next
										</Text>
									</TouchableOpacity>
								</View>
							</form>
						</View>

						<View style={styles.buttonHelp}>
							<TouchableOpacity color='#3ED4AF'>
								<Text style={styles.buttonHelp}>Need Help?</Text>
							</TouchableOpacity>
						</View>
					</View>
				</LinearGradient>
			</View>
		);
	};

	return <Cadastro2 />;
}
