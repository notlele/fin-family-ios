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
//import styles from "../resources/styles/LoginStyles.scss";
import navigation from '@react-navigation/native';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			senha: '',
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.email });
		this.setState({ value: event.target.senha });
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
					<input style={styles.button} type='submit' value='Login' />
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
	buttonHelp: {},
});

export default Login;
