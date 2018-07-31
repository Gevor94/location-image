import React from 'react';
import PropTypes from "prop-types";

import {Grid} from 'react-bootstrap';
import {inject, observer} from 'mobx-react';

import './Upload.css';
import PhotoGrid from 'react-photo-feed';
import 'react-photo-feed/library/style.css';
import Constants from '../../../Constants';

@inject('dashboardStore')
@observer
class View extends React.Component {

    static propTypes = {
        store: PropTypes.object.isRequired
    };

    render() {
        const userImages = this.props.dashboardStore.userImages.map((image, index) => {
            return {
                id: index+1,
                src: `${Constants.SERVER_URL}uploads/${image}`,
                bigSrc: `${Constants.SERVER_URL}uploads/${image}`
            }
        });
        let component = <span>
            "You have not images, in order to add them click to "Upload" tab"
        </span>;
        if (userImages.length) {
            component = <PhotoGrid columns={3} photos={userImages} />;
        }
        return (
            <Grid>
                {component}
            </Grid>
        );
    }
}

export default View;

