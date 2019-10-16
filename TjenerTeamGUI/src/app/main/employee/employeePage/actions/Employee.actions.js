import * as employeeApi from '../../../../services/api/EmployeeUserApi';
import * as actionsTypes from './ActionTypes';
import snackbarConfig from "../../../../config/snackbarConfig";
import {showMessage} from "../../../../store/actions/fuse";
import {setBearerTokenOnAxis, storeTokenLocally} from "../../../../auth/store/actions";
import {setUserData, logout, logoutUser} from "../../../../auth/store/actions";

export function employeeLoginSuccess(userExist) {
    return {
        type: actionsTypes.LOGIN_EMPLOYEE_SUCCESS,
        userExist
    }
}

export function employeeLoginFailed(error) {
    return {
        type: actionsTypes.LOGIN_EMPLOYEE_FAILED,
        error
    }
}

export function employeeLogin(facebookAccessToken) {
    return function (dispatch) {
        return employeeApi
            .loginEmployee(facebookAccessToken)
            .then(user => {
                setBearerTokenOnAxis(user.jwt);
                storeTokenLocally(true, user.jwt);
                dispatch(setUserData(user.user)) ;
                dispatch(employeeLoginSuccess( user.user.userExists));
            })
            .catch(error => {
                dispatch(showMessage({
                    message: 'Noget galt gik ved login',
                    ...snackbarConfig.errorMessage
                }));
                dispatch(employeeLoginFailed(error))
            })
    }
}

export function updateEmployeeSuccess(employee) {
    return {
        type: actionsTypes.UPDATE_EMPLOYEE_SUCCESS,
        employee
    }
}

export function updateEmployeeFailed(error) {
    return {
        type: actionsTypes.UPDATE_EMPLOYEE_FAILED,
        error
    }
}

export function updateEmployee(employee) {
    return function (dispatch) {
        return employeeApi
            .updateEmployeeUser(employee)
            .then(user => {
                dispatch(setUserData(user));
                dispatch(updateEmployeeSuccess(user));
                debugger;
                dispatch(showMessage({
                    message: `Velkommen til ${user.name}!`,
                    ...snackbarConfig.successMessage
                }));
            })
            .catch(error => {
                dispatch(showMessage({
                    message: 'Noget galt gik ved opdateringen',
                    ...snackbarConfig.errorMessage
                }));
                dispatch(updateEmployeeFailed(error))
            })
    }
}

const deleteEmployeeSuccess = (employee) => {
    return {type: actionsTypes.DELETE_EMPLOYEE_SUCCESS, employee}
};
const deleteEmployeeFailed = (error) => {
    return {type: actionsTypes.DELETE_EMPLOYEE_FAILED, error}
};

export function deleteEmployeeUser(employee) {
    return function (dispatch) {
        return employeeApi.deleteEmployeeUser(employee)
            .then(user => {
                dispatch(deleteEmployeeSuccess(user));
                dispatch(logoutUser());
                dispatch(logout());
                dispatch(showMessage({
                    message: 'Profil slettet',
                    ...snackbarConfig.successMessage
                }));
            })
            .catch(error => {
                dispatch(deleteEmployeeFailed(error))
                dispatch(showMessage({
                    message: 'Profilen kunne ikke slettes',
                    ...snackbarConfig.errorMessage
                }));
            })
    }
}

