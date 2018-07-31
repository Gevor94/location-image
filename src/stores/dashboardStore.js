import {observable, action} from 'mobx';

import DashboardDAO from '../daos/DashboardDAO';

export class DashboardStore {
    @observable tab = 1;
    @observable mapLoaded = false;
    @observable center = {lat: 40.18111, lng: 44.51361};
    @observable location = {lat: 40.18111, lng: 44.51361};
    @observable images = [];
    @observable userImages = [];
    @observable user = '';
    @observable imagesLoaded = false;

    @action setTab(key) {
        this.tab = key;
    }

    @action changeImagesLoaded(state) {
        this.imagesLoaded = state;
    }

    @action setMapState(state) {
        this.mapLoaded = state;
    }

    @action setLocation(location) {
        this.location = location;
    }

    @action getCurrentLocation() {
        navigator.geolocation.getCurrentPosition((pos) => {
            return pos.coords;
        });
    }

    @action setUser(user) {
        this.user = user;
    }

    @action addFile(file) {
        file['location'] = this.location;
        file['title'] = file.name;
        file['date'] = Date.now();
        this.images.push(file);
    }

    @action getAllImages(user) {
        const User = user || this.user;
        DashboardDAO.getAllImages(User)
            .then((images) => {
                this.userImages = images.result;
                this.imagesLoaded = true;
            })
    }

    @action removeFile(file) {
        this.images.push(file);
        this.images = this.images.filter(image => image.name !== file.name);
    }
}

export default new DashboardStore();
