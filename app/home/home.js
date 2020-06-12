import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import navigation from '@react-navigation/native';

export default function Home({ navigation }) {
	return (
		<View style={styles.bg}>
			<LinearGradient
				colors={['rgba(52,202,154,0.8)', 'rgba(160,61,179,0.45)']}
				start={[0.5, 0.5]}
				end={[0.3, 1.0]}
				style={{ flex: 1 }}>
				<View style={styles.container}>
					<Text style={styles.title}>FinFamily</Text>

					<View style={styles.buttons}>
						<View style={styles.button1}>
							<TouchableOpacity
								color='#3ED4AF'
								onPress={() => navigation.navigate('Cadastro')}>
								<Text style={styles.txt}>Create Account</Text>
							</TouchableOpacity>
						</View>
						<View style={styles.button2}>
							<TouchableOpacity
								color='#3ED4AF'
								onPress={() => navigation.navigate('Login')}>
								<Text style={styles.txt}>Login</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</LinearGradient>
		</View>
	);
}
