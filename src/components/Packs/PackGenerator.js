import React from 'react';
import { Paper, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';
// import { Route, Link, useRouteMatch } from 'react-router-dom';

const styles = makeStyles((theme) => ({
    cardOuter: {
        display: "flex",
        width: "100%",
        justifyContent: "center",
    },
    mainPaper: {
        width: "60%",
        height: "60%",
        display: "block",
    },
    cardInner: {
        display: "flex",
    }
}))

const PackGenerator = () => {
    // let match = useRouteMatch();
    const classes = styles();

    return (
        <div className={classes.cardOuter}>
            <Paper className={classes.mainPaper}>
                <Typography>Generation Results</Typography>
            </Paper>
        </div>
    )

}

export default PackGenerator