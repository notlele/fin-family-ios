axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
        axios.post('http://35.237.149.227/login/', login)
            .then(res => {
                const cookies = new Cookies();
                console.log("aqui");
                console.log(res.data.email);
                //console.log(res.data);
                cookies.set('email', res.data.email, { path: '/' });
                cookies.set('password', res.data.password, { path: '/' });
                console.log("Cookie");
                console.log(cookies.get('email'));
                
                return window.location.href = "/";
            }