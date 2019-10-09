import React, {Component} from 'react';
import Photo from "../../../static/tjenerTeam2.png";
import {Card, CardContent, Icon} from "@material-ui/core";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import EditEmployeeProfile from "./components/EditEmployeeProfile";
import AppHeader from "../../../common/header/Header";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Paper from "@material-ui/core/Paper";

class EmployeeProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 0,
        }
    }

    changeTab = (e, tab) => {
        this.setState({selectedTab: tab})
    };

    changePage = (url) => {
        console.log("Url: " + url)
        this.props.history.push(url);
    };

    changePageHandler = (page) => {
        console.log("Page: " + page)
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
                        <Paper style={{backgroundColor: '#ffffff'}} square>
                            <Tabs value={selectedTab} indicatorColor="primary" variant="scrollable" onChange={this.changeTab}>
                                <Tab label={<span><Icon className="float-left" fontSize="small">info</Icon><span className="ml-2 float-left" style={{fontSize: '12px'}}>Medarbejderoplysninger</span></span>}/>
                            </Tabs>
                        </Paper>
                        <CardContent className="flex flex-col items-center ">
                            {selectedTab === 0 && <EditEmployeeProfile changePageHandler={this.changePageHandler}/>}
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
