import Constants from '../Constants';

const DashboardDAO = {
    getAllImages: (user) => {
        return new Promise((resolve, reject) => {
            fetch(Constants.SERVER_URL + `images?name=${user}`, {
                method: 'GET',
                credentials: 'same-origin'
            })
                .then(response => response.json())
                .then(result => {
                    if (result.status !== 200) {
                        return reject(result.error);
                    }
                    return resolve(result)
                })

                .catch(err => {
                    return reject(err);
                })
        });
    }
};

export default DashboardDAO;
