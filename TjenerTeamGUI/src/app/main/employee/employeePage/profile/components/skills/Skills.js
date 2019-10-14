import React, { Component } from 'react';
import { Card } from "@material-ui/core";
import { NextGreenButton } from "../../../../../common/styled-components/CustomButtons";
import { connect } from "react-redux";

class Skills extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Card className="p-24 max-w-lg" style={{ backgroundColor: 'rgba(0, 0, 0, 0)', boxShadow: 'none' }}>
                    <div className="w-full">
                        <h1 className="flex p-2 w-full justify-center mb-10">Kompetencer</h1>
                        <div className="flex p-2 w-full justify-center">
                            <NextGreenButton
                                color="secondary"
                                variant="contained"
                                className="min-w-216 min-h-48"
                                style={{ color: "white" }}
                            //onClick={this.submitHandler}
                            >
                                Opdater
                            </NextGreenButton>
                        </div>
                    </div>
                </Card>
            </>
        );
    }
}

function mapStateToProps(state) {
    return {
        //changePage: state.corporations.changePage,
        user: state.auth.user,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            //changePassword: bindActionCreators(corporationUser.changePassword, dispatch)
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)(Skills);