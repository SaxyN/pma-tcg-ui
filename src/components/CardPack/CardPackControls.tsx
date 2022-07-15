import React from 'react';
import { useNuiRequest } from "fivem-nui-react-lib";
import { makeStyles } from '@mui/styles';
import { Button } from "@mui/material";
import { useDispatch } from 'react-redux';
import * as PackActions from '../../redux/pack/pack.slice';

const styles = makeStyles((theme) => ({
    controlsOuter: {
        position: "absolute",
        // paddingTop: 'auto',
        bottom: "0",
        // border: 'solid red 2px',
        display: "grid",
        width: "100%",
        gridTemplateColumns: "auto",
        justifyContent: "center",
    },
    controlsInner: {
        // margin: "125px 125px 125px 125px",
        display: "grid",
        gridTemplateColumns: "auto auto",
        justifyContent: "space-between",
        border: 'solid grey 2px',
        margin: '10px',
    }
}))

export const CardPackControls = () => {
    const { send } = useNuiRequest();
    const classes = styles();
    const dispatch = useDispatch();

    const handlePackClose = () => {
        send("pma-tcg:closePack");
        dispatch(PackActions.closePack());
    }

    return (
        <div className={classes.controlsOuter}>
            <div className={classes.controlsInner}>
                <Button sx={{
                    color: "white",
                    backgroundColor: "#2C3340",
                    margin: "5px 15px 5px 15px",
                    '&:hover': {
                        backgroundColor: "#F28F6B",
                    },
                    fontSize: "10px",
                }}
                    variant="contained"
                    onClick={() => handlePackClose()}
                >Close</Button>
            </div>
        </div>
    )
}