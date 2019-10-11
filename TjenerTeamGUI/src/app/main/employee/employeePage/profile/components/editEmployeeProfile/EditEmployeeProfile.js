import React, { Component } from 'react';
import { Card, Button, TextField, MenuItem } from "@material-ui/core";
import { NextGreenButton } from "../../../../../common/styled-components/CustomButtons";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import FormValidator from "../../../../../validator/FormValidator";
import * as GlobalPaths from "../../../../../../GlobalPaths";
import './EditEmployeeProfile.css';
import WaiterBody from "../../../../../static/waiterBody.png";
import WaiterProfile from "../../../../../static/waiterProfile.png";
import {
    taxCardSelection
} from '../../helper_functions/Selections'

class EditEmployeeProfile extends Component {
    constructor(props) {
        super(props);
        //this.validator = new FormValidator(EditEmployeeFormValidator);
        this.state = {
            employee: {
                firstName: "",
                lastName: "",
                address: "",
                zipCode: "",
                city: "",
                email: "",
                phoneNumber: "",
                cpr: "",
                accountNumber: "",
                taxCard: "",
                //validation: this.validator.valid()
            },
        }
    }
    changeHandler = (e) => {
        let tempState = {...this.state.employee};
        tempState[e.target.name] = e.target.value;
        this.setState({employee: tempState})
    };

    render() {
        const {employee} = this.state;
        return (
            <Card className="p-24 max-w-lg" style={{ backgroundColor: 'rgba(0, 0, 0, 0)', boxShadow: 'none' }}>
                <div className="w-full">
                    <div className="flex mb-10">
                        <div className="w-1/2">
                            <div className="flex flex-col items-center mb-4">
                                {/*Hente profil og uniform billeder?*/}
                                <img className="waiter-profile w-full" src={WaiterProfile} alt="" />
                            </div>
                            <p className="text-center text-lg">Profil</p>
                            <div className="flex justify-center">
                                <Button className="upload-btn" variant="contained" color="primary">Upload</Button>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <div className="flex flex-col items-center mb-4">
                                <img className="waiter-body w-full" src={WaiterBody} alt="" />
                            </div>
                            <p className="text-center text-lg">Uniform</p>
                            <div className="flex justify-center">
                                <Button className="upload-btn" variant="contained" color="primary">Upload</Button>
                            </div>
                        </div>
                    </div>
                    <h1 className="mb-5">Profiloplysninger</h1>
                    <div className="flex flex-wrap sm:my-2">
                        <div className="p-2 w-full sm:w-1/2">
                            <TextField
                                name="firstName"
                                label="Fornavn"
                                className="w-full"
                                helperText={<span style={{ color: 'red' }}>{}</span>}
                                value={employee.firstName}
                                variant="outlined"
                                onChange={this.changeHandler}
                            />
                        </div>
                        <div className="p-2 w-full sm:w-1/2">
                            <TextField
                                name="lastName"
                                helperText={<span style={{ color: 'red' }}>{}</span>}
                                label="Efternavn"
                                className="w-full"
                                value={employee.lastName}
                                variant="outlined"
                                onChange={this.changeHandler}
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap sm:my-2">
                        <div className="p-2 w-full sm:w-1/2">
                            <TextField
                                name="address"
                                label="Adresse"
                                className="w-full"
                                helperText={<span style={{ color: 'red' }}>{}</span>}
                                value={employee.address}
                                variant="outlined"
                                onChange={this.changeHandler}
                            />
                        </div>
                        <div className="p-2 w-full sm:w-1/2">
                            <div className="w-1/3 float-left">
                                <TextField
                                    type="number"
                                    name="zipCode"
                                    className="w-full pr-2 m-0"
                                    helperText={<span style={{ color: 'red' }}>{}</span>}
                                    type="number"
                                    value={employee.zipCode}
                                    label="Post nr."
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.changeHandler}
                                />
                            </div>
                            <div className="w-2/3 float-left">
                                <TextField
                                    name="city"
                                    className="w-full pl-2 m-0"
                                    helperText={<span style={{ color: 'red' }}>{}</span>}
                                    value={employee.city}
                                    label="By"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.changeHandler}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap sm:my-2">
                        <div className="p-2 w-full sm:w-1/2">
                            <TextField
                                type="number"
                                name="phoneNumber"
                                label="Mobil nr."
                                className="w-full"
                                helperText={<span style={{ color: 'red' }}>{}</span>}
                                value={employee.phoneNumber}
                                variant="outlined"
                                onChange={this.changeHandler}
                            />
                        </div>
                        <div className="p-2 w-full sm:w-1/2">
                            <TextField
                                name="email"
                                helperText={<span style={{ color: 'red' }}>{}</span>}
                                label="Email"
                                className="w-full"
                                value={employee.email}
                                variant="outlined"
                                onChange={this.changeHandler}
                            />
                        </div>
                    </div>
                    <div className="w-full mt-12 mb-32">
                        <hr style={{ borderTop: '1px solid #cccccc' }} />
                    </div>
                    <div className="flex flex-wrap sm:my-2">
                        <div className="p-2 w-full sm:w-1/2">
                            <TextField
                                type="number"
                                name="cpr"
                                label="Cpr nr."
                                className="w-full"
                                helperText={<span style={{ color: 'red' }}>{}</span>}
                                value={employee.cpr}
                                variant="outlined"
                                onChange={this.changeHandler}
                            />
                        </div>
                        <div className="p-2 w-full sm:w-1/2">
                            <TextField
                                type="number"
                                name="accountNumber"
                                helperText={<span style={{ color: 'red' }}>{}</span>}
                                label="Konto nr."
                                className="w-full"
                                value={employee.accountNumber}
                                variant="outlined"
                                onChange={this.changeHandler}
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap sm:my-2">
                        <div className="p-2 sm:w-1/2 w-full">
                            <TextField
                                name="taxCard"
                                select
                                className="w-full m-0"
                                id="taxCardSelection"
                                style={{ borderColor: 'red' }}
                                label="Skattekort"
                                helperText={<span style={{ color: 'red' }}>{}</span>}
                                margin="normal"
                                value={employee.taxCard}
                                variant="outlined"
                                onChange={this.changeHandler}
                            >
                                {taxCardSelection.map((val, index) => (
                                    <MenuItem key={index} value={val}>
                                        {val}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </div>
                    </div>
                    <div className="w-full mt-12 mb-32">
                        <hr style={{ borderTop: '1px solid #cccccc' }} />
                    </div>
                    <div className="flex-wrap flex my-2">
                        <div className="w-full">
                            <div className="flex justify-center p-4">
                                <NextGreenButton
                                    //onClick={this.submitHandler}
                                    color="secondary"
                                    variant="contained"
                                    className="min-w-216 min-h-48 "
                                    style={{color: "white"}}>
                                    Opdater
                                </NextGreenButton>
                            </div>
                        </div>
                    </div>
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

