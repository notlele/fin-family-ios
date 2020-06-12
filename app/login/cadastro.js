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
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { TextInputMask } from 'react-native-masked-text';
import navigation from '@react-navigation/native';
import styles from './styles';

class Cadastro extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			nome: '',
			cpf: '',
			nasc: '',
		};

		this.handleChangeNome = this.handleChangeNome.bind(this);
		this.handleChangeCpf = this.handleChangeIdade.bind(this);
		this.handleChangeNasc = this.handleChangeIdade.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChangeNome(event) {
		console.log(event.target.value);
		this.setState({ nome: event.target.value });
	}

	handleChangeCpf(event) {
		console.log(event.target.value);
		this.setState({ cpf: event.target.value });
	}

	handleChangeNasc(event) {
		console.log(event.target.value);
		this.setState({ nasc: event.target.value });
	}

	// handlePress(pageName) {
	// 	navigation.navigate(pageName);
	// }

	handleSubmit(event) {
		event.preventDefault();
		// check cpf before next screen
		const cpfIsValid = this.cpfField.isValid();
		const unmasked = this.cpfField.getRawValue();
		const dobIsValid = this.datetimeField.isValid();

		if (cpfIsValid && dobIsValid) {
			return navigation.navigate('Cadastro2');
		} else if (!cpfIsValid) {
			const wrongPw = () =>
				Alert.alert('Invalid CPF', 'Check your CPF.', [{ text: 'OK' }], {
					cancelable: false,
				});
			return <Button title={'2-Button Alert'} onPress={wrongPw} />;
		} else if (!dobIsValid) {
			const wrongPw = () =>
				Alert.alert(
					'Invalid date input',
					'Check your birth date.',
					[{ text: 'OK' }],
					{
						cancelable: false,
					}
				);
			return <Button title={'2-Button Alert'} onPress={wrongPw} />;
		}
	}

	render() {
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
						<form onSubmit={this.handleSubmit}>
							<TextInput
								style={styles.input}
								placeholder='Name'
								value={this.state.nome}
								// onChangeText={(text) => {
								// 	this.setState({
								// 		nome: text,
								// 	});
								// }}
								onChange={this.handleChangeNome}
							/>
							<TextInputMask
								style={styles.input}
								type={'cpf'}
								value={this.state.cpf}
								// onChangeText={(text) => {
								// 	this.setState({
								// 		cpf: text,
								// 	});
								// }}
								// add the ref to a local var
								ref={(ref) => (this.cpfField = ref)}
								placeholder='CPF'
								onChange={this.handleChangeCpf}
							/>
							<TextInputMask
								style={styles.input}
								type={'datetime'}
								options={{
									format: 'DD/MM/YYYY',
								}}
								value={this.state.dt}
								// onChangeText={(text) => {
								// 	this.setState({
								// 		dt: text,
								// 	});
								// }}
								refInput={(ref) => {
									this.input = ref;
								}}
								placeholder='Date of Birth'
								onChange={this.handleChangeNasc}
							/>
							<View style={styles.buttonRound}>
								<TouchableOpacity
									color='#3ED4AF'
									type='submit'
									onPress={() => navigation.navigate('Cadastro2')}>
									<Text style={styles.txt}>Next</Text>
								</TouchableOpacity>
							</View>
						</form>

						<Button
							style={styles.buttonHelp}
							// onPress={navigation.navigate('')}
							title='Need Help?'
						/>
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
			email: '',
			password: '',
			password2: '',
		};

		this.handleChangeEmail = this.handleChangeNome.bind(this);
		this.handleChangePassword = this.handleChangeIdade.bind(this);
		this.handleChangePassword2 = this.handleChangeIdade.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChangeEmail(event) {
		console.log(event.target.value);
		this.setState({ email: event.target.value });
	}

	handleChangePassword(event) {
		console.log(event.target.value);
		this.setState({ password: event.target.value });
	}

	handleChangePassword2(event) {
		console.log(event.target.value);
		this.setState({ password2: event.target.value });
	}

	handleSubmit(event) {
		event.preventDefault();
		if (password === password2) {
			return navigation.navigate('Cadastro3');
		} else {
			const wrongPw = () =>
				Alert.alert(
					'Passwords do not match',
					'Type the password again.',
					[{ text: 'OK' }],
					{
						cancelable: false,
					}
				);
			return <Button title={'2-Button Alert'} onPress={wrongPw} />;
		}
	}

	render() {
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
								onChange={this.handleChangeEmail}
							/>
							<TextInput
								style={styles.input}
								type='password'
								secureTextEntry={true}
								placeholder='Password'
								onChange={this.handleChangePassword}
							/>
							<TextInput
								style={styles.input}
								type='password'
								secureTextEntry={true}
								placeholder='Confirm password'
								onChange={this.handleChangePassword2}
							/>
							<View style={styles.buttonRound}>
								<TouchableOpacity
									color='#3ED4AF'
									type='submit'
									onPress={() => navigation.navigate('Cadastro3')}>
									<Text style={styles.txt}>Next</Text>
								</TouchableOpacity>
							</View>
						</form>
						<Button
							style={styles.buttonHelp}
							onPress={navigation.navigate('')}
							title='Need Help?'
						/>
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
			full_name: Cadastro.nome,
			cpf: Cadastro.cpf, // unmasked, // uses the getRawValue
			birthday: Cadastro.nasc,
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
		console.log(event.target.value);
		this.setState({ nickname: event.target.value });
	}

	handleChangeCode(event) {
		console.log(event.target.value);
		this.setState({ phone_area_code: event.target.value });
	}

	handleChangePhone(event) {
		console.log(event.target.value);
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
				cookies.set('full_name', res.data.nome, { path: '/' });
				cookies.set('cpf', res.data.cpf, { path: '/' });
				cookies.set('birthday', res.data.nasc, { path: '/' });
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
								onChange={this.handleChangeNickname}
							/>
							<View style={styles.phoneNumber}>
								<TextInputMask
									type={'custom'}
									options={{
										mask: '(99)',
									}}
									// value={this.state.ddd}
									// onChangeText={(text) => {
									// 	this.setState({
									// 		ddd: text,
									// 	});
									// }}
									style={styles.inputSmall}
									textContentType='number'
									placeholder='(__)'
									onChange={this.handleChangeCode}
								/>
								<TextInputMask
									type={'cel-phone'}
									options={{
										maskType: 'BRL',
										withDDD: false,
									}}
									// value={this.state.phone}
									// onChangeText={(text) => {
									// 	this.setState({
									// 		phone: text,
									// 	});
									// }}
									// add the ref to a local var
									// ref={(ref) => (this.phoneField = ref)}
									textContentType='number'
									placeholder='_____-____'
									style={styles.inputMedium}
									onChange={this.handleChangePhone}
								/>
							</View>
							<View style={styles.buttonRound}>
								<TouchableOpacity
									color='#3ED4AF'
									type='submit'
									onPress={this.handleSubmit}>
									<Text style={styles.txt}>Create Account</Text>
								</TouchableOpacity>
							</View>
						</form>
						<Button
							style={styles.buttonHelp}
							onPress={navigation.navigate('')}
							title='Need Help?'
						/>
					</View>
				</LinearGradient>
			</View>
		);
	}
}

export default Cadastro;
