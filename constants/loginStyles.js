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
	buttonForm: {
		margin: 'auto',
		backgroundColor: '#65E674',
		borderRadius: 30,
		borderWidth: 6,
		borderColor: '#65E674',
		borderStyle: 'solid',
		width: '80%',
		marginTop: 30,
	},
	buttonHelp: {
		margin: 10,
		marginLeft: '10%',
		backgroundColor: 'none',
		alignSelf: 'right',
		fontSize: 14,
		fontWeight: 'light',
		color: 'white',
		textAlign: 'right',
		width: '80%'
	},
	txt: {
		fontSize: 20,
		fontWeight: '700',
	},
	input: {
		margin: 8,
		backgroundColor: '#fff',
		borderRadius: 30,
		borderWidth: 12,
		borderColor: '#fff',
		borderStyle: 'solid',
		width: '80%',
	},
	titleCreate: {
		fontSize: 40,
		position: 'absolute',
		top: '10%',
		width: '100%',
		fontWeight: '200',
		color: 'white',
	},
	subtitle: {
		fontSize: 20,
		position: 'absolute',
		top: '20%',
		width: '100%',
		fontWeight: '200',
		color: 'white',
	},
});

export default styles;
