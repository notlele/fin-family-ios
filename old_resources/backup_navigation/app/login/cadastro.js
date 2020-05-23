import React from 'react';
import Typeface from 'typeface-roboto';
import {
	Text,
	View,
	ScrollView,
	Icon,
	Image,
	TextInput,
	TouchableOpacity,
	StatusBar,
	Button,
	TouchableNativeFeedback,
	TouchableHighlight,
	AsyncStorage,
	processColor,
	ActivityIndicator,
	Dimensions,
	StyleSheet,
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
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.title}>FinFamily</Text>
				<form onSubmit={this.handleSubmit}>
					<label>
						Name:
						<input
							style={styles.input}
							type='text'
							value={this.state.nome}
							onChange={this.handleChange}
						/>
					</label>
					<label>
						CPF:
						<input
							style={styles.input}
							type='text'
							value={this.state.cpf}
							onChange={this.handleChange}
						/>
					</label>
					<label>
						Date of Birth:
						<input
							style={styles.input}
							type='date'
							value={this.state.nasc}
							onChange={this.handleChange}
						/>
					</label>
					<input
						style={styles.buttonRound}
						type='submit'
						onPress={() => navigation.navigate('Cadastro2')}
						value='Next'
					/>
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

	handleChange(event) {
		this.setState({ value: event.target.email });
		this.setState({ value: event.target.senha });
		this.setState({ value: event.target.senha2 });
	}

	handleSubmit(event) {
		event.preventDefault();
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.title}>FinFamily</Text>
				<form onSubmit={this.handleSubmit}>
					<label>
						E-mail:
						<input
							style={styles.input}
							type='email'
							value={this.state.email}
							onChange={this.handleChange}
						/>
					</label>
					<label>
						Password:
						<input
							style={styles.input}
							type='password'
							value={this.state.senha}
							onChange={this.handleChange}
						/>
					</label>
					<label>
						Confirm password:
						<input
							style={styles.input}
							type='password'
							value={this.state.senha2}
							onChange={this.handleChange}
						/>
					</label>
					<input
						style={styles.buttonRound}
						type='submit'
						onPress={() => navigation.navigate('')}
						value='Finish'
					/>
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