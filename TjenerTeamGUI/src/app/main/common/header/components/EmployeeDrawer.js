import React from 'react';
import { Icon, withStyles, useTheme, List, ListItem, Drawer, ListItemIcon, ListItemText } from "@material-ui/core";
import * as GlobalPaths from "../../../../GlobalPaths";

const drawerWidth = 240;

const styles = theme => ({
    drawerButton: {
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    drawerPaper: {
        width: drawerWidth,
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
});

const EmployeeDrawer = (props) => {
    const {
        menuShowHandler,
        classes,
        changePage,
        showDrawer,
        drawerShowHandler,
        profileMenu
    } = props;

    const theme = useTheme();

    return (
        <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={showDrawer}
            onClose={drawerShowHandler}
            classes={{
                paper: classes.drawerPaper,
            }}
            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
            }}
        >
            <List>
                <ListItem edge="start" aria-controls="simple-menu" aria-haspopup="true"
                    className={classes.drawerButton} color="inherit"
                    aria-label="menu">
                    <ListItemText primary={<h3 style={{ fontSize: '17px' }}>JobButler</h3>} />
                </ListItem>

                <div className="w-full">
                    <hr style={{ borderTop: '1px solid #cccccc' }} />
                </div>

                <ListItem button edge="start" aria-controls="simple-menu" aria-haspopup="true"
                    className={classes.drawerButton} onClick={menuShowHandler} color="inherit"
                    aria-label="menu">
                    <ListItemIcon style={{ color: '#222222' }}>
                        <Icon fontSize="default">person</Icon>
                    </ListItemIcon>
                    <ListItemText primary={<p style={{ fontSize: '17px' }}>Profil</p>} />
                </ListItem>

                <ListItem button edge="start" aria-controls="simple-menu" aria-haspopup="true"
                    className={classes.drawerButton} color="inherit"
                    aria-label="menu" onClick={() => changePage(GlobalPaths.employeePage)}>
                    <ListItemIcon style={{ color: '#222222' }}>
                        <Icon fontSize="default">home</Icon>
                    </ListItemIcon>
                    <ListItemText primary={<p style={{ fontSize: '17px' }}>Hjem</p>} />
                </ListItem>

                <ListItem button edge="start" aria-controls="simple-menu" aria-haspopup="true"
                    className={classes.drawerButton} color="inherit"
                    aria-label="menu" onClick={menuShowHandler}>
                    <ListItemIcon style={{ color: '#222222' }}>
                        <Icon fontSize="default">work_outline</Icon>
                    </ListItemIcon>
                    <ListItemText primary={<p style={{ fontSize: '17px' }}>Mine jobs</p>} />
                </ListItem>

                <ListItem button edge="start" aria-controls="simple-menu" aria-haspopup="true"
                    className={classes.drawerButton} color="inherit"
                    aria-label="menu" onClick={menuShowHandler}>
                    <ListItemIcon style={{ color: '#222222' }}>
                        <Icon fontSize="default">search</Icon>
                    </ListItemIcon>
                    <ListItemText primary={<p style={{ fontSize: '17px' }}>Find arbejde</p>} />
                </ListItem>
            </List>
            {profileMenu}
        </Drawer>
    );
};
export default (withStyles(styles)(EmployeeDrawer));