import React, { useState } from 'react';
import styles from '../constants/groupsStyles';
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
					// sendData('groups', jsonValue);
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

	return (
		<View style={styles.container}>
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
