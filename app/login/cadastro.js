import React from 'react';
import {
	Text,
	View,
	Button,
	TextInput,
	Icon,
	// StyleSheet,
	// ScrollView,
	// AsyncStorage
} from 'react-native';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { TextInputMask } from 'react-native-masked-text';
import { navigation, useNavigation } from '@react-navigation/native';

class Cadastro1 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			nome: '',
			cpf: '',
			nasc: '',
		};

		this.handleChangeNome = this.handleChangeNome.bind(this);
		this.handleChangeCpf = this.handleChangeCpf.bind(this);
		this.handleChangeNasc = this.handleChangeNasc.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChangeNome(event) {
		this.setState({ nome: event.target.value });
	}

	handleChangeCpf(event) {
		this.setState({ cpf: event.target.value });
	}

	handleChangeNasc(event) {
		this.setState({ nasc: event.target.value });
	}

	// handlePress(pageName) {
	// 	navigation.navigate(pageName);
	// }

	handleSubmit(event) {
		// event.preventDefault();
		// check cpf before next screen
		// const cpfIsValid = this.cpfField.isValid();
		// const unmasked = this.cpfField.getRawValue();
		// const dobIsValid = this.datetimeField.isValid();

		// if (cpfIsValid && dobIsValid) {
		return () => {
			navigation.navigate('Cadastro2', {
				full_name: this.nome,
				cpf: this.cpf,
				birthday: this.dt,
			});
		};
		// } else if (!cpfIsValid) {
		// 	return () =>
		// 		Alert.alert('Invalid CPF', 'Check your CPF.', [{ text: 'OK' }], {
		// 			cancelable: false,
		// 		});
		// } else if (!dobIsValid) {
		// 	return () =>
		// 		Alert.alert(
		// 			'Invalid date input',
		// 			'Check your birth date.',
		// 			[{ text: 'OK' }],
		// 			{
		// 				cancelable: false,
		// 			}
		// 		);
		// }
	}

	render() {
		const { navigation } = this.props;
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
						<form style={styles.form}>
							<TextInput
								style={styles.input}
								placeholder='Name'
								value={this.state.nome}
								onChangeText={(text) => {
									this.handleChangeNome;
									this.setState({
										nome: text,
									});
								}}
							/>
							<TextInputMask
								style={styles.input}
								type={'cpf'}
								value={this.state.cpf}
								includeRawValueInChangeText={true}
								onChangeText={(text) => {
									this.handleChangeCpf;
									this.setState({
										cpf: text,
									});
								}}
								// add the ref to a local var
								ref={(ref) => (this.cpfField = ref)}
								placeholder='CPF'
								// maxLength={14}
							/>
							<TextInputMask
								style={styles.input}
								type={'datetime'}
								options={{
									format: 'DD/MM/YYYY',
								}}
								value={this.state.dt}
								onChangeText={(text) => {
									this.handleChangeNasc;
									this.setState({
										dt: text,
									});
								}}
								refInput={(ref) => {
									this.input = ref;
								}}
								placeholder='Date of Birth'
								// maxLength={8}
							/>
							<View style={styles.buttonForm}>
								<TouchableOpacity
									color='#3ED4AF'
									type='submit'
									onPress={this.handleSubmit}>
									<Text style={styles.txt}>Next</Text>
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
}

