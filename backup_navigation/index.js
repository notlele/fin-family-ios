import registerRootComponent from 'expo/build/launch/registerRootComponent';
import App from './App';
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './app/home/Home';
import Login from './app/login/Login';
// import { AppRegistry } from 'react-native';
// import { name as appName } from './app.json';

// import Routes from './src';

// AppRegistry.registerComponent(appName, () => Routes);

// registerRootComponent(App);
const Stack = StackNavigator({
	Home: {
		screen: Home,
	},
	Login: {
		screen: Login,
	},
});
export default class Index extends Component {
	render() {
		return <Stack />;
	}
}
