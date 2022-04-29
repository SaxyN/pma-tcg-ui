import React from 'react';
import { makeStyles } from '@mui/styles';
import { CircularProgress, CircularProgressProps, Typography, circularProgressClasses } from '@mui/material';
import { Box } from '@mui/system';

const styles = makeStyles((theme) => ({
    barOuter: {
        width: '100%',
        height: '2vh',
        border: 'solid black 2px',
        borderRadius: '5px',
    },
    bar: {
    },
    barBack: {

    },
    barInner: {

    },
    barTitle: {

    },
    barText: {

    },

    // All Circ Progress
    circOuter: {
        postiion: 'relative',
        display: 'inline-flex'
    }
}))

function CircLabel(props: CircularProgressProps & { value: number, colorHex: string },) {
    return (
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress thickness={5.0} variant="determinate" size={60} {...props} sx={{
                color: props.colorHex,
                [`& .${circularProgressClasses.circle}`]: {
                    strokeLinecap: 'round',
                },
                [`& .${circularProgressClasses.circleIndeterminate}`]: {
                    backgroundColor: 'grey'
                },
            }} />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography
                    variant="body1"
                    component="div"
                    color="text.secondary"
                ><strong>{`${Math.floor(props.value / 10)}`}</strong></Typography>
            </Box>
        </Box>
    )
}

export const RatingBar = ({ percent, colorHex, title }: any) => {
    const classes = styles();
    return (
        <div style={{ textAlign: 'center' }}>
            <Typography variant="body1">{title}</Typography>
            <CircLabel value={percent} colorHex={colorHex} />
        </div>
        // <div className={classes.barOuter}>
        //     <div className={classes.bar}>
        //         <div className={classes.barBack}>

        //         </div>
        //     </div>
        // </div>
    )
}