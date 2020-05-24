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
	button: {
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
	},
	buttonHelp: {},
});

export default styles;
