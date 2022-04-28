import React from 'react';
import { makeStyles, styled } from '@mui/styles';
import CARD_IMAGE from "../../assets/jeremy_s.png";
import { StyledEngineProvider } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const styles = makeStyles((theme) => ({
    mainDiv: {
        position: 'absolute',
        top: '35vh',
        left: '35vw',
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
        height: '35vh',
        width: '25vh',
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
    }
}))

const BorderLinearProgress = styled(LinearProgress)(() => ({
    height: 25,
    borderRadius: 15,
    // [`&.${linearProgressClasses.colorPrimary}`]: {
    //   backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    // },
    // [`& .${linearProgressClasses.bar}`]: {
    //   borderRadius: 5,
    //   backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    // },
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
                        <div>
                            Hi
                            <BorderLinearProgress variant="determinate" value={30} />
                        </div>
                    </div>
                </div>
            </div>
        </StyledEngineProvider>
    )
}

export default CardProfile;