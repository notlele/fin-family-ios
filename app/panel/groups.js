import React from 'react';
import Typeface from 'typeface-roboto';
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
	// AsyncStorage,
} from 'react-native';
import styles from './styles';
import navigation from '@react-navigation/native';

function handlePress(pageName) {
	navigation.navigate(pageName);
}

function handleChange(event, t) {
	this.setState({ value: event.target.t });
}

class Groups extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			group_name: '',
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		axios.defaults.headers.post['Content-Type'] =
			'application/json;charset=utf-8';
		axios
			.post('http://35.237.149.227/Groups/', Groups)
			.then((res) => {
				const cookies = new Cookies();
				cookies.set('nome', res.data.nome, { path: '/' });

				return (group = (
					<View style={styles.groups}>
						<Image />
						<Text style={styles.title}>{cookies.get('group_name')}</Text>
					</View>
				));
			})
			.catch((error) => {
				if (error.response.status === 500) {
					console.log('Dados inválidos!');
				} else if (error.response.status === 404) {
					console.log('Usuário não encontrado!');
				}
				return (group = <View style={styles.groups}></View>);
			});
	}

	render() {
		return (
			<View style={styles.container}>
				{group}
				<Button
					style={styles.buttonHelp}
					// onPress={handlePress('')}
					title='Novo Grupo'
				/>
			</View>
		);
	}
}

export default Groups;
