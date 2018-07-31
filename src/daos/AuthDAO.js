import Constants from '../Constants';

const AuthDAO = {
    register: (data) => {
        return new Promise((resolve, reject) => {
            fetch(Constants.SERVER_URL + 'auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then(result => {
                    if (result.status !== 201) {
                        return reject(result.error);
                    }
                    return resolve()
                })

                .catch(err => {
                    return reject(err);
                })
        });
    },

    login: (data) => {
        return new Promise((resolve, reject) => {
            fetch(Constants.SERVER_URL + 'auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then(response => {
                    if (response.status !== 200) {
                        return reject(response.error);
                    }
                    return resolve(response.result)
                })

                .catch(err => {
                    return reject(err);
                })
        });
    }
};

export default AuthDAO;
