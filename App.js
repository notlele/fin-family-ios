import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import useLinking from './navigation/useLinking';
import Home from './screens/home';
import Login from './screens/login';
import Cadastro from './screens/cadastro';
import Groups from './screens/groups';
import Painel from './screens/Painel';
import Extrato from './screens/extrato';
import Members from './screens/members';
import Profile from './screens/profile';

const Stack = createStackNavigator();

export default function App(props) {
	const [isLoadingComplete, setLoadingComplete] = React.useState(false);
	const [initialNavigationState, setInitialNavigationState] = React.useState();
	const containerRef = React.useRef();
	const { getInitialState } = useLinking(containerRef);

	// Load any resources or data that we need prior to rendering the app
	React.useEffect(() => {
		async function loadResourcesAndDataAsync() {
			try {
				// Load our initial navigation state
				setInitialNavigationState(await getInitialState());
			} catch (e) {
				// We might want to provide this error information to an error reporting service
				console.warn(e);
			} finally {
				setLoadingComplete(true);
			}
		}
		loadResourcesAndDataAsync();
	}, []);

	if (!isLoadingComplete && !props.skipLoadingScreen) {
		return null;
	} else {
		return (
			<View style={styles.container}>
				{Platform.OS === 'iOS' && <StatusBar barStyle='default' />}
				<NavigationContainer
					ref={containerRef}
					initialState={initialNavigationState}>
					<Stack.Navigator>
						<Stack.Screen name='Home' component={Home} />
						<Stack.Screen name='Login' component={Login} />
						<Stack.Screen name='Cadastro' component={Cadastro} />
						<Stack.Screen name='Groups' component={Groups} />
						<Stack.Screen name='Painel' component={Painel} />
						<Stack.Screen name='Extrato' component={Extrato} />
						<Stack.Screen name='Members' component={Members} />
						<Stack.Screen name='Profile' component={Profile} />
					</Stack.Navigator>
				</NavigationContainer>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
});
