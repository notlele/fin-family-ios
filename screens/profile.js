import React from 'react';
import styles from '../constants/profileStyles';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { navigation, useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage';
import { sendData } from '../hooks/sendData';
import { getData } from '../hooks/getData';
import { getCache } from '../hooks/getCache';

export default function Profile(props) {
	const navigation = useNavigation();
	//     this.state = {
	//       user: user,
	//       data: undefined,
	//     };
	//     this.logout = this.logout.bind(this);
	//   }

	// async logout() {
	//   console.log("logout");
	//   var result = await NetworkExecutor.get(services.LOGOUT);
	//   this.props.navigation.pop();
	// }

	// componentDidMount() {
	//   this.props.navigation.setParams({ logout: this.logout });
	//   this.loadProducts();
	// }

	//   render() {
	//     var user = this.state.user;
	//     var foto = "data:image/gif;base64," + user.fotoUser;
	//     return (
	//         null
	//     );
	//   }
	// }

	return (
		<View style={styles.container}>
			<Header
				containerStyle={{
					backgroundColor: '#3ED4AF',
					width: '100%',
					justifyContent: 'space-around',
					border: 'none',
				}}
				leftComponent={{
					text: 'Profile',
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
						<Icon name='error-outline' type='material' color='#000' />
					</View>
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
	);
}
