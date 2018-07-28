import React from 'react';

import {Tabs, Tab} from 'react-bootstrap';
import {inject, observer} from 'mobx-react';

import './Auth.css';
import M from '../messages/messages';

import SignIn from './AuthTabs/SignIn';
import SignUp from './AuthTabs/SignUp';


@inject('authStore')
@observer
class Auth extends React.Component {

	handleSelect = (key) => {
		this.props.authStore.setTab(key);
	}
    
	render() {
        return (
			<Tabs
            	activeKey={this.props.authStore.tab}
               	id="controlled-tab-example"
				onSelect={this.handleSelect}>
                <Tab eventKey={1} title={M.authBlock.signIn}>
					<SignIn store={this.props.authStore}/>
                </Tab>
                <Tab eventKey={2} title={M.authBlock.signUp}>
					<SignUp store={this.props.authStore}/>
                </Tab>
            </Tabs> 
        );
    }
}

export default Auth;

