import React from 'react';
import { makeStyles } from '@mui/styles';
import { Button } from "@mui/material";

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
    },
    button: {

    }
}))

export const CardPackControls = () => {
    const classes = styles();
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
                    variant="contained" >Open Binder</Button>
                <Button sx={{
                    color: "white",
                    backgroundColor: "#2C3340",
                    margin: "5px 15px 5px 15px",
                    '&:hover': {
                        backgroundColor: "#F28F6B",
                    },
                    fontSize: "10px",
                }}
                    variant="contained" >Close</Button>
            </div>
        </div>
    )
}