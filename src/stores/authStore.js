import {observable, action, computed} from 'mobx';

import AuthDAO from '../daos/AuthDAO';

export class AuthStore {
    @observable tab = 1;
    @observable username = '';
    @observable password = '';
    @observable usernameRegister = '';
    @observable passwordRegister = '';
    @observable repeatPassword = '';
    @observable signUpInProgress = false;
    @observable showSignUpModal = false;
    @observable successSignUp = false;
    @observable successLogin = false;
    @observable signUpError = '';

    @action setTab(key) {
        this.tab = key;
    }

    @action setUsername(username) {
        this.username = username;
    }

    @action setPassword(username) {
        this.password = username;
    }

    @action setUsernameRegister(username) {
        this.usernameRegister = username;
    }

    @action setPasswordRegister(password) {
        this.passwordRegister = password;
    }

    @action setRepeatPassword(repeatPassword) {
        this.repeatPassword = repeatPassword;
    }

    @action registerUser(data) {
		this.signUpInProgress = true;
		AuthDAO.register(data)
			.then((user) => {
				this.signUpInProgress = false;
				this.showSignUpModal = true;
				this.successSignUp = true;
			})
			.catch(e => {
                this.signUpInProgress = false;
                this.successSignUp = false;
                this.showSignUpModal = true;
                this.signUpError = e;
            });
    }

    @action login(data) {
		AuthDAO.login(data)
			.then((result) => {
                this.successLogin = true;
			})
			.catch(e => {
			    throw e;
            });
    }

    @action hideModal() {
        this.showSignUpModal = false;
        this.signUpError = '';
    }

    @computed get isSignUpFormValid() {
        return this.usernameRegister && this.passwordRegister && (this.passwordRegister === this.repeatPassword);
    }

    @computed get isSignInFormValid() {
        return this.username && this.password;
    }
}

export default new AuthStore();
