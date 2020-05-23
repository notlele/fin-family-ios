import React from 'react';
import Typeface from 'typeface-roboto';
import {
	Text,
	View,
	Button,
	StyleSheet,
	// ScrollView,
	// Icon,
	// Image,
	TextInput,
	// TouchableOpacity,
	// StatusBar,
	// TouchableNativeFeedback,
	// TouchableHighlight,
	// AsyncStorage,
	// processColor,
	// ActivityIndicator,
	// Dimensions,
} from 'react-native';
//import styles from "../resources/styles/CadastroStyles.scss";
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

	handleChange(event) {
		this.setState({ value: event.target.nome });
		this.setState({ value: event.target.cpf });
		this.setState({ value: event.target.nasc });
	}

	handleSubmit(event) {
		event.preventDefault();
		// check cpf before next screen
		if (cpfOK) {
			return navigation.navigate('Cadastro2');
		} else {
			const wrongPw = () =>
				Alert.alert('CPF Inválido', 'Verifique seu CPF.', [{ text: 'OK' }], {
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
					onPress={() => navigation.navigate('')}
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
			senha: '',
			senha2: '',
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event, t) {
		this.setState({ value: event.target.t });
	}

	handleSubmit(event) {
		event.preventDefault();
		if (senha === senha2) {
			return navigation.navigate('Cadastro3');
		} else {
			const wrongPw = () =>
				Alert.alert(
					'Senhas não coincidem',
					'Digite a senha novamente.',
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
						onEndEditing={this.handleChange(any, senha)}
					/>
					<TextInput
						style={styles.input}
						textContentType='password'
						value='Confirm password'
						onEndEditing={this.handleChange(any, senha2)}
					/>
					<Button style={styles.buttonRound} type='submit' value='Next' />
				</form>
				<Button
					style={styles.buttonHelp}
					onPress={() => navigation.navigate('')}
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
			nome: Cadastro.nome,
			cpf: Cadastro.cpf,
			nasc: Cadastro.nasc,
			email: Cadastro2.email,
			senha: Cadastro2.senha,
			nickname: '',
			ddd: '',
			phone: '',
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		// this.setState({ value: event.target.email });
		// this.setState({ value: event.target.senha });
		// this.setState({ value: event.target.senha2 });
	}

	handleSubmit(event) {
		event.preventDefault();
		axios.defaults.headers.post['Content-Type'] =
			'application/json;charset=utf-8';
		axios
			.post('http://35.237.149.227/cadastro/', Cadastro3)
			.then((res) => {
				const cookies = new Cookies();
				cookies.set('nome', res.data.nome, { path: '/' });
				cookies.set('cpf', res.data.cpf, { path: '/' });
				cookies.set('nasc', res.data.nasc, { path: '/' });
				cookies.set('email', res.data.email, { path: '/' });
				cookies.set('senha', res.data.senha, { path: '/' });
				cookies.set('nickname', res.data.nickname, { path: '/' });
				cookies.set('ddd', res.data.ddd, { path: '/' });
				cookies.set('phone', res.data.phone, { path: '/' });

				console.log(cookies.get('nickname'));

				return navigation.navigate('Panel');
			})
			.catch((error) => {
				const wrongPw = () =>
					Alert.alert(
						'Erro',
						'Não foi possivel realizar seu cadastro.\nTente novamente'[
							{ text: 'OK' }
						],
						{
							cancelable: false,
						}
					);
				if (error.response.status === 500) {
					// alert('Dados inválidos!');
				} else if (error.response.status === 404) {
					// alert('Usuário não encontrado!');
				}
				return <Button title={'Wrong Login'} onPress={wrongPw} />;
			});
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.title}>FinFamily</Text>
				<form onSubmit={this.handleSubmit}></form>
				<Button
					style={styles.buttonHelp}
					onPress={() => navigation.navigate('')}
					title='Need Help?'
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'linear-Gradient(hsl(127,72,65))',
		alignItems: 'center',
		justifyContent: 'center',
		fontFamily: 'Roboto',
		textAlign: 'center',
	},
	title: {
		fontSize: '50px',
		position: 'absolute',
		top: '20%',
		width: '100%',
	},
	input: {},
	button: {
		width: '90%',
		alignContent: 'space-around',
		position: 'relative',
		top: '40%',
		justifyContent: 'space-between',
		fontSize: '20px',
		fontWeight: '900',
		boxSizing: 'border-Box',
		borderSize: '1px',
		borderStyle: 'solid',
		borderColor: '#3ED4AF',
		borderRadius: '20px',
		margin: '20px',
	},
	buttonRound: {},
});

export default Cadastro;
