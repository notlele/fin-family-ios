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
	// StatusBar,
	// TouchableNativeFeedback,
	// TouchableHighlight,
	// AsyncStorage,
	// processColor,
	// ActivityIndicator,
	// Dimensions,
} from 'react-native';
import styles from './styles';
import navigation from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

export default class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			senha: '',
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handlePress(pageName) {
		navigation.navigate(pageName);
	}

	handleChange(t) {
		this.setState({ value: `event.target.${t}` });
	}

	handleSubmit(event) {
		event.preventDefault();
		axios.defaults.headers.get['Content-Type'] =
			'application/json;charset=utf-8';
		axios
			.get('http://35.237.149.227/login/', login)
			.then((res) => {
				const cookies = new Cookies();
				cookies.set('email', res.data.email, { path: '/' });
				cookies.set('senha', res.data.senha, { path: '/' });
				console.log(cookies.get('email'));
				return handlePress('Panel');
			})
			.catch((error) => {
				const wrongPw = () =>
					Alert.alert(
						'Wrong Login',
						'Check your e-mail and password!',
						[{ text: 'OK' }],
						{
							cancelable: false,
						}
					);
				if (error.response.status === 500) {
					alert('Dados inválidos!');
				} else if (error.response.status === 404) {
					alert('Usuário não encontrado!');
				}
				return wrongPw;
			});
	}

	render() {
		return <LoginScreen/>;
	}
}

function LoginScreen({ navigation }) {
	return (
		<View style={styles.bg}>
			<LinearGradient
				colors={['rgba(52,202,154,0.8)', 'rgba(160,61,179,0.45)']}
				start={[0.5, 0.5]}
				end={[0.3, 1.0]}
				style={{ flex: 1 }}>
				<View style={styles.container}>
					<Text style={styles.title}>FinFamily</Text>
					<form onSubmit={this.handleSubmit}>
						<TextInput
							style={styles.input}
							keyboardType='email-address'
							textContentType='emailAddress'
							value='E-Mail'
							onEndEditing={this.handleChange('email')}
						/>
						<TextInput
							style={styles.input}
							type='password'
							value='Password'
							onEndEditing={this.handleChange('senha')}
						/>
						<View style={styles.button}>
							<TouchableOpacity
								color='#3ED4AF'
								onPress={() => navigation.navigate('Login')}>
								<Text style={styles.txt}>Login</Text>
							</TouchableOpacity>
						</View>
					</form>
					<Button
						style={styles.buttonHelp}
						onPress={() => handlePress('')}
						title='Need Help?'
					/>
				</View>
			</LinearGradient>
		</View>
	);
}
