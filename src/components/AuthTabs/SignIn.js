import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

import FontAwesome from 'react-fontawesome';
import {Row, FormGroup, FormControl, ControlLabel, Col, Button} from 'react-bootstrap';
import {inject, observer} from 'mobx-react';

import M from '../../messages/messages';
import './SignIn.css';

@inject('authStore')
@observer
class SignIn extends React.Component {

    static propTypes = {
        store: PropTypes.object.isRequired
    };

    onUsernameChange = (e) => {
        this.props.store.setUsername(e.target.value);
    };

    onPasswordChange = (e) => {
        this.props.store.setPassword(e.target.value);
    };

    onSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (event.target.elements) {
            const data = {
                username: this.props.store.username,
                pwd: this.props.store.password
            };
            this.props.store.login(data);
        }
    };

    render() {
        const {store} = this.props;

        return (
            <form  onSubmit={this.onSubmit}>
                <FormGroup bsClass="authContainer col-sm-offset-4">
                    <Row bsClass="row login-row">
                        <Col sm={12}>
                            <ControlLabel bsClass="title-sign-in">{M.authBlock.signIn}</ControlLabel>
                        </Col>
                    </Row>
                    <Row bsClass="row login-row">
                        <Col sm={12}>
                            <FormControl
                                type="text"
                                value={store.username}
                                placeholder={M.authBlock.usernamePlaceholder}
                                onChange={this.onUsernameChange}
                            />
                        </Col>
                    </Row>
                    <Row bsClass="row login-row">
                        <Col sm={12}>
                            <FormControl
                                type="text"
                                value={store.password}
                                placeholder={M.authBlock.passwordPlaceholder}
                                onChange={this.onPasswordChange}
                            />
                        </Col>
                    </Row>
                    <Row bsClass="row login-row">
                        <Col sm={10}>
                            <Button
                                type="submit"
                                bsStyle="primary"
                                disabled={!store.isSignInFormValid}
                                onSubmit={this.onSubmit}>
                                {M.authBlock.signIn}
                            </Button>
                        </Col>
                        <Col sm={2} className="facebook">
                            <FontAwesome
                                className="fb-icon"
                                name='facebook-square'
                                size='2x'
                            />
                        </Col>
                    </Row>
                </FormGroup>
            </form>
        );
    }
}

export default withRouter(SignIn);

