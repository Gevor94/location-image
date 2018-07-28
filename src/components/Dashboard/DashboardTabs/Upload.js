import React from 'react';
import PropTypes from "prop-types";

import {Button, Grid, Row} from 'react-bootstrap';
import {inject, observer} from 'mobx-react';
import DropzoneComponent from 'react-dropzone-component';

import M from '../../../messages/messages';

import '../../../../node_modules/react-dropzone-component/styles/filepicker.css';
import '../../../../node_modules/dropzone/dist/min/dropzone.min.css';

import MapComponent from './MapComponent';
import ImagesInfo from './ImagesInfo';
import './Upload.css';

@inject('dashboardStore')
@observer
class Upload extends React.Component {

    constructor() {
        super();
        this.djsConfig = {
            addRemoveLinks: true,
            acceptedFiles: "image/jpeg,image/png",
            autoProcessQueue: false
        };

        this.componentConfig = {
            iconFiletypes: ['.jpg', '.png'],
            showFiletypeIcon: true,
            postUrl: '/uploadHandler'
        };


    }
    static propTypes = {
        store: PropTypes.object.isRequired
    };

    handleFile = (file) => {
        this.props.store.addFile(file);
    };

    handleRemoveFile = (file) => {
        this.props.store.removeFile(file);
    };

    onSubmit = () => {
        this.dropzone.processQueue();
    };


    render() {
        const config = this.componentConfig;
        const djsConfig = this.djsConfig;

        const eventHandlers = {
            init: dz => this.dropzone = dz,
            addedfile: this.handleFile,
            removedfile: this.handleRemoveFile
        };

        return (
            <Grid>
                <Row>
                    <h3>{M.uploadBlock.title}</h3>
                </Row>
                <Row>
                    <DropzoneComponent config={config}
                                       eventHandlers={eventHandlers}
                                       djsConfig={djsConfig}/>
                    <Button
                        type="submit"
                        bsStyle="primary"
                        disabled={!this.props.store.images.length}
                        onClick={this.onSubmit}>
                        {M.uploadBlock.submit}
                    </Button>
                </Row>
                <Row>
                    <p className="important-info">
                        {M.uploadBlock.importantInfo}
                    </p>
                </Row>
                <Row>
                    <MapComponent store={this.props.store} />
                    <ImagesInfo store={this.props.store} />
                </Row>
            </Grid>
        );
    }
}

export default Upload;

