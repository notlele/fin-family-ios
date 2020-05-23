import React, { Component } from 'react';
// import { StackNavigator } from "react-navigation";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Home from './app/home/Home';
import Login from './app/login/Login';
import Cadastro from './app/login/Cadastro';
import Panel from './app/panel/Panel';
import Extrato from './app/panel/Extrato';
import Members from './app/panel/Members';
import Profile from './app/profile/Profile';

const Stack = createStackNavigator();

// function HomeScreen({ navigation }) {
// 	return <Home />;
// }

// function LoginScreen({ navigation }) {
// 	return <Login />;
// }

// function CadastroScreen({ navigation }) {
// 	return <Cadastro />;
// }

// function PanelScreen({ navigation }) {
// 	return <Panel />;
// }

// function ExtratoScreen({ navigation }) {
// 	return <Extrato />;
// }

// function MembersScreen({ navigation }) {
// 	return <Members />;
// }

// function ProfileScreen({ navigation }) {
// 	return <Profile />;
// }

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='Login'>
				<Stack.Screen
					name='Home'
					component={Home}
					options={{ title: 'FinFamily' }}
				/>
				<Stack.Screen
					name='Login'
					component={Login}
					options={{ title: 'Login' }}
				/>
				<Stack.Screen
					name='Cadastro'
					component={Cadastro}
					options={{ title: 'Cadastro' }}
				/>
				{/* <Stack.Screen
					name='Panel'
					component={Panel}
					options={{ title: 'Painel' }}
				/>
				<Stack.Screen
					name='Extrato'
					component={Extrato}
					options={{ title: 'Extrato' }}
				/>
				<Stack.Screen
					name='Members'
					component={Members}
					options={{ title: 'Membros' }}
				/>
				<Stack.Screen
					name='Profile'
					component={Profile}
					options={{ title: 'Perfil' }}
				/> */}
			</Stack.Navigator>
		</NavigationContainer>
	);
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
