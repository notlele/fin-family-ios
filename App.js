import 'react-native-gesture-handler';
import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import useLinking from './navigation/useLinking';
import Home from './app/home/home';
import Login from './app/login/login';
import Cadastro1 from './app/login/cadastro';
import Groups from './app/panel/groups';
import Panel from './app/panel/panel';
import Extrato from './app/panel/extrato';
import Members from './app/panel/members';
import Profile from './app/profile/profile';

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
				{Platform.OS === 'android' && <StatusBar barStyle='default' />}
				<NavigationContainer
					ref={containerRef}
					initialState={initialNavigationState}>
					<Stack.Navigator>
						<Stack.Screen name='Home' component={Home} />
						<Stack.Screen name='Login' component={Login} />
						<Stack.Screen name='Cadastro' component={Cadastro1} />
						<Stack.Screen name='Groups' component={Groups} />
						<Stack.Screen name='Panel' component={Panel} />
						{/* <Stack.Screen name='Extrato' component={Extrato} />
						<Stack.Screen name='Members' component={Members} />
						<Stack.Screen name='Profile' component={Profile} /> */}
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
