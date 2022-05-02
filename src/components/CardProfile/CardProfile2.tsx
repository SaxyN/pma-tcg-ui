import React from 'react';
import { makeStyles, styled } from '@mui/styles';
import CARD_IMAGE from "../../assets/img/jeremy_s.png";
import { StyledEngineProvider } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { Typography } from '@mui/material/';

import { RatingBarCircular } from './RatingBarCircular';
import { ColorPallete } from '../../models/colors';
import RatingBar from './RatingBar';

const styles = makeStyles((theme) => ({
    mainDiv: {
        position: 'absolute',
        width: "50%",
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
        width: '15vw',
        zIndex: 5,
        display: 'grid',
        // justifyContent: 'center',
        alignItems: 'center'
    },
    ratingBar: {
        // margin: '1vh 0 1vh 0'
    },
    ratingBarText: {
        marginLeft: '1.2vh',
        textAlign: 'center',
    },
    ratingBarOuter: {
        width: '100%',
        border: 'solid red 2px',
        height: '30px',
    },
    ratingBarInner: {

    }
}))

const BorderLinearProgress = styled(LinearProgress)(() => ({
    height: 25,
    // borderRadius: 15,
    border: 'solid black 2px',

    [`& .${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: ColorPallete.green.hex,
    },
    [`& .${linearProgressClasses.bar}`]: {
        // borderRadius: 5,
        backgroundColor: 'linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet)',
    },

}));

const QualityBar = (props: any) => {
    return (
        <div style={{
            height: '100%',
            width: props.progressWidth,
            // border: 'solid yellow 2px',
        }}>
            Hello
        </div>
    )
};

const CardProfile2 = () => {
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
                        {/* <RatingBar percent={61} colorHex={ColorPallete.yellow.hex} title="Quality" />
                        <RatingBar percent={20} colorHex={ColorPallete.red.hex} title="Centering" />
                        <RatingBar percent={40} colorHex={ColorPallete.orange.hex} title="Corners" />
                        <RatingBar percent={60} colorHex={ColorPallete.yellow.hex} title="Edges" />
                        <RatingBar percent={90} colorHex={ColorPallete.green.hex} title="Face" /> */}
                        <div className={classes.ratingBar}>
                            <Typography className={classes.ratingBarText} variant="subtitle1">Quality</Typography>
                            {/* <BorderLinearProgress variant="determinate" value={20} color='inherit' /> */}
                            {/* <div className={classes.ratingBarOuter}> */}
                            {/* <QualityBar progressWidth={"75%"} /> */}
                            <RatingBar barWidth={(100 - 90) + "%"} />
                            {/* </div> */}
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

export default CardProfile2;