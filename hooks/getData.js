import axios from 'axios';

export const getData = (path, json) => {
	const [data, setData] = useState(['']);
	axios.defaults.headers.post['Content-Type'] =
		'application/json;charset=utf-8';
	axios
		.get(`http://35.237.149.227/${path}/`, data)
		.then((res) => {
			setData(res.target.value.d.results);
			// set json with response
			setObjectValue = async (value) => {
				try {
					const jsonResults = JSON.stringify({ res });
					// await AsyncStorage.setItem('@cadastro', jsonResults);
					console.log(jsonResults);
				} catch (e) {
					console.log(e);
					// save error
				}
			};
		})
		.catch((error) => {
			const fetchError = () =>
				Alert.alert('Error', errorTxt[{ text: 'OK' }], {
					cancelable: false,
				});
			if (error.response.status === 500) {
				console.log('Dados inválidos!');
				errorTxt = 'Please try again';
			} else if (error.response.status === 404) {
				console.log('Usuário não existe!');
				errorTxt = 'No groups for this user!';
			}
			return fetchError;
		});
};
