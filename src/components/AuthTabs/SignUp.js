import React from 'react';
import PropTypes from 'prop-types';

import {Row, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';
import {inject, observer} from 'mobx-react';

import M from '../../messages/messages';
import './SignUp.css';

@inject('authStore')
@observer
class SignUp extends React.Component {

    static propTypes = {
        store: PropTypes.object.isRequired
    };

    onUsernameChange = (e) => {
        this.props.store.setUsernameRegister(e.target.value);
    };

    onPasswordChange = (e) => {
        this.props.store.setPasswordRegister(e.target.value);
    };

    onRepeatPasswordChange = (e) => {
        this.props.store.setRepeatPassword(e.target.value);
    };

    onSubmit = () => {
        //this.props.store.submitForm();
    };

    render() {
        const {store} = this.props;
        return (
            <form>
                <FormGroup bsClass="authContainer col-sm-offset-4">
                    <Row bsClass="row register-row">
                        <ControlLabel bsClass="title-sign-up">{M.authBlock.signUp}</ControlLabel>
                    </Row>
                    <Row bsClass="row register-row">
                        <FormControl
                            type="text"
                            value={store.usernameRegister}
                            placeholder={M.authBlock.usernamePlaceholder}
                            onChange={this.onUsernameChange}
                        />
                    </Row>
                    <Row bsClass="row register-row">
                        <FormControl
                            type="password"
                            value={store.passwordRegister}
                            placeholder={M.authBlock.passwordPlaceholder}
                            onChange={this.onPasswordChange}
                        />
                    </Row>
                    <Row bsClass="row register-row">
                        <FormControl
                            type="password"
                            value={store.repeatPassword}
                            placeholder={M.authBlock.repeatPassword}
                            onChange={this.onRepeatPasswordChange}
                        />
                    </Row>
                    <Row bsClass="row register-row">
                        <Button
                            type="submit"
                            bsStyle="primary"
                            disabled={!store.isSignUpFormValid}
                            onSubmit={this.onSubmit}>
                            {M.authBlock.signUp}
                        </Button>
                    </Row>
                </FormGroup>
            </form>
        );
    }
}

export default SignUp;

