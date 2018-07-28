import React from 'react';
import PropTypes from 'prop-types';

import {inject, observer} from 'mobx-react';
// import LoadingScreen from 'react-loading-screen';
//
// import M from '../messages/messages';

import Dashboard from './Dashboard/Dashboard';

@inject('appStore')
@observer
class App extends React.Component {

    static propTypes = {
        appStore: PropTypes.object.isRequired
    };

    componentDidMount() {
        //TODO check user credentials
    }

    render() {
        //const store = this.props.appStore;
        // let component = <LoadingScreen
        //     loading={true}
        //     bgColor='#f1f1f1'
        //     spinnerColor='#9ee5f8'
        //     textColor='#676767'
        //     //logoSrc='/logo.png'
        //     text={M.checkCredentials}
        // />;

        // if (store.authPassed) {
        //     component = <Dashboard/>;
        // }

        return (
            <Dashboard/>
        );
    }
}

export default App;

