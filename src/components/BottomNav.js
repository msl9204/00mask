import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

import ExploreIcon from "@material-ui/icons/Explore";
import ListIcon from "@material-ui/icons/List";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import InfoIcon from "@material-ui/icons/Info";

import { Link, useLocation } from "react-router-dom";

const useStyles = makeStyles({
    root: {
        background: "#eee",
        position: "fixed",
        bottom: 0,
        width: "100%",

        "&.MuiBottomNavigationAction-root": {
            minWidth: 0,
        },
    },
});

export default function SimpleBottomNavigation() {
    const classes = useStyles();
    const location = useLocation();

    const [value, setValue] = React.useState(() => {
        const path = location.pathname;
        if (path === "/list") {
            return 1;
        }
        if (path === "/help") {
            return 2;
        }
        if (path === "/about") {
            return 3;
        }

        return 0;
    });

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction
                component={Link}
                to="/"
                label="Map"
                icon={<ExploreIcon />}
            />
            <BottomNavigationAction
                component={Link}
                to="/list"
                label="List"
                icon={<ListIcon />}
            />
            <BottomNavigationAction
                component={Link}
                to="/help"
                label="Help"
                icon={<HelpOutlineIcon />}
            />
            <BottomNavigationAction
                component={Link}
                to="/about"
                label="Info"
                icon={<InfoIcon />}
            />
        </BottomNavigation>
    );
}
