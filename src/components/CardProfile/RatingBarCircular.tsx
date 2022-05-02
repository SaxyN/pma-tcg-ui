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

function CircLabel(props: CircularProgressProps & { value: number, colorHex: string, qualityBar: boolean },) {

    const getRatingLabel = () => {
        if (props.qualityBar) {
            return `${Math.floor(props.value)}`
        } else {
            return `${Math.floor(props.value / 10)}`
        }
    }
    return (
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress thickness={5.0} variant="determinate" size={60} {...props} sx={{
                color: props.colorHex,
                // color: "linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%)",
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
                ><strong>{getRatingLabel()}</strong></Typography>
            </Box>
        </Box>
    )
}

export const RatingBarCircular = ({ percent, colorHex, title, qualityBar }: any) => {
    const classes = styles();
    return (
        <div style={{ textAlign: 'center' }}>
            <Typography variant="body1">{title}</Typography>
            <CircLabel value={percent} colorHex={colorHex} qualityBar={qualityBar} />
        </div>
        // <div className={classes.barOuter}>
        //     <div className={classes.bar}>
        //         <div className={classes.barBack}>

        //         </div>
        //     </div>
        // </div>
    )
}