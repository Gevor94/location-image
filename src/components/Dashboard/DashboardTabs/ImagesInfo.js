import React from 'react';
import PropTypes from "prop-types";

import {Col, ListGroup, ListGroupItem} from 'react-bootstrap';
import {inject, observer} from 'mobx-react';

import  dateFormat from 'dateformat';

import M from '../../../messages/messages';

import '../../../../node_modules/react-dropzone-component/styles/filepicker.css';
import '../../../../node_modules/dropzone/dist/min/dropzone.min.css';

@inject('dashboardStore')
@observer
class ImagesInfo extends React.Component {

    static propTypes = {
        store: PropTypes.object.isRequired
    };

    render() {
        const images = this.props.store.images.map(image => {
            return (
                <ListGroupItem header={image.name} bsClass="list-group-item images-info">
                    {`${M.uploadBlock.imagesBlock.longitude}  ${image.location.lng}\n`}
                    {`${M.uploadBlock.imagesBlock.latitude}   ${image.location.lat}\n`}
                    {`${M.uploadBlock.imagesBlock.date}      ${dateFormat(image.date, "dddd, mmmm dS, yyyy, h:MM TT")}\n`}
                    {`${M.uploadBlock.imagesBlock.title}      ${image.title}`}
                </ListGroupItem>
            );
        });
        return (
            <Col sm={5}>
                <h4>{M.uploadBlock.imagesBlock.info}</h4>
                <ListGroup>
                    {images}
                </ListGroup>
            </Col>
        );
    }
}

export default ImagesInfo;

