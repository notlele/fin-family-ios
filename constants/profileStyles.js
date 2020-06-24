import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		// fontFamily: 'Roboto',
		textAlign: 'center',
	},
	center: {
		justifyContent: 'center',
		alignItems: 'center',
		// fontFamily: 'Roboto',
		textAlign: 'center',
		width: '90%',
		height: '70%',
	},
	title: {
		fontSize: 50,
		position: 'absolute',
		top: '20%',
		width: '100%',
		fontWeight: '200',
		color: 'white',
	},
	buttons: {
		width: '80%',
		borderStyle: 'solid',
	},
	button1: {
		margin: 2,
		backgroundColor: '#65E674',
		borderRadius: 30,
		borderWidth: 5,
		borderColor: '#65E674',
	},
	button2: {
		margin: 2,
		backgroundColor: '#FF1B1B',
		borderRadius: 30,
		borderWidth: 5,
		borderColor: '#FF1B1B',
	},
	txt: {
		fontSize: 20,
		fontWeight: '700',
	},
	titleOverview: {
		fontSize: '20px',
	},
	valueOverview: {
		padding: 20,
		fontSize: '20px',
		fontWeight: '500',
	},
	category: {
		fontSize: '15px',
		fontWeight: '300',
	},
});

export default styles;
