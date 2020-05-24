import React from 'react';
import {
	Text,
	View,
	Button,
	// StyleSheet,
	// ScrollView,
	// Icon,
	// Image,
	// TextInput,
	// TouchableOpacity,
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

function handlePress(pageName) {
	navigation.navigate(pageName);
}

function Home({ navigation }) {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>FinFamily</Text>

			<View
				style={{
					width: '90%',
					alignContent: 'space-around',
					position: 'relative',
					top: '40%',
					justifyContent: 'space-between',
					fontSize: '20px',
					fontWeight: '900',
					boxSizing: 'border-Box',
					borderSize: '1px',
					borderStyle: 'solid',
					borderColor: '#3ED4AF',
					borderRadius: '20px',
					margin: '20px',
				}}>
				<Button
					style={styles.button1}
					onPress={() => handlePress('Cadastro')}
					title='Create Account'
				/>
				<Button
					style={styles.button2}
					onPress={() => handlePress('Login')}
					title='Login'
				/>
			</View>
		</View>
	);
}

export default Home;
