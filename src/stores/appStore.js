import {observable} from 'mobx';

export class AppStore {
  	@observable authPassed = false;
  	@observable checkCreds = true;
}

export default new AppStore();
