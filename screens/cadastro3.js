import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import styles from '../constants/loginStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { Icon, Input } from 'react-native-elements';
import { navigation, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import { useInput } from '../hooks/useInput';
import { getCache } from '../hooks/getCache';

// TODO: Icons in inputs + phone field css

export default function Cadastro3(props) {
	const navigation = useNavigation();

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
											name='perm-identity'
											type='material'
											color='#rgba(0,0,0,0.7)'
										/>
									}
									leftIconContainerStyle={{ marginLeft: 15, marginRight: 5 }}
									inputContainerStyle={styles.input}
									type='text'
									placeholder='Nickname'
									value={nickname}
									onChangeText={(e) => setNickname(e)}
								/>
								<View style={styles.phoneNumber}>
									<Input
										containerStyle={styles.inputCSmall}
										inputContainerStyle={styles.inputSmall}
										options={{
											mask: '(99)',
										}}
										value={areaCode}
										onChangeText={(e) => setAreaCode(e)}
										textContentType='number'
										placeholder='(__)'
									/>
									<Input
										leftIcon={
											<Icon
												name='phone'
												type='material'
												color='#rgba(0,0,0,0.7)'
											/>
										}
										leftIconContainerStyle={{ marginLeft: 15, marginRight: 5 }}
										inputContainerStyle={styles.input}
										containerStyle={styles.inputMedium}
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

	return <Cadastro3 />;
}
