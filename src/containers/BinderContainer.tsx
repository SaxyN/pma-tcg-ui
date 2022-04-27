import React from 'react';
import { makeStyles } from '@mui/styles';

const styles = makeStyles((theme) => ({
    binderOuter: {
        border: 'solid red 2px',
        textAlign: 'center',
        justifyContent: 'center',
        display: 'flex',
        height: '99vh',
    },
    binderMain: {
        display: 'flex',
        justifyContent: 'space-evenly',
        position: 'absolute',
        top: '15vh',
        width: '50vw',
        height: '70vh',
        border: 'solid black 2px',
        backgroundColor: '#333844',
        color: 'white',
    },
    binderSection: {
        border: 'solid white 2px',
        display: 'grid',
        gap: '5%',
        gridTemplateColumns: 'repeat(3, auto)',
        width: '100%',
        justifyContent: 'space-evenly',
        justifyItems: 'center',
        alignContent: 'space-evenly',
        alignItems: 'center',
    },
    cardSlot: {
        height: '14vh',
        width: '10vh',
        border: 'solid red 2px',
    }
}))

const BinderContainer = () => {
    const classes = styles();
    return (
        <div className={classes.binderOuter}>
            <div className={classes.binderMain}>
                <div className={classes.binderSection}>
                    <div className={classes.cardSlot}></div>
                    <div className={classes.cardSlot}></div>
                    <div className={classes.cardSlot}></div>
                    <div className={classes.cardSlot}></div>
                    <div className={classes.cardSlot}></div>
                    <div className={classes.cardSlot}></div>
                    <div className={classes.cardSlot}></div>
                    <div className={classes.cardSlot}></div>
                    <div className={classes.cardSlot}></div>
                </div>
                <div className={classes.binderSection}>
                    <div className={classes.cardSlot}></div>
                    <div className={classes.cardSlot}></div>
                    <div className={classes.cardSlot}></div>
                    <div className={classes.cardSlot}></div>
                    <div className={classes.cardSlot}></div>
                    <div className={classes.cardSlot}></div>
                    <div className={classes.cardSlot}></div>
                    <div className={classes.cardSlot}></div>
                    <div className={classes.cardSlot}></div>
                </div>
            </div>
        </div>
    )
}

export default BinderContainer;