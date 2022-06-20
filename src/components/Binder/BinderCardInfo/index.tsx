import React from 'react';
import { makeStyles } from '@mui/styles';
import { RootStateOrAny, useSelector } from 'react-redux';
import { Card, CardHeader, CardContent, CardActionArea, Typography, Modal } from "@mui/material";

const styles = makeStyles((theme) => ({
    infoCard: {
        position: "absolute",
        top: "25%",
        left: 0,
        right: 0,
        marginLeft: "auto",
        marginRight: "auto",
        width: "500px",
        height: "300px",
        border: "solid black 2px",
        backgroundColor: "#2C3340"
    },
}))

export const BinderCardInfo = ({ card }: any) => {
    const classes = styles();
    const cardInfo = useSelector(
        (state: RootStateOrAny) => state.binder.cardInfo
    );
    return (
        <div className={classes.infoCard}>
            <Card sx={{ backgroundColor: "gray" }}>
                <CardContent>
                    <Typography variant="h6">CARD NAME</Typography>
                </CardContent>
            </Card>
        </div>
    )
}