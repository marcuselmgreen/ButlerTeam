import React, { Component } from 'react';
import { Card, FormGroup, Checkbox, FormControlLabel } from "@material-ui/core";
import { NextGreenButton } from "../../../../../common/styled-components/CustomButtons";
import { connect } from "react-redux";
import './WorkPlaces.css';

class WorkPlaces extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Card className="p-24 max-w-lg" style={{ backgroundColor: 'rgba(0, 0, 0, 0)', boxShadow: 'none' }}>
                    <div className="w-full">
                    <p className="font-sans text-4xl font-bold text-gray-800 mt-20 text-center mb-40">Zoner</p>
                        <div className="flex flex-row">
                            <div className="flex-1 m-8 p-4 checkBox">
                                <FormGroup>
                                    <FormControlLabel
                                        className="p-0 m-0 relative justify-center h-64"
                                        style={{ float: 'right' }}
                                        control={
                                            <Checkbox
                                                name="northZealand"
                                                //checked={doesContainCity('northZealand')}
                                                //onClick={() => cityHandler('northZealand')}
                                                //value="checkedB"
                                                color="primary"
                                            />
                                        }
                                        label="Nordsjælland"
                                    />
                                </FormGroup>
                            </div>
                        </div>

                        <div className="flex flex-row mt-5">
                            <div className="flex-1 m-8 p-4 checkBox">
                                <FormGroup>
                                    <FormControlLabel
                                        className="p-0 m-0 relative h-64 justify-center "
                                        style={{ float: 'right' }}
                                        control={
                                            <Checkbox
                                                name="WestZealand"
                                                //checked={doesContainCity('WestZealand')}
                                                //onClick={() => cityHandler('WestZealand')}
                                                //value="checkedB"
                                                color="primary"
                                            />
                                        }
                                        label="Vestsjælland"
                                    />
                                </FormGroup>
                            </div>

                            <div className="flex-1 m-8 p-4 checkBox">
                                <FormGroup>
                                    <FormControlLabel
                                        className="p-0 m-0 relative h-64 justify-center font-bold"
                                        style={{ float: 'right' }}
                                        control={
                                            <Checkbox
                                                name=""
                                                //checked={doesContainCity('copenhagen')}
                                                //onClick={() => cityHandler('copenhagen')}
                                                //value="checkedB"
                                                color="primary"
                                            />
                                        }
                                        label="København"
                                    />
                                </FormGroup>
                            </div>
                        </div>
                        <div className="flex flex-row">

                            <div className="flex-1 m-8 p-4 checkBox mb-12 mt-5">
                                <FormGroup>
                                    <FormControlLabel
                                        className="p-0 m-0 relative justify-center h-64"
                                        style={{ float: 'right' }}
                                        control={
                                            <Checkbox
                                                name="southZealand"
                                                //checked={doesContainCity('southZealand')}
                                                //onClick={() => cityHandler('southZealand')}
                                                //value="checkedB"
                                                color="primary"
                                            />
                                        }
                                        label="Sydsjælland"
                                    />
                                </FormGroup>
                            </div>
                        </div>


                        <div className="flex flex-row mt-5">

                            <div className="flex-1 m-8 p-4 checkBox">
                                <FormGroup>
                                    <FormControlLabel
                                        className="p-0 m-0 relative"
                                        style={{ float: 'right' }}
                                        control={
                                            <Checkbox
                                                name="North Jutland"
                                                //checked={doesContainCity('bNorth Jutland')}
                                                //onClick={() => cityHandler('North Jutland')}
                                                //value="checkedB"
                                                color="primary"
                                            />
                                        }
                                        label="Nordjylland"
                                    />
                                </FormGroup>
                            </div>
                            <div className="flex-1 m-8 p-4 checkBox">

                                <FormGroup>
                                    <FormControlLabel
                                        className="p-0 m-0 relative"
                                        style={{ float: 'right' }}
                                        control={
                                            <Checkbox
                                                name='East Jutland'
                                                //checked={doesContainCity('East Jutland')}
                                                //onChange={() => cityHandler('East Jutland')}
                                                //value="checkedB"
                                                color="primary"
                                            />
                                        }
                                        label="Østjylland"
                                    />
                                </FormGroup>
                            </div>
                        </div>


                        <div className="flex flex-row mt-5">

                            <div className="flex-1 m-8 p-4 checkBox">
                                <FormGroup>
                                    <FormControlLabel
                                        className="p-0 m-0 relative"
                                        style={{ float: 'right' }}
                                        control={
                                            <Checkbox
                                                name="West Jutland"
                                                //checked={doesContainCity('West Jutland')}
                                                //onClick={() => cityHandler('West Jutland')}
                                                //value="checkedB"
                                                color="primary"
                                            />
                                        }
                                        label="Vestjylland"
                                    />
                                </FormGroup>
                            </div>
                            <div className="flex-1 m-8 p-4 checkBox">
                                <FormGroup>
                                    <FormControlLabel
                                        className="p-0 m-0 relative"
                                        style={{ float: 'right' }}
                                        control={
                                            <Checkbox
                                                name='Southern Jutland'
                                                //checked={doesContainCity('Southern Jutland')}
                                                //onClick={() => cityHandler('Southern Jutland')}
                                                //value="checkedB"
                                                color="primary"
                                            />
                                        }
                                        label="Sønderjylland"
                                    />
                                </FormGroup>
                            </div>
                        </div>

                        <div className="flex flex-row mt-5">

                            <div className="flex-1 m-8 p-4 checkBox">
                                <FormGroup>
                                    <FormControlLabel
                                        className="p-0 m-0 relative"
                                        style={{ float: 'right' }}
                                        control={
                                            <Checkbox
                                                name='Fyn'
                                                //checked={doesContainCity('Fyn')}
                                                //onClick={() => cityHandler('Fyn')}
                                                //value="checkedB"
                                                color="primary"
                                            />
                                        }
                                        label="Fyn og øerne"
                                    />
                                </FormGroup>
                            </div>
                            <div className="flex-1 m-8 p-4 checkBox">
                                <FormGroup>
                                    <FormControlLabel
                                        className="p-0 m-0 relative"
                                        style={{ float: 'right' }}
                                        control={
                                            <Checkbox
                                                name='Bornholm'
                                                //checked={doesContainCity('Bornholm')}
                                                //onChange={() => cityHandler('Bornholm')}
                                                //value="checkedB"
                                                color="primary"
                                            />
                                        }
                                        label="Bornholm"
                                    />
                                </FormGroup>
                            </div>
                        </div>
                        <div className="flex p-2 w-full mt-10 justify-center">
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
    mapDispatchToProps)(WorkPlaces);