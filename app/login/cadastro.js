import React from 'react';
import {
	Text,
	View,
	Button,
	TextInput,
	// StyleSheet,
	// ScrollView,
	// Icon,
	// Image,
	// TouchableOpacity,
	// StatusBar,
	// TouchableNativeFeedback,
	// AsyncStorage
} from 'react-native';
import styles from './styles';
import navigation from '@react-navigation/native';

class Cadastro extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			nome: '',
			cpf: '',
			nasc: '',
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handlePress(pageName) {
		navigation.navigate(pageName);
	}

	handleChange(event, t) {
		this.setState({ value: event.target.t });
	}
	handleSubmit(event) {
		event.preventDefault();
		// check cpf before next screen
		if (cpfOK) {
			return handlePress('Cadastro2');
		} else {
			const wrongPw = () =>
				Alert.alert('Invalid CPF', 'Check your CPF.', [{ text: 'OK' }], {
					cancelable: false,
				});
			return <Button title={'2-Button Alert'} onPress={wrongPw} />;
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.title}>FinFamily</Text>
				<form onSubmit={this.handleSubmit}>
					<TextInput
						style={styles.input}
						textContentType='text'
						value='Name'
						onEndEditing={this.handleChange(any, nome)}
					/>
					<TextInput
						style={styles.input}
						textContentType='text'
						value='CPF'
						onEndEditing={this.handleChange(any, cpf)}
					/>
					<TextInput
						style={styles.input}
						textContentType='date'
						value='Date of Birth'
						onEndEditing={this.handleChange(any, nasc)}
					/>
					<Button style={styles.buttonRound} type='submit' value='Next' />
				</form>

				<Button
					style={styles.buttonHelp}
					onPress={handlePress('')}
					title='Need Help?'
				/>
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

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		if (password === password2) {
			return handlePress('Cadastro3');
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
			<View style={styles.container}>
				<Text style={styles.title}>FinFamily</Text>
				<form onSubmit={this.handleSubmit}>
					<TextInput
						style={styles.input}
						keyboardType='email-address'
						textContentType='emailAddress'
						value='E-Mail for access'
						onEndEditing={this.handleChange(any, email)}
					/>
					<TextInput
						style={styles.input}
						type='password'
						value='Password'
						onEndEditing={this.handleChange(any, password)}
					/>
					<TextInput
						style={styles.input}
						textContentType='password'
						value='Confirm password'
						onEndEditing={this.handleChange(any, password2)}
					/>
					<Button style={styles.buttonRound} type='submit' value='Next' />
				</form>
				<Button
					style={styles.buttonHelp}
					onPress={handlePress('')}
					title='Need Help?'
				/>
			</View>
		);
	}
}

class Cadastro3 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			full_name: Cadastro.nome,
			cpf: Cadastro.cpf,
			birthday: Cadastro.nasc,
			email: Cadastro2.email,
			password: Cadastro2.password,
			nickname: '',
			phone_area_code: '',
			phone: '',
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
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

				return handlePress('Login');
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
			<View style={styles.container}>
				<Text style={styles.title}>FinFamily</Text>
				<form onSubmit={this.handleSubmit}>
					<Button
						style={styles.buttonRound}
						type='submit'
						value='Create Account'
					/>
				</form>
				<Button
					style={styles.buttonHelp}
					onPress={handlePress('')}
					title='Need Help?'
				/>
			</View>
		);
	}
}

export default Cadastro;
