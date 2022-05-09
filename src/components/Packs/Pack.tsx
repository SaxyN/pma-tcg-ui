import React from 'react';
import { makeStyles } from "@mui/styles";
import { Button, Card, CardContent, CardActions, CardHeader, Divider, Typography } from "@mui/material";

import ImageHandler from "../ImageHandler/ImageHandler";

const useStyles = makeStyles((theme) => ({
    main: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        padding: 20,
    },
    subMain: {
        display: ""
    },
    subButton: {
        marginLeft: "none",
        position: "relative",
    },
    cardStyle: {
        margin: "15px",
        textAlign: "center"
    },
    pack: {
        transition: "transform ease .5s",
        width: "270.25px", height: "525px",
        borderRadius: "15px",
        marginBottom: "10px",
        "&:hover": {
            transform: "scale(1.05)",
        }
    },
    packDescription: {
        marginTop: "10px",
    }
}))

const Pack = ({ packData, imageSize, handlePackOpen }: any) => {
    const classes = useStyles();

    return (
        <>
            <Card className={classes.cardStyle}>
                <CardHeader title={packData.name} />
                <Divider orientation='horizontal' />
                <CardContent>
                    <div className={classes.pack}>
                        <ImageHandler name={packData.image} size={imageSize} />
                    </div>
                    <Divider orientation='horizontal' />
                    <Typography className={classes.packDescription} variant="body1">{packData.description}</Typography>
                </CardContent>
                <Divider orientation='horizontal' />
                <CardActions style={{ justifyContent: "center", padding: "15px" }}>
                    <Button className={classes.subButton} variant="contained" onClick={() => handlePackOpen(packData)}>Open Now</Button>
                </CardActions>
            </Card>
        </>
    )
}



export default Pack