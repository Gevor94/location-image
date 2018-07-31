import React from 'react';
import PropTypes from 'prop-types';

import {Row, FormGroup, FormControl,
    ControlLabel, Button, Modal} from 'react-bootstrap';
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

    handleHide = () => {
        if (this.props.store.successSignUp) {
            this.props.store.setTab(1);
        }
        this.props.store.hideModal();
    };

    onSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (event.target.elements) {
			const data = {
				username: this.props.store.usernameRegister,
				pwd: this.props.store.passwordRegister,
				pwd2: this.props.store.repeatPassword
			}
            this.props.store.registerUser(data);
		}
    };

    render() {
        const {store} = this.props;
        return (
            <form onSubmit={this.onSubmit}>
                <FormGroup bsClass="authContainer col-sm-offset-4">
                    <Row bsClass="row register-row">
                        <ControlLabel bsClass="title-sign-up">{M.authBlock.signUp}</ControlLabel>
                    </Row>
                    <Row bsClass="row register-row">
                        <FormControl
                            type="text"
							name="username"
                            value={store.usernameRegister}
                            placeholder={M.authBlock.usernamePlaceholder}
                            onChange={this.onUsernameChange}
                        />
                    </Row>
                    <Row bsClass="row register-row">
                        <FormControl
                            type="password"
							name="pwd"
                            value={store.passwordRegister}
                            placeholder={M.authBlock.passwordPlaceholder}
                            onChange={this.onPasswordChange}
                        />
                    </Row>
                    <Row bsClass="row register-row">
                        <FormControl
                            type="password"
							name="pwd2"
                            value={store.repeatPassword}
                            placeholder={M.authBlock.repeatPassword}
                            onChange={this.onRepeatPasswordChange}
                        />
                    </Row>
                    <Row bsClass="row register-row">
                        <Button
                            type="submit"
                            bsStyle="primary"
                            disabled={!store.isSignUpFormValid}>
                            {M.authBlock.signUp}
                        </Button>
                        <Modal
                            show={store.showSignUpModal}
                            container={this}
                            onHide={this.handleHide}
                            aria-labelledby="contained-modal-title"
                        >
                            <Modal.Header closeButton>
                                <Modal.Title id="contained-modal-title">
                                    {M.authBlock.register}
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                {store.successSignUp ? M.authBlock.successSignUp : store.signUpError}
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={this.handleHide}>Close</Button>
                            </Modal.Footer>
                        </Modal>
                    </Row>
                </FormGroup>
            </form>
        );
    }
}

export default SignUp;

