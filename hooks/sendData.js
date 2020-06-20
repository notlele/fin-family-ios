import axios from 'axios';

export const sendData = (path, data) => {
	axios.defaults.headers.post['Content-Type'] =
		'application/json;charset=utf-8';
	axios
		.post(`http://35.237.149.227/${path}/`, data)
		.then((res) => {})
		.catch((error) => {
			const wrongPw = () =>
				Alert.alert('Error', errorTxt[{ text: 'OK' }], {
					cancelable: false,
				});
			if (path === 'cadastro' && error.res.status === 500) {
				console.log('Dados inválidos!');
				errorTxt = 'We couldn`t sign you up.\nPlease try again';
			} else if (path === 'login' && error.res.status === 404) {
				console.log('Usuário não existe!');
				errorTxt = 'Check your credentials and please try again';
			}
			return wrongPw;
		});
};
