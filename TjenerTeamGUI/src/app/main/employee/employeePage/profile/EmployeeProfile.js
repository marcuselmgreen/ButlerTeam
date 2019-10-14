import React, { Component } from 'react';
import Photo from "../../../static/tjenerTeam2.png";
import { Card, CardContent, Icon } from "@material-ui/core";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import EditEmployeeProfile from "./components/editEmployeeProfile/EditEmployeeProfile";
import AppHeader from "../../../common/header/Header";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Paper from "@material-ui/core/Paper";
import DeleteProfile from "./components/DeleteProfile";
import WorkPlaces from './components/workPlaces/WorkPlaces';
import Skills from './components/skills/Skills';

class EmployeeProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 0,
        }
    }

    changeTab = (e, tab) => {
        this.setState({ selectedTab: tab })
    };

    changePage = (url) => {
        this.props.history.push(url);
    };

    changePageHandler = (page) => {
        this.props.history.push(page)
    };


    render() {
        const { selectedTab } = this.state;
        return (
            <>
                <AppHeader
                    changePage={this.changePage}
                />
                <div style={{
                    width: '100%',
                    backgroundImage: "url(" + Photo + ")",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }} className="flex flex-col flex-auto flex-shrink-0 p-16 md:flex-row md:p-0">

                    <Card className="w-full max-w-lg mx-auto m-16 md:m-0" square>
                        <Paper style={{ backgroundColor: '#ffffff' }} square>
                            <Tabs value={selectedTab} indicatorColor="primary" variant="scrollable" onChange={this.changeTab}>
                                <Tab label={<span><Icon className="float-left" fontSize="small">info</Icon><span className="ml-2 float-left" style={{ fontSize: '12px' }}>Medarbejderoplysninger</span></span>} />
                                <Tab label={<span><Icon className="float-left" fontSize="small">star</Icon><span className="ml-2 float-left" style={{ fontSize: '12px' }}>Kompetencer</span></span>} />
                                <Tab label={<span><Icon className="float-left" fontSize="small">my_location</Icon><span className="ml-2 float-left" style={{ fontSize: '12px' }}>Zoner</span></span>} />
                                <Tab label={<span><Icon className="float-left" fontSize="small">delete</Icon><span className="ml-2 float-left" style={{ fontSize: '12px' }}>Slet profil</span></span>} />
                            </Tabs>
                        </Paper>
                        <CardContent>
                            {selectedTab === 0 && <EditEmployeeProfile changePageHandler={this.changePageHandler} />}
                            {selectedTab === 1 && <Skills changePageHandler={this.changePageHandler} />}
                            {selectedTab === 2 && <WorkPlaces changePageHandler={this.changePageHandler} />}
                            <div className="flex flex-col items-center">
                                {selectedTab === 4 && <DeleteProfile />}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </>
        );
    }
}

function mapStateToProps(state) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)(EmployeeProfile);
