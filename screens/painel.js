import React from 'react';
import styles from '../constants/painelStyles';
import { Text, View, Modal, TextInput, TouchableOpacity } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import {
	navigation,
	useNavigation,
	NavigationContainer,
} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-community/async-storage';
import Home from './home';
import Members from './members';
import Groups from './groups';
import { sendData } from '../hooks/sendData';
import { getData } from '../hooks/getData';
import { getCache } from '../hooks/getCache';

const Tab = createBottomTabNavigator();

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
				colors={['rgba(169,241,242,0.8)', 'rgba(160,61,179,0.45)']}
				start={[0.5, 0.9]}
				end={[0.1, 1.0]}
				style={{ flex: 1 }}>
				<View style={styles.container}>
					<Header
						containerStyle={{
							backgroundColor: '#3ED4AF',
							width: '100%',
							height: '55px',
							justifyContent: 'space-around',
							border: 'none',
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
						<Header
							containerStyle={{
								backgroundColor: 'none',
								width: '100%',
								justifyContent: 'space-around',
								border: 'none',
								padding: 'auto 100px',
							}}
							leftComponent={{
								icon: 'keyboard-arrow-left',
								brand: 'material',
								color: '#000',
								// onPress={() => {
								// 	await AsyncStorage.clear();
								// 	navigation.navigate('Home');
								// }}
							}}
							centerComponent={{
								text: 'May',
								style: { color: '#000' },
							}}
							rightComponent={{
								icon: 'keyboard-arrow-right',
								brand: 'material',
								color: '#000',
								// onPress={() => {
								// 	await AsyncStorage.clear();
								// 	navigation.navigate('Home');
								// }}
							}}
						/>
					</View>

					<View style={styles.center}>
						<View style={styles.moneyDetails}>
							<View style={styles.earnings}>
								<Text style={styles.category}>Earnings</Text>
								<Text style={styles.value1}>1350,00</Text>
							</View>
							<View style={styles.expenses}>
								<Text style={styles.category}>Expenses</Text>
								<Text style={styles.value2}>1230,00</Text>
							</View>
						</View>

						<View style={styles.overview}>
							<LinearGradient
								colors={['red', 'green']}
								start={[0.5, 1.0]}
								end={[1.0, 1.0]}
								style={{
									borderRadius: 200,
									borderWidth: 0,
									padding: 2,
									flex: 1,
								}}>
								<View style={styles.circleOverview}>
									<LinearGradient
										colors={['rgba(169,241,242,0.8)', 'rgba(160,61,179,0.45)']}
										start={[0.5, 0.9]}
										end={[0.1, 1.0]}
										style={{
											borderRadius: 200,
											borderWidth: 0,
											flex: 1,
										}}>
										<View style={styles.txtOverview}>
											<Text style={styles.titleOverview}>Available</Text>
											<Text style={styles.valueOverview}>1230,00</Text>
											<Icon
												name='error-outline'
												type='material'
												color='gray'
												style={{ padding: 10 }}
											/>
										</View>
									</LinearGradient>
								</View>
							</LinearGradient>
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

					<LinearGradient
						colors={['rgba(169,241,242,0.8)', 'rgba(160,61,179,0.45)']}
						start={[0.5, 0.9]}
						end={[0.1, 1.0]}
						style={{ flex: 1, height: '32px' }}>
						<View style={styles.navigator}>
							<NavigationContainer independent={true}>
								<Tab.Navigator
									screenOptions={({ route }) => ({
										tabBarIcon: ({ focused, color, size }) => {
											let iconName;

											if (route.name === 'Groups') {
												iconName = focused ? 'home' : 'home-outline';
											} else if (route.name === 'Members') {
												iconName = focused ? 'group' : 'group-outline';
											} else if (route.name === 'Extrato') {
												iconName = focused ? 'add' : 'add-circle-outline';
											}
											return <Icon name={iconName} color={'#000'} />;
										},
									})}>
									<Tab.Screen name='Groups' component={Groups} />
									<Tab.Screen name='Extrato' component={Extrato} />
									<Tab.Screen name='Members' component={Members} />
								</Tab.Navigator>
							</NavigationContainer>
						</View>
					</LinearGradient>
				</View>
			</LinearGradient>
		</View>
	);
}
