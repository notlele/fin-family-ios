import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'linear-Gradient(hsl(127,72,65))',
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
	},
	input: {},
	buttons: {
		width: '90%',
		position: 'relative',
		top: '30%',
		justifyContent: 'space-between',
		boxSizing: 'border-Box',
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
	buttonHelp: {},
});

export default styles;
