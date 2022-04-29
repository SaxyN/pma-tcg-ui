import React from 'react';
import { makeStyles, styled } from '@mui/styles';
import CARD_IMAGE from "../../assets/jeremy_s.png";
import { StyledEngineProvider } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { Typography } from '@mui/material';
import { Colors } from "../../models/colors";

const styles = makeStyles((theme) => ({
    mainDiv: {
        position: 'absolute',
        top: '25vh',
        left: '30vw',
        border: 'solid black 2px'
    },
    cardOuter: {
        // border: 'sloid red 2px',
        padding: '3vh',
        backgroundColor: 'darkgray',
        display: 'grid',
        zIndex: 5,
        gridTemplateColumns: 'auto auto'
    },
    imageSection: {

    },
    cardImage: {
        height: '49vh',
        width: '35vh',
        paddingRight: '3vw',
        zIndex: 2,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: '10px',
    },
    qualitySection: {
        width: '20vw',
        zIndex: 5,
        display: 'grid'
    },
    ratingBar: {
        // margin: '1vh 0 1vh 0'
    },
    ratingBarText: {
        marginLeft: '1.2vh'
    }
}))

const BorderLinearProgress = styled(LinearProgress)(() => ({
    height: 25,
    // borderRadius: 15,
    border: 'solid black 2px',

    [`& .${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: Colors[0].hex,
    },
    [`& .${linearProgressClasses.bar}`]: {
        // borderRadius: 5,
        backgroundColor: Colors[0].hex,
    },

}));

const CardProfile = () => {
    const classes = styles();
    return (
        <StyledEngineProvider injectFirst>
            <div className={classes.mainDiv}>

                <div className={classes.cardOuter}>
                    <div className={classes.imageSection}>
                        <div className={classes.cardImage}>
                            <img src={CARD_IMAGE} className={classes.image} alt='card_image' />
                        </div>
                    </div>
                    <div className={classes.qualitySection}>
                        <div className={classes.ratingBar}>
                            <Typography className={classes.ratingBarText} variant="subtitle1">Centering</Typography>
                            <BorderLinearProgress variant="determinate" value={90} color='inherit' />
                        </div>
                        <div className={classes.ratingBar}>
                            <Typography className={classes.ratingBarText} variant="subtitle1">Corners</Typography>
                            <BorderLinearProgress variant="determinate" value={20} color='inherit' />
                        </div>
                        <div className={classes.ratingBar}>
                            <Typography className={classes.ratingBarText} variant="subtitle1">Edges</Typography>
                            <BorderLinearProgress variant="determinate" value={30} color='inherit' />
                        </div>
                        <div className={classes.ratingBar}>
                            <Typography className={classes.ratingBarText} variant="subtitle1">Face</Typography>
                            <BorderLinearProgress variant="determinate" value={60} color='inherit' />
                        </div>
                        <div className={classes.ratingBar}>
                            <Typography className={classes.ratingBarText} variant="subtitle1">Quality</Typography>
                            <BorderLinearProgress variant="determinate" value={50} color='inherit' />
                        </div>
                    </div>
                </div>
            </div>
        </StyledEngineProvider>
    )
}

export default CardProfile;