class Cadastro2 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			full_name: Cadastro1.nome,
			cpf: Cadastro1.cpf, // unmasked, // uses the getRawValue
			birthday: Cadastro1.nasc,
			email: '',
			password: '',
			password2: '',
		};

		this.handleChangeEmail = this.handleChangeEmail.bind(this);
		this.handleChangePassword = this.handleChangePassword.bind(this);
		this.handleChangePassword2 = this.handleChangePassword2.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChangeEmail(event) {
		this.setState({ email: event.target.value });
	}

	handleChangePassword(event) {
		this.setState({ password: event.target.value });
	}

	handleChangePassword2(event) {
		this.setState({ password2: event.target.value });
	}

	handleSubmit(event) {
		event.preventDefault();
		if (password === password2) {
			return () => {
				navigation.navigate('Cadastro3', {
					full_name: this.full_name,
					cpf: this.cpf,
					birthday: this.birthday,
					email: this.email,
					password: this.password,
				});
			};
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
	}

	render() {
		const { navigation } = this.props;
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
						<form onSubmit={this.handleSubmit}>
							<TextInput
								style={styles.input}
								keyboardType='email-address'
								textContentType='emailAddress'
								placeholder='E-Mail for access'
								value={this.state.email}
								onChangeText={(text) => {
									this.handleChangeEmail;
									this.setState({
										email: text,
									});
								}}
							/>
							<TextInput
								style={styles.input}
								type='password'
								secureTextEntry={true}
								placeholder='Password'
								value={this.state.password}
								onChangeText={(text) => {
									this.handleChangePassword;
									this.setState({
										password: text,
									});
								}}
							/>
							<TextInput
								style={styles.input}
								type='password'
								secureTextEntry={true}
								placeholder='Confirm password'
								value={this.state.password2}
								onChangeText={(text) => {
									this.handleChangePassword2;
									this.setState({
										password2: text,
									});
								}}
							/>
							<View style={styles.buttonForm}>
								<TouchableOpacity
									color='#3ED4AF'
									type='submit'
									onPress={this.handleSubmit}>
									<Text style={styles.txt}>Next</Text>
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
}

class Cadastro3 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			full_name: Cadastro1.nome,
			cpf: Cadastro1.cpf, // unmasked, // uses the getRawValue
			birthday: Cadastro1.nasc,
			email: Cadastro2.email,
			password: Cadastro2.password,
			nickname: '',
			phone_area_code: '',
			phone: '',
		};

		this.handleChangeNickname = this.handleChangeNickname.bind(this);
		this.handleChangeCode = this.handleChangeCode.bind(this);
		this.handleChangePhone = this.handleChangePhone.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChangeNickname(event) {
		this.setState({ nickname: event.target.value });
	}

	handleChangeCode(event) {
		this.setState({ phone_area_code: event.target.value });
	}

	handleChangePhone(event) {
		this.setState({ phone: event.target.value });
	}

	handleSubmit(event) {
		event.preventDefault();
		axios.defaults.headers.post['Content-Type'] =
			'application/json;charset=utf-8';
		axios
			.post('http://35.237.149.227/cadastro/', Cadastro3)
			.then((res) => {
				const cookies = new Cookies();
				cookies.set('full_name', res.data.full_name, { path: '/' });
				cookies.set('cpf', res.data.cpf, { path: '/' });
				cookies.set('birthday', res.data.birthday, { path: '/' });
				cookies.set('email', res.data.email, { path: '/' });
				cookies.set('password', res.data.password, { path: '/' });
				cookies.set('nickname', res.data.nickname, { path: '/' });
				cookies.set('phone', res.data.phone, { path: '/' });
				cookies.set('phone_area_code', res.data.phone_area_code, {
					path: '/',
				});

				return navigation.navigate('Login');
			})
			.catch((error) => {
				const wrongPw = () =>
					Alert.alert(
						'Error',
						'We couldn`t sign you up.\nPlease try again'[{ text: 'OK' }],
						{
							cancelable: false,
						}
					);
				if (error.response.status === 500) {
					console.log('Dados inválidos!');
				} else if (error.response.status === 404) {
					console.log('Usuário não encontrado!');
				}
				return <Button title={'Wrong Login'} onPress={wrongPw} />;
			});
	}

	render() {
		const { navigation } = this.props;
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
						<form onSubmit={this.handleSubmit}>
							<TextInput
								style={styles.input}
								type='text'
								placeholder='Nickname'
								value={this.state.nickname}
								onChangeText={(text) => {
									this.handleChangeNickname;
									this.setState({
										nickname: text,
									});
								}}
							/>
							<View style={styles.phoneNumber}>
								<TextInputMask
									type={'custom'}
									options={{
										mask: '(99)',
									}}
									onChangeText={(text) => {
										this.handleChangeCode;
										this.setState({
											ddd: text,
										});
									}}
									style={styles.inputSmall}
									textContentType='number'
									placeholder='(__)'
								/>
								<TextInputMask
									type={'cel-phone'}
									options={{
										maskType: 'BRL',
										withDDD: false,
									}}
									onChangeText={(text) => {
										this.handleChangePhone;
										this.setState({
											phone: text,
										});
									}}
									// add the ref to a local var
									ref={(ref) => (this.phoneField = ref)}
									textContentType='number'
									placeholder='_____-____'
									style={styles.inputMedium}
								/>
							</View>
							<View style={styles.buttonForm}>
								<TouchableOpacity
									color='#3ED4AF'
									type='submit'
									onPress={this.handleSubmit}>
									<Text style={styles.txt}>Next</Text>
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
}

// Wrap and export
export default function Cadastro(props) {
	const navigation = useNavigation();

	return <Cadastro1 {...props} navigation={navigation} />;
}
