import React from 'react';
import { Icon, withStyles, useTheme, List, ListItem, Drawer, ListItemIcon, ListItemText, Collapse } from "@material-ui/core";
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
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
    nested: {
        paddingLeft: theme.spacing(4),
      },
});

const EmployeeDrawer = (props) => {
    const {
        classes,
        changePage,
        showDrawer,
        drawerShowHandler,
        logOutHandler,
        drawerItemExpandHandler,
        expandDrawerItem
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
                    className={classes.drawerButton} onClick={drawerItemExpandHandler} color="inherit"
                    aria-label="menu">
                    <ListItemIcon style={{ color: '#222222' }}>
                        <Icon fontSize="default">person</Icon>
                    </ListItemIcon>
                    <ListItemText primary={<p style={{ fontSize: '17px' }}>Profil</p>} />
                    {expandDrawerItem ? <ExpandLess /> : <ExpandMore />}
                </ListItem>

                <Collapse in={expandDrawerItem} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested} onClick={() => changePage(GlobalPaths.editEmployeeProfile)}>
                            <ListItemText primary="Rediger Profil" />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemText primary="Kontakt" />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemText primary="Hjælp" />
                        </ListItem>
                        <ListItem button className={classes.nested} onClick={logOutHandler}>
                            <ListItemText primary="Log ud" />
                        </ListItem>
                    </List>
                </Collapse>

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
                    aria-label="menu">
                    <ListItemIcon style={{ color: '#222222' }}>
                        <Icon fontSize="default">work_outline</Icon>
                    </ListItemIcon>
                    <ListItemText primary={<p style={{ fontSize: '17px' }}>Mine jobs</p>} />
                </ListItem>

                <ListItem button edge="start" aria-controls="simple-menu" aria-haspopup="true"
                    className={classes.drawerButton} color="inherit"
                    aria-label="menu">
                    <ListItemIcon style={{ color: '#222222' }}>
                        <Icon fontSize="default">search</Icon>
                    </ListItemIcon>
                    <ListItemText primary={<p style={{ fontSize: '17px' }}>Find arbejde</p>} />
                </ListItem>
            </List>
            {/*profileMenu*/}
        </Drawer>
    );
};
export default (withStyles(styles)(EmployeeDrawer));