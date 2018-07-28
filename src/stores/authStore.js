import {observable, action, computed} from 'mobx';

export class AuthStore {
    @observable tab = 1;
    @observable username = '';
    @observable password = '';
    @observable usernameRegister = '';
    @observable passwordRegister = '';
    @observable repeatPassword = '';

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

    @computed get isSignUpFormValid() {
        return this.usernameRegister && this.passwordRegister && (this.passwordRegister === this.repeatPassword);
    }

    @computed get isSignInFormValid() {
        return this.username && this.password;
    }
}

export default new AuthStore();
