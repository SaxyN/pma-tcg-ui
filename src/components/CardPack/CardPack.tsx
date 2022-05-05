import React from 'react';
import { makeStyles } from '@mui/styles';
import { CardPackControls } from './CardPackControls';

const styles = makeStyles((theme) => ({
    packOuter: {
        display: "grid",
        position: "absolute",
        width: "100%",
        gridTemplateColumns: "auto",
        justifyContent: "center",
        // border: 'solid red 2px',
        // height: "99vh",
        padding: "20vh 0 0 0",
    },
    packInner: {
        border: 'solid black 2px',
        height: "50vh",
        width: "80vw",
        position: "relative",
    }

}))

export const CardPack = () => {
    const classes = styles();
    return (
        <div className={classes.packOuter}>
            <div className={classes.packInner}>
                Pack Cards Here
                <CardPackControls />
            </div>
        </div>
    )
}