import React from 'react';

import {Col} from 'react-bootstrap';
import {inject, observer} from 'mobx-react';

import M from '../../../messages/messages';

@inject('dashboardStore')
@observer
class MapComponent extends React.Component {

    componentDidMount() {
        this.initMap();
    }

    componentWillUnmount() {
        window.google.maps.event.removeListener('click');
    }

    initMap() {
        const Yerevan = this.props.dashboardStore.center; // Can't declare Yerevan with non-capital letter :)
        const map = new window.google.maps.Map(document.getElementById('map'), {
            center: Yerevan,
            zoom: 13
        });
        window.google.maps.event.addListener(map, 'click', (e) => {this.handleMapClick(e, map)});
    }

    handleMapClick = (e, map) => {
        if (window.marker && window.marker.setMap) {
            window.marker.setMap(null);
        }
        window.marker = new window.google.maps.Marker({
            position: e.latLng,
            map: map
        });
        this.props.dashboardStore.setLocation({lat: e.latLng.lat(), lng: e.latLng.lng()});
    };

    render() {
        return (
            <Col sm={7}>
                <h4>{M.uploadBlock.mapInfo}</h4>
                <div style={{height: '300px'}} id="map"></div>
            </Col>
        );
    }
}

export default MapComponent;

