import React from "react";
import AppBar from "../components/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import BottomNav from "../components/BottomNav";
import NaverMap from "../components/NaverMap";
import { setMapCenter, setMapZoom } from "../_actions";

const useStyles = makeStyles((theme) => ({
    mapWrapper: {
        width: "100%",
        marginBottom: theme.spacing(7),
        height: `calc(100vh - ${2 * theme.spacing(7)}px)`,
    },
}));

const MapPage = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const stores = useSelector((state) => state.stores);
    const mapCenter = useSelector((state) => state.mapCenter);
    const mapZoom = useSelector((state) => state.mapZoom);

    return (
        <React.Fragment>
            <AppBar />
            <div className={classes.mapWrapper}>
                <NaverMap
                    stores={stores}
                    center={mapCenter}
                    zoom={mapZoom}
                    onChangeCenter={(center) => {
                        dispatch(setMapCenter(center));
                    }}
                    onChangeZoom={(zoom) => {
                        dispatch(setMapZoom(zoom));
                    }}
                />
            </div>
            <BottomNav />
        </React.Fragment>
    );
};

export default MapPage;
