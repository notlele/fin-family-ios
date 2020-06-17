import { StyleSheet } from 'react-native';

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
		fontSize: 50,
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
		fontSize: 20,
		fontWeight: '700',
	},
});


export default styles;
