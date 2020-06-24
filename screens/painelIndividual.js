import React from 'react';
import styles from '../constants/painelStyles';
import { Text, View, Modal, TextInput, TouchableOpacity } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { navigation, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import { sendData } from '../hooks/sendData';
import { getData } from '../hooks/getData';
import { getCache } from '../hooks/getCache';

export default function Painel(props) {
	const navigation = useNavigation();

	// add new invoice, choose
	const newInvoice = () => {
		const [modalVisible, setModalVisible] = useState(false);

		return (
			<Modal animationType='slide' transparent={true} visible={modalVisible}>
				<View style={styles.centeredView}>
					<View style={styles.modalView}>
						<Text style={styles.modalText}>New Invoice</Text>

						<View style={styles.buttons}>
							<View style={styles.button1}>
								<TouchableOpacity color='#65E674' onPress={() => newEntry}>
									<Text style={styles.modalText}>New Entry</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.button2}>
								<TouchableOpacity color='#FF1B1B' onPress={() => newExpense}>
									<Text style={styles.modalText}>New Expense</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</View>
			</Modal>
		);
	};

	// add new entry
	const newEntry = () => {
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
								<Icon name='insert_photo' type='material' color='#000' />
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

	// add new expense
	const newExpense = () => {
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
								<Icon name='insert_photo' type='material' color='#000' />
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
		<View style={styles.bg}>
			<LinearGradient
				colors={['rgba(52,202,154,0.8)', 'rgba(160,61,179,0.45)']}
				start={[0.5, 0.9]}
				end={[0.1, 1.0]}
				style={{ flex: 1 }}>
				<View style={styles.container}>
					<Header
						containerStyle={{
							backgroundColor: '#3ED4AF',
							width: '100%',
							justifyContent: 'space-around',
						}}
						leftComponent={{
							text: 'Family Panel',
							style: {
								color: '#000',
								marginLeft: '20px',
							},
						}}
					/>

					<View style={styles.month}>
						<TouchableOpacity onPress={() => {}}>
							<Icon name='keyboard_arrow_left' type='material' color='#000' />
						</TouchableOpacity>

						<Text style={styles.monthTxt}>May</Text>

						<TouchableOpacity onPress={() => {}}>
							<Icon name='keyboard_arrow_right' type='material' color='#000' />
						</TouchableOpacity>
					</View>

					<View style={styles.moneyDetails}>
						<View style={styles.earnings}>
							<Text style={styles.category}>Earnings</Text>
							<Text style={styles.value}>1350,00</Text>
						</View>
						<View style={styles.expenses}>
							<Text style={styles.category}>Expenses</Text>
							<Text style={styles.value}>1230,00</Text>
						</View>
					</View>

					<View style={styles.overview}>
						<View
							style={styles.circleOverview}
							ViewComponent={LinearGradient}
							linearGradientProps={{
								colors: ['red', 'green'],
								start: { x: 0, y: 0.5 },
								end: { x: 1, y: 0.5 },
							}}>
							<Text style={styles.titleOverview}>Available</Text>
							<Text style={styles.valueOverview}>1230,00</Text>
							<Icon name='error_outline' type='material' color='#000' />
						</View>
					</View>

					<View style={styles.buttons}>
						<View style={styles.button1}>
							<TouchableOpacity
								color='#3ED4AF'
								onPress={() => navigation.navigate('Extrato')}>
								<Text style={styles.txt}>Extract</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</LinearGradient>
		</View>
	);
}
