import React from 'react';
import PropTypes from 'prop-types';

import {Grid, Tabs, Tab} from 'react-bootstrap';
import {inject, observer} from 'mobx-react';

import LoadingScreen from 'react-loading-screen';

import M from '../../messages/messages';

import Upload from './DashboardTabs/Upload';
import View from './DashboardTabs/View';

@inject('dashboardStore')
@observer
class Dashboard extends React.Component {

    static propTypes = {
        dashboardStore: PropTypes.object.isRequired
    };

    componentDidMount() {
        this.props.dashboardStore.getAllImages(this.props.user);
        this.props.dashboardStore.setUser(this.props.user);
    }

    handleSelect = (key) => {
        if (key === 1) {
            this.props.dashboardStore.changeImagesLoaded(false);
        }
        this.props.dashboardStore.setTab(key);
    };

    loadImages = () => {
        this.props.dashboardStore.getAllImages(this.props.user);
    };

    render() {
        if (!this.props.dashboardStore.imagesLoaded) {
            this.loadImages();
        }
        return (
            <Grid fluid>
                <Tabs
                    onSelect={this.handleSelect}
                    activeKey={this.props.dashboardStore.tab}>
                    <Tab eventKey={1} title={M.mainPage.viewImages}>
                        {this.props.dashboardStore.imagesLoaded ? <View /> : <LoadingScreen
                            loading={true}
                            bgColor='#f1f1f1'
                            spinnerColor='#9ee5f8'
                            textColor='#676767'
                            text={M.loadingImages}
                        />}
                    </Tab>
                    <Tab eventKey={2} title={M.mainPage.uploadImages}>
                        <Upload store={this.props.dashboardStore}/>
                    </Tab>
                    <Tab eventKey={3} title={M.mainPage.editImages}>
                        Coming soon..
                    </Tab>
                </Tabs>
            </Grid>
        );
    }
}

export default Dashboard;

