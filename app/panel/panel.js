import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import navigation from '@react-navigation/native';

export default function Panel({ navigation }) {
	return (
		<View style={styles.bg}>
			<LinearGradient
				colors={['rgba(52,202,154,0.8)', 'rgba(160,61,179,0.45)']}
				start={[0.5, 0.5]}
				end={[0.3, 1.0]}
				style={{ flex: 1 }}>
				<View style={styles.container}>
					<Header
						leftComponent={{ text: 'Family Panel', style: { color: '#000' } }}
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
						<View style={styles.circleOverview}>
							<Text style={styles.titleOverview}>Available</Text>
							<Text style={styles.valueOverview}>1230,00</Text>
							<Icon name='error_outline' type='material' color='#000' />
						</View>
					</View>

					<View style={styles.button1}>
						<TouchableOpacity
							color='#3ED4AF'
							onPress={() => navigation.navigate('Extrato')}>
							<Text style={styles.txt}>Extract</Text>
						</TouchableOpacity>
					</View>
				</View>
			</LinearGradient>
		</View>
	);
}
