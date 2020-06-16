import React from 'react';
import {
	Text,
	View,
	TextInput,
	// StyleSheet,
	// ScrollView,
	// Icon,
	// Image,
	// StatusBar,
	// TouchableNativeFeedback,
	// TouchableHighlight,
} from 'react-native';
import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { navigation, useNavigation } from '@react-navigation/native';

class LoginScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
		};

		this.handleChangeEmail = this.handleChangeEmail.bind(this);
		this.handleChangePassword = this.handleChangePassword.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	// handlePress(pageName) {
	// 	navigation.navigate(pageName);
	// }

	handleChangeEmail(event) {
		this.setState({ email: event.target.value });
	}

	handleChangePassword(event) {
		this.setState({ password: event.target.value });
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
				cookies.set('password', res.data.password, { path: '/' });
				console.log(cookies.get('email'));
				return () => {
					navigation.navigate('Panel');
				};
			})
			.catch((error) => {
				if (error.response.status === 500) {
					console.log('Dados inválidos!');
				} else if (error.response.status === 404) {
					console.log('Usuário não encontrado!');
				}
				return () =>
					Alert.alert(
						'Wrong Login',
						'Check your e-mail and password!',
						[{ text: 'OK' }],
						{
							cancelable: false,
						}
					);
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
						<Text style={styles.title}>FinFamily</Text>
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

export default function Login(props) {
	const navigation = useNavigation();

	return <LoginScreen {...props} navigation={navigation} />;
}
