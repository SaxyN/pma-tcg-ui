import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Typography } from '@mui/material';

const styles = makeStyles((theme) => ({
    toolTipMain: {
        padding: "5px",
        marginRight: "35px"
    }
}))

export const AdvancedTooltip = ({ data }: any) => {
    const classes = styles();

    const returnType = (type: number) => {
        switch (type) {
            case 0:
                return "Normal"
            case 1:
                return "Holo"
            case 2:
                return "Epic"
            case 3:
                return "Legendary"
            case 4:
                return "Full Art"
            case 5:
                return "Full Art Special"
            case 6:
                return "Gold"
            case 7:
                return "Black Pearl"
            case 8:
                return "Rainbow"
        }
    }

    if (typeof data.uid != "string") {
        return (
            <Box className={classes.toolTipMain}>
                <Typography variant="body1">{data.name}</Typography>
                <Typography variant="body2">{"ID: " + data.id + " [" + data.set + "]"}</Typography>
                <Typography variant="body2">{"Rarity: " + returnType(data.type)}</Typography>
                <Typography variant="body2">{"Count: " + data.count}</Typography>
                <Typography variant="body2">Click 'More Info' to view more like this</Typography>
            </Box>
        )
    } else {
        if (data.pattern === undefined || data.pattern === "" || data.pattern === "sparkle") {
            return (
                <Box className={classes.toolTipMain}>
                    <Typography variant="body1">{data.name}</Typography>
                    <Typography variant="body2">{data.uid}</Typography>
                    <Typography variant="body2">{"ID: " + data.id + " [" + data.set + "]"}</Typography>
                    <Typography variant="body2">{"Rarity: " + returnType(data.type)}</Typography>
                    <Typography variant="body2">{"Pattern: None [ 0% , 0% ]"}</Typography>
                </Box>
            )
        } else {
            return (
                <Box className={classes.toolTipMain}>
                    <Typography variant="body1">{data.name}</Typography>
                    <Typography variant="body2">{data.uid}</Typography>
                    <Typography variant="body2">{"ID: " + data.id + " [" + data.set + "]"}</Typography>
                    <Typography variant="body2">{"Rarity: " + returnType(data.type)}</Typography>
                    <Typography variant="body2">{"Pattern: " + data.pattern + " [ " + data.holoX + " , " + data.holoY + " ]"}</Typography>
                </Box>
            )
        }
    }
}