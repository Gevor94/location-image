import React from 'react';
import PropTypes from 'prop-types';

import {Grid, Tabs, Tab} from 'react-bootstrap';
import {inject, observer} from 'mobx-react';

import M from '../../messages/messages';

import Upload from './DashboardTabs/Upload';
import View from './DashboardTabs/View';
import LoadingScreen from "react-loading-screen";

@inject('dashboardStore')
@observer
class Dashboard extends React.Component {

    static propTypes = {
        dashboardStore: PropTypes.object.isRequired
    };

    handleSelect = (key) => {
        if (key === 1) {
            this.props.dashboardStore.changeImagesLoaded(false);
        }
        this.props.dashboardStore.setTab(key);
    };

    loadImages = (user) => {
        this.props.dashboardStore.getAllImages(user);
    };

    render() {
        let component =
            <LoadingScreen
                loading={true}
                bgColor='#f1f1f1'
                spinnerColor='#9ee5f8'
                textColor='#676767'
                text={M.loadingImages}
            />;
        if (this.props.dashboardStore.imagesLoaded) {
            component =
                <Grid fluid>
                    <Tabs
                        onSelect={this.handleSelect}
                        activeKey={this.props.dashboardStore.tab}>
                        <Tab eventKey={1} title={M.mainPage.viewImages}>
                            <View />
                        </Tab>
                        <Tab eventKey={2} title={M.mainPage.uploadImages}>
                            <Upload store={this.props.dashboardStore}/>
                        </Tab>
                        <Tab eventKey={3} title={M.mainPage.editImages}>
                            Coming soon..
                        </Tab>
                    </Tabs>
                </Grid>;
        } else {
            this.loadImages(this.props.user);
        }
        return (
            component
        );
    }
}

export default Dashboard;

