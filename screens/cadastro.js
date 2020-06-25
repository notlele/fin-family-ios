import React, { useState } from 'react';
import { Text, View, TextInput, Icon } from 'react-native';
import styles from '../constants/loginStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { TextInputMask } from 'react-native-masked-text';
import { navigation, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import { useInput } from '../hooks/useInput';
import { sendData } from '../hooks/sendData';
import { getCache } from '../hooks/getCache';

// TODO: Icons in inputs + phone field css

export default function Cadastro(props) {
	const navigation = useNavigation();
	const Cadastro1 = () => {
		const [nome, setNome] = useState('');
		const [cpf, setCpf] = useState('');
		const [dob, setDob] = useState('');

		const handleSubmit = (evt) => {
			// evt.preventDefault();
			// check data before next screen
			const cpfIsValid = cpf.cpfField.isValid();
			const dobIsValid = dob.datetimeField.isValid();
			const unmaskedCpf = cpf.cpfField.getRawValue();

			if (cpfIsValid && dobIsValid) {
				// save data locally
				async () => {
					const nomeCache = ['@nome', nome];
					const cpfCache = ['@cpf', unmaskedCpf];
					const dobCache = ['@dob', dob];
					try {
						await AsyncStorage.multiSet([nomeCache, cpfCache, dobCache]);
					} catch (e) {
						console.log(e);
						//save error
					}
				};
				return navigation.navigate('Cadastro2');
			} else if (!cpfIsValid) {
				setCpf('');
				return () =>
					Alert.alert('Invalid CPF', 'Check your CPF.', [{ text: 'OK' }], {
						cancelable: false,
					});
			} else if (!dobIsValid) {
				setDob('');
				return () =>
					Alert.alert(
						'Invalid date input',
						'Check your birth date.',
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
						<Text style={styles.subtitle}>Personal Information</Text>
						<form style={styles.form} onSubmit={handleSubmit}>
							<TextInput
								style={styles.input}
								placeholder='Name'
								value={nome}
								onChangeText={(e) => setNome(e)}
							/>
							<TextInputMask
								style={styles.input}
								type={'cpf'}
								value={cpf}
								includeRawValueInChangeText={true}
								onChangeText={(e) => setCpf(e)}
								// add the ref to a local var
								// ref={(ref) => cpfField = ref}
								placeholder='CPF'
								// maxLength={14}
							/>
							<TextInputMask
								style={styles.input}
								type={'datetime'}
								options={{
									format: 'DD/MM/YYYY',
								}}
								value={dob}
								onChangeText={(e) => setDob(e)}
								// ref={(ref) => {
								// 	dtField = ref;
								// }}
								placeholder='Date of Birth'
								// maxLength={8}
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
						<form>
							<TextInput
								style={styles.input}
								keyboardobype='email-address'
								textContentType='emailAddress'
								placeholder='E-Mail for access'
								value={email}
								onChangeText={(e) => setEmail(e)}
							/>
							<TextInput
								style={styles.input}
								type='password'
								secureTextEntry={true}
								placeholder='Password'
								value={password}
								onChangeText={(e) => setPassword(e)}
							/>
							<TextInput
								style={styles.input}
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

	const Cadastro3 = () => {
		const [nickname, setNickname] = useState('');
		const [areaCode, setAreaCode] = useState('');
		const [phone, setPhone] = useState('');

		const handleSubmit = (evt) => {
			// evt.preventDefault();
			// save data locally
			async () => {
				const nicknameCache = ['@nickname', nickname];
				const areaCodeCache = ['@areaCode', areaCode];
				const phoneCache = ['@phone', phone];
				try {
					await AsyncStorage.multiSet([
						nicknameCache,
						areaCodeCache,
						phoneCache,
					]);
				} catch (e) {
					console.log(e);
					//save error
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
						<Text style={styles.titleCreate}>Create Account</Text>
						<Text style={styles.subtitle}>Access Information</Text>
						<form>
							<TextInput
								style={styles.input}
								type='text'
								placeholder='Nickname'
								value={nickname}
								onChangeText={(e) => setNickname(e)}
							/>
							<View style={styles.phoneNumber}>
								<TextInputMask
									style={styles.inputSmall}
									type={'custom'}
									options={{
										mask: '(99)',
									}}
									value={areaCode}
									onChangeText={(e) => setAreaCode(e)}
									textContentType='number'
									placeholder='(__)'
								/>
								<TextInputMask
									style={styles.inputMedium}
									type={'cel-phone'}
									options={{
										maskType: 'BRL',
										withDDD: false,
									}}
									value={phone}
									onChangeText={(e) => setPhone(e)}
									textContentType='number'
									placeholder='_____-____'
								/>
							</View>

							<View style={styles.buttonForm}>
								<TouchableOpacity color='#3ED4AF'>
									{/* <input type='submit' value='Next' /> */}
									<Text
										style={styles.txt}
										onPress={((evt) => evt.preventDefault(), handleSubmit)}>
										Finish
									</Text>
								</TouchableOpacity>
							</View>
						</form>

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

	return <Cadastro1 />;
}
