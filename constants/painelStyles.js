import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	bg: {
		flex: 1,
		alignItems: 'center',
		textAlign: 'center',
	},
	container: {
		flex: 1,
		// fontFamily: 'Roboto',
		marginBottom: '10px',
	},
	center: {
		justifyContent: 'center',
		alignItems: 'center',
		// fontFamily: 'Roboto',
		textAlign: 'center',
		width: '90%',
		height: '70%',
	},
	moneyDetails: {
		flex: 1,
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-between',
	},
	earnings: {
		paddingLeft: '5%',
	},
	expenses: {
		paddingRight: '5%',
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
		margin: 'auto',
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
	month: {
		height: '10%',
		width: '100%',
	},
	overview: {
		width: '100%',
		height: '70%',
		margin: 'auto',
		position: 'absolute',
	},
	circleOverview: {
		backgroundColor: 'white',
		height: '100%',
		borderRadius: 200,
		borderWidth: 0,
		justifyContent: 'center',
	},
	txtOverview: {
		margin: 'auto',
		justifyContent: 'space-around',
	},
	titleOverview: {
		padding: 10,
		fontSize: '20px',
	},
	valueOverview: {
		padding: 20,
		fontSize: '24px',
		fontWeight: '500',
	},
	category: {
		fontSize: '15px',
		fontWeight: '300',
	},
	value1: {
		padding: 10,
		fontSize: '15px',
		fontWeight: 'bold',
		color: '#2176D3',
	},
	value2: {
		padding: 10,
		fontSize: '15px',
		fontWeight: 'bold',
		color: '#FF0000',
	},
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 22,
	},
	modalView: {
		margin: 20,
		backgroundColor: 'white',
		borderRadius: 20,
		padding: 35,
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	textStyle: {
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center',
	},
	modalText: {
		marginBottom: 15,
		textAlign: 'center',
	},
	navigator: {
		width: '100%',
		height: '32px',
	},
	groupList: {
		flex: 1,
		width: '50%',
		height: '60%',
		margin: '10px',
		justifyContent: 'flex-start',
	},
	groupImg: {
		width: '120px',
		height: '120px',
	},
	group: {
		margin: '10px',
	},
	groupName: {
		fontWeight: '200',
		fontSize: '15px'
	},
});

export default styles;
