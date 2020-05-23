import { createAppContainer, createStackNavigator } from 'react-navigation';
import 'react-native-gesture-handler';
import Home from './home';
import Login from './login';
import Cadastro from './login';
import { Panel, Members, Extrato } from './panel';
// import Extrato from './panel';
// import Members from './panel';
import Profile from './profile';

const Routes = createAppContainer(
	createStackNavigator({
		Home: Home,
		Login: Login,
	})
);

export default Routes;
