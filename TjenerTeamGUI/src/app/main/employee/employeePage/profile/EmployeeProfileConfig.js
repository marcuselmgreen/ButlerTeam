import EmployeeProfile from "./EmployeeProfile";
import authRoles from "../../../../auth/authRoles";

export const EmployeeProfileConfig = {
    settings: {
        layout: {
            config: {
                navbar         : {
                    display: false
                },
                toolbar        : {
                    display: false
                },
                footer         : {
                    display: false
                },
                leftSidePanel  : {
                    display: false
                },
                rightSidePanel : {
                    display: false
                }
            }
        }
    },
    // auth: authRoles.corporation,
    routes  : [
        {
            path     : '/employeeProfile',
            component: EmployeeProfile
        }
    ]
};
