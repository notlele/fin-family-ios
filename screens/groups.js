import React, { useState } from 'react';
import styles from '../constants/painelStyles';
import {
	Text,
	View,
	TextInput,
	Modal,
	TouchableOpacity,
	Image,
} from 'react-native';
import { navigation, useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
// import ImagePicker from 'react-native-image-picker';
import { Header, Icon } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
import { sendData } from '../hooks/sendData';
import { getData } from '../hooks/getData';
import { getCache } from '../hooks/getCache';

export default function Groups(props) {
	const navigation = useNavigation();

	// add new group
	const newGroup = () => {
		const [modalVisible, setModalVisible] = useState(false);
		const [groupName, setgroupName] = useState('');

		const handleSubmit = (event) => {
			event.preventDefault();
			setObjectValue = async (value) => {
				try {
					const jsonValue = JSON.stringify({
						group_name: getCache('groupName'),
					});
					// await AsyncStorage.setItem('@cadastro', jsonValue);
					sendData('groups', jsonValue);
					console.log(jsonValue);
					setModalVisible(!modalVisible);
					// await AsyncStorage.clear();
					return navigation.navigate('Groups');
				} catch (e) {
					console.log(e);
					setgroupName('');
					return () =>
						Alert.alert('Error', 'Please try again.', [{ text: 'OK' }], {
							cancelable: false,
						});
					// save error
				}
			};

			// ImagePicker
			// const options = {
			// 	title: 'Select Avatar',
			// 	storageOptions: {
			// 		skipBackup: true,
			// 		path: 'images',
			// 	},
			// };
			// const picker = () => {
			// 	/**
			// 	 * The first arg is the options object for customization (it can also be null or omitted for default options),
			// 	 * The second arg is the callback which sends object: response (more info in the API Reference)
			// 	 */
			// 	ImagePicker.launchImageLibrary(options, (response) => {
			// 		console.log('Response = ', response);

			// 		if (response.didCancel) {
			// 			console.log('User cancelled image picker');
			// 		} else if (response.error) {
			// 			console.log('ImagePicker Error: ', response.error);
			// 		} else {
			// 			const source = {
			// 				uri: response.uri,
			// 			};
			// 			// You can also display the image using data:
			// 			// const source = { uri: 'data:image/jpeg;base64,' + response.data };
			// 			this.setState({
			// 				avatarSource: source,
			// 			});
			// 		}
			// 	});
			// };

			return (
				<Modal animationType='slide' transparent={true} visible={modalVisible}>
					<View style={styles.centeredView}>
						<View style={styles.modalView}>
							<Text style={styles.modalText}>New Group</Text>
							<TextInput
								style={styles.input}
								textContentType='text'
								placeholder='Name'
								value={groupName}
								onChangeText={(e) => setgroupName(e.target.value)}
							/>

							<TouchableOpacity
								color='#3ED4AF'
								onPress={() => {
									// picker;
								}}>
								<Icon name='insert-photo' type='material' color='#000' />
								<Text style={styles.modalText}>upload image</Text>
							</TouchableOpacity>

							<TouchableOpacity
								color='#3ED4AF'
								onPress={() => {
									handleSubmit;
								}}>
								<Icon name='done' type='material' color='#000' />
							</TouchableOpacity>
						</View>
					</View>
				</Modal>
			);
		};
	};

	// get groups list
	// const groupsList = () => {
	// 	const [groups, setGroups] = useState({
	// 		items: {
	// 			group_name: '',
	// 			cont: 0,
	// 		},
	// 	});
	// 	// Similar to componentDidMount and componentDidUpdate:
	// 	useEffect(() => {
	// 		axios.defaults.headers.post['Content-Type'] =
	// 			'application/json;charset=utf-8';
	// 		axios
	// 			.get(`http://35.237.149.227/groups/`, getCache('cpf'))
	// 			.then((resultData) => {
	// 				setGroups(resultData.d.results);
	// 			})
	// 			.catch((error, jqXHR, textStatus, errorThrown) => {
	// 				const fetchError = () =>
	// 					Alert.alert('Error', errorTxt[{ text: 'OK' }], {
	// 						cancelable: false,
	// 					});
	// 				if (error.response.status === 500) {
	// 					console.log('Dados inválidos!');
	// 					errorTxt = 'Please try again';
	// 				} else if (error.response.status === 404) {
	// 					console.log('Grupos não existem!');
	// 					errorTxt = 'No groups for this user!';
	// 				}
	// 				return fetchError;
	// 			});
	// 	});

	// 	return (
	// 		<View style={styles.centeredView}>
	// 			{groups.items.length > 0 ? (
	// 				groups.items.map(function (item, key) {
	// 					console.log(item);
	// 					item.cont++;
	// 					setStringValue = async (value) => {
	// 						try {
	// 							await AsyncStorage.setItem(
	// 								`@group${item.cont}`,
	// 								item.group_name
	// 							);
	// 						} catch (e) {
	// 							console.log(e);
	// 							// save error
	// 						}
	// 					};
	// 					return (
	// 						<View style={styles.group}>
	// 							<TouchableOpacity
	// 								style={styles.groupImg}
	// 								onPress={() => {
	// 									navigation.navigate(`Painel`);
	// 								}}>
	// 								<Image />
	// 								<Text style={styles.groupName}>{item.group_name}</Text>
	// 							</TouchableOpacity>
	// 						</View>
	// 					);
	// 				})
	// 			) : (
	// 				<View style={styles.group}>
	// 					<Image />
	// 					<Text style={styles.groupName}>No Groups!</Text>
	// 				</View>
	// 			)}
	// 			);
	// 		</View>
	// 	);
	// };

	return (
		<View style={styles.bg}>
			<Header
				containerStyle={{
					backgroundColor: '#3ED4AF',
					width: '100%',
					justifyContent: 'space-around',
				}}
				leftComponent={{
					text: 'Groups',
					style: { color: '#000' },
					marginLeft: '20px',
				}}
				rightComponent={{
					icon: 'power-settings-new',
					color: '#000',
					// onPress={() => {
					// 	await AsyncStorage.clear();
					// 	navigation.navigate('Home');
					// }}
				}}
			/>

			<View style={styles.groupList}>
				{/* {groupsList} */}
				<View style={styles.group}>
					<TouchableOpacity
						onPress={() => {
							navigation.navigate(`Painel`);
						}}>
						<Image
							source={'../assets/images/robot-dev.png'}
							style={styles.groupImg}
						/>
						<Text style={styles.groupName}>My Finances</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.group}>
					<TouchableOpacity
						onPress={() => {
							navigation.navigate(`Painel`);
						}}>
						<Image
							source={'../assets/images/robot-prod.png'}
							style={styles.groupImg}
						/>
						<Text style={styles.groupName}>Cool Family</Text>
					</TouchableOpacity>
				</View>
			</View>

			<View style={styles.navigator}>
				<LinearGradient
					colors={['rgba(169,241,242,0.8)', 'rgba(160,61,179,0.45)']}
					start={[0.5, 0.9]}
					end={[0.1, 1.0]}
					style={{ flex: 1 }}>
					<TouchableOpacity
						onPress={() => {
							newGroup.setModalVisible(true);
						}}>
						<Icon
							name='add'
							type='material'
							color='#000'
							onPress={() => {
								newGroup.setModalVisible(!newGroup.modalVisible);
							}}
						/>
					</TouchableOpacity>
				</LinearGradient>
			</View>
		</View>
	);
}
