import React from 'react';
import {
	Text,
	View,
	Button,
	TextInput,
	Header,
	Modal,
	TouchableOpacity,
	// StyleSheet,
	// ScrollView,
	// Image,
	// TouchableNativeFeedback,
	// AsyncStorage,
} from 'react-native';
import styles from './styles';
import navigation from '@react-navigation/native';
import ImagePicker from 'react-native-image-picker';
import { Icon } from 'react-native-elements';

// navigation handlers
function handlePress(pageName) {
	navigation.navigate(pageName);
}
function handleChange(event, t) {
	this.setState({ value: event.target.t });
}

// ImagePicker
const options = {
	title: 'Select Avatar',
	storageOptions: {
		skipBackup: true,
		path: 'images',
	},
};
const picker = () => {
	/**
	 * The first arg is the options object for customization (it can also be null or omitted for default options),
	 * The second arg is the callback which sends object: response (more info in the API Reference)
	 */
	ImagePicker.launchImageLibrary(options, (response) => {
		console.log('Response = ', response);

		if (response.didCancel) {
			console.log('User cancelled image picker');
		} else if (response.error) {
			console.log('ImagePicker Error: ', response.error);
		} else {
			const source = { uri: response.uri };
			// You can also display the image using data:
			// const source = { uri: 'data:image/jpeg;base64,' + response.data };
			this.setState({
				avatarSource: source,
			});
		}
	});
};

// add new group
const newGroup = () => {
	const [modalVisible, setModalVisible] = useState(false);
	return (
		<Modal animationType='slide' transparent={true} visible={modalVisible}>
			<View style={styles.centeredView}>
				<View style={styles.modalView}>
					<Text style={styles.modalText}>New Group</Text>
					<TextInput
						style={styles.input}
						textContentType='text'
						value='Name'
						onEndEditing={this.handleChange(any, group_name)}
					/>
					<Text style={styles.modalText}>
						<Icon
							name='insert_photo'
							type='material'
							color='#000'
							onPress={() => {
								picker;
							}}
						/>
						upload image
					</Text>

					<TouchableOpacity
						color='#3ED4AF'
						onPress={() => {
							setModalVisible(!modalVisible);
							//this.handleSubmit;
						}}>
						<Icon name='done' type='material' color='#000' />
					</TouchableOpacity>
				</View>
			</View>
		</Modal>
	);
};

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
					console.log('Grupo não encontrado!');
				}
				return (group = <View style={styles.groups}></View>);
			});
	}

	render() {
		return (
			<View style={styles.container}>
				<Header
					leftComponent={{ text: 'Groups', style: { color: '#000' } }}
					rightComponent={{ icon: 'power_settings_new', color: '#000' }}
				/>

				{group}

				<TouchableHighlight
					style={styles.openButton}
					onPress={() => {
						newGroup.setModalVisible(true);
					}}>
					<Icon
						name='add'
						type='material'
						color='#000'
						onPress={() => {
							setModalVisible(!modalVisible);
							//this.handleSubmit;
						}}
					/>
				</TouchableHighlight>
			</View>
		);
	}
}

export default Groups;
