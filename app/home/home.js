import React from 'react';
import {
	Text,
	View,
	Button,
	StyleSheet,
	// ScrollView,
	// Icon,
	// Image,
	// TextInput,
	TouchableOpacity,
	// StatusBar,
	// TouchableNativeFeedback,
	// AsyncStorage,
} from 'react-native';
// import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import navigation from '@react-navigation/native';

function handlePress(pageName) {
	navigation.navigate(pageName);
}

export default function Home({ navigation }) {
	return (
		<View style={styles.bg}>
			<LinearGradient
				colors={['rgba(52,202,154,0.8)', 'rgba(160,61,179,0.45)']}
				start={[0.5, 0.5]}
				end={[0.3, 1.0]}
				style={{ flex: 1 }}>
				{/* <LinearGradient
				colors={['rgba(160,61,179,0.53)', 'rgba(0,0,0,0.8)']}
				start={[0.5, 0.5]}
				end={[0.0, 1.0]}
				style={{ flex: 1 }}> */}
				<View style={styles.container}>
					<Text style={styles.title}>FinFamily</Text>

					<View style={styles.buttons}>
						<View style={styles.button1}>
							<TouchableOpacity
								color='#3ED4AF'
								onPress={() => handlePress('Cadastro')}>
								<Text style={styles.txt}>Create Account</Text>
							</TouchableOpacity>
						</View>
						<View style={styles.button2}>
							<TouchableOpacity
								color='#3ED4AF'
								onPress={() => handlePress('Login')}>
								<Text style={styles.txt}>Login</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</LinearGradient>
			{/* </LinearGradient> */}
		</View>
	);
}

const styles = StyleSheet.create({
	bg: {
		backgroundColor: 'black',
		flex: 1,
	},
	container: {
		flex: 1,
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
		fontWeight: '200',
		color: 'white',
	},
	buttons: {
		width: '90%',
		position: 'relative',
		top: '30%',
		justifyContent: 'space-between',
		boxSizing: 'border-Box',
	},
	button1: {
		margin: 8,
		backgroundColor: '#65E674',
		borderRadius: 30,
		borderWidth: 12,
		borderColor: '#65E674',
		borderStyle: 'solid',
	},
	button2: {
		margin: 8,
		backgroundColor: '#3ED4AF',
		borderRadius: 30,
		borderWidth: 12,
		borderColor: '#3ED4AF',
		borderStyle: 'solid',
	},
	txt: {
		fontSize: '20px',
		fontWeight: '750',
	},
});
