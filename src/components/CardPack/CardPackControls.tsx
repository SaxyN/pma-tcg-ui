import React from 'react';
import { makeStyles } from '@mui/styles';
import { Button } from "@mui/material";

const styles = makeStyles((theme) => ({
    controlsOuter: {
        position: "absolute",
        bottom: "0",
        display: "grid",
        width: "100%",
        gridTemplateColumns: "auto",
        justifyContent: "center",
    },
    controlsInner: {
        display: "grid",
        gridTemplateColumns: "auto auto",
        justifyContent: "space-between",
        margin: '10px',
    }
}))

export const CardPackControls = ({ handleOpenPackGrid, handlePackClose }: any) => {
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
                    variant="contained"
                    onClick={() => handlePackClose()}
                >Close</Button>
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
                    onClick={() => handleOpenPackGrid()}
                >Info</Button>
            </div>
        </div>
    )
}