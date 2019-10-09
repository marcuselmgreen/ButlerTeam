import React, { Component } from 'react';
import { Card } from "@material-ui/core";
import { NextGreenButton } from "../../../../common/styled-components/CustomButtons";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import FormValidator from "../../../../validator/FormValidator";
import * as GlobalPaths from "../../../../../GlobalPaths";

class EditEmployeeProfile extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card className="p-24 max-w-lg" style={{ backgroundColor: 'rgba(0, 0, 0, 0)', boxShadow: 'none' }}>
                <div className="w-full">
                <h1>EditEmployeeProfile</h1>
                </div>
            </Card>
        );
    }
}

function mapStateToProps(state) {
    return {
        //user: state.auth.user,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            //updateUser: bindActionCreators(corporationUser.updateCorporationUser, dispatch),
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)(EditEmployeeProfile);

