import React, { useEffect } from "react";
import AppBar from "../components/AppBar";
import { makeStyles } from "@material-ui/core/styles";

import BottomNav from "../components/BottomNav";
import NaverMap from "../components/NaverMap";
import { fetchStoresByGeo } from "../_actions";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
    mapWrapper: {
        width: "100%",
        marginBottom: theme.spacing(7),
        height: `calc(100vh - ${2 * theme.spacing(7)}px)`,
    },
}));

const MapPage = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const center = useSelector((state) => state.center);

    useEffect(() => {
        dispatch(fetchStoresByGeo(...center, 5000));
    }, [dispatch, center]);

    return (
        <React.Fragment>
            <AppBar />
            <div className={classes.mapWrapper}>
                <NaverMap />
            </div>
            <BottomNav />
        </React.Fragment>
    );
};

export default MapPage;
