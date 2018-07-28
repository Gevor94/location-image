import React from 'react';
import PropTypes from 'prop-types';

import {Grid, Tabs, Tab} from 'react-bootstrap';
import {inject, observer} from 'mobx-react';

import M from '../../messages/messages';

import Upload from './DashboardTabs/Upload';

@inject('dashboardStore')
@observer
class Dashboard extends React.Component {

    static propTypes = {
        dashboardStore: PropTypes.object.isRequired
    };
    
    handleSelect = (key) => {
        this.props.dashboardStore.setTab(key);
    };

    render() {
        return (
            <Grid fluid>
                <Tabs
                    onSelect={this.handleSelect}
                    activeKey={this.props.dashboardStore.tab}>
                    <Tab eventKey={1} title={M.mainPage.uploadImages}>
                        <Upload store={this.props.dashboardStore}/>
                    </Tab>
                    <Tab eventKey={2} title={M.mainPage.editImages}>
                        Tab 2 content
                    </Tab>
                    <Tab eventKey={3} title={M.mainPage.viewImages}>
                        Tab 3 content
                    </Tab>
                </Tabs>
            </Grid>
        );
    }
}

export default Dashboard;

