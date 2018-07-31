import React from 'react';
import PropTypes from 'prop-types';

import {inject, observer} from 'mobx-react';

import Dashboard from './Dashboard/Dashboard';
import Auth from './Auth';

@inject('authStore')
@observer
class App extends React.Component {

    static propTypes = {
        authStore: PropTypes.object.isRequired
    };

    render() {
        const authStore = this.props.authStore;
        let component = <Auth />;

        if (authStore.successLogin) {
            component = <Dashboard user={authStore.username}/>;
        }

        return (
            component
        );
    }
}

export default App;

