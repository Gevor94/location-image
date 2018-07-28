import {observable, action} from 'mobx';

export class DashboardStore {
    @observable tab = 1;
    @observable mapLoaded = false;
    @observable center = {lat:40.18111, lng: 44.51361};
    @observable location = {lat:40.18111, lng: 44.51361};
    @observable images = [];

    @action setTab(key) {
        this.tab = key;
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

    @action addFile(file) {
        file['location'] = this.location;
        file['title'] = file.name;
        file['state'] = file.status;
        this.images.push(file);
    }

    @action removeFile(file) {
        this.images.push(file);
        this.images = this.images.filter(image => image.name !== file.name);
    }
}

export default new DashboardStore();
