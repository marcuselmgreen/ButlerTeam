import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { Icon, withStyles } from "@material-ui/core";
import * as GlobalPaths from "../../../GlobalPaths";
import Typography from "@material-ui/core/Typography";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Hidden from '@material-ui/core/Hidden';
import EmployeeDrawer from './components/EmployeeDrawer';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(3),
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'inline',
        },
    },
    title: {
        flexGrow: 1,
    },
    drawerButton: {
        marginRight: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
});


const EmployeeHeader = (props) => {

    const {
        menuShowHandler,
        logOutHandler,
        classes,
        menuOption,
        anchorEl,
        changePage,
        showDrawer,
        drawerShowHandler
    } = props;

    const profileMenu = (
        <>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={menuOption}
                onClose={menuShowHandler}
            >
                <MenuItem className="min-w-224" onClick={() => changePage(GlobalPaths.editEmployeeProfile)}>Rediger Profil</MenuItem>
                <MenuItem>Kontakt</MenuItem>
                <MenuItem>Hjælp</MenuItem>
                <div className="w-full pl-2 pr-2">
                    <hr style={{ borderTop: '1px solid #cccccc' }} />
                </div>
                <MenuItem onClick={logOutHandler}>Log ud</MenuItem>
            </Menu >
        </>
    );

    return (
        <>
            <AppBar className={classes.appBar} position="static" color="default">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={drawerShowHandler}
                        className={classes.drawerButton}
                    >
                        <Icon fontSize="default">menu</Icon>
                    </IconButton>
                    <IconButton edge="start" aria-controls="simple-menu" aria-haspopup="true"
                        className={classes.menuButton} onClick={menuShowHandler} color="inherit"
                        aria-label="menu">
                        <Icon fontSize="default"
                            className="">person</Icon>
                        <p style={{ fontSize: '17px' }}>Profil</p>
                    </IconButton>

                    <IconButton edge="start" aria-controls="simple-menu" aria-haspopup="true"
                        className={classes.menuButton}
                        onClick={() => changePage(GlobalPaths.employeePage)} color="inherit"
                        aria-label="menu">
                        <Icon fontSize="default">home</Icon>
                        <p style={{ fontSize: '17px' }}>Hjem</p>
                    </IconButton>

                    <IconButton edge="start" aria-controls="simple-menu" aria-haspopup="true"
                        className={classes.menuButton} onClick={menuShowHandler} color="inherit"
                        aria-label="menu">
                        <Icon fontSize="default"
                            className="">work_outline</Icon>
                        <p style={{ fontSize: '17px' }}>Mine jobs</p>
                    </IconButton>

                    <IconButton edge="start" aria-controls="simple-menu" aria-haspopup="true"
                        className={classes.menuButton} onClick={menuShowHandler} color="inherit"
                        aria-label="menu">
                        <Icon fontSize="default"
                            className="">search</Icon>
                        <p style={{ fontSize: '17px' }}>Find arbejde</p>
                    </IconButton>

                    <Typography variant="h6" className={classes.title}>
                    </Typography>

                    {/*<SubmitButton style={{color: 'white'}} onClick={() => changePage(GlobalPaths.createBooking)}>Book personale</SubmitButton>*/}

                    {profileMenu}

                </Toolbar>
            </AppBar>
            <Hidden smUp implementation="css">
                <EmployeeDrawer
                    menuShowHandler={menuShowHandler}
                    classes={classes}
                    changePage={changePage}
                    showDrawer={showDrawer}
                    drawerShowHandler={drawerShowHandler}
                    profileMenu={profileMenu}
                >
                </EmployeeDrawer>
            </Hidden>
        </>
    );
};

export default (withStyles(styles)(EmployeeHeader));
