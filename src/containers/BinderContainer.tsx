import React from 'react';
import { makeStyles } from '@mui/styles';
import FilterSection from '../components/FilterSection';
import ExitButton from '../components/Buttons/ExitButton';

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
        top: '7.5vh',
        width: '70vw',
        height: '85vh',
        border: 'solid black 2px',
        backgroundColor: '#333844',
        color: 'white',
        borderRadius: '5px',
        zIndex: 5,
        // overflow: 'scroll',
        // "-webkit-scrollbar": { display: "none" },
        // overflowX: 'hidden',
    },
    binderSection: {
        display: 'grid',
        gap: '5%',
        gridTemplateColumns: 'repeat(6, auto)',
        width: '100%',
        justifyContent: 'space-evenly',
        justifyItems: 'center',
        paddingLeft: '2vw',
        paddingRight: '2vw',
        overflowX: 'hidden',
        padding: '2vh 0 2vh 0',
    },
    cardSlot: {
        height: '22.75vh',
        width: '16.25vh',
        border: 'solid red 2px'
    },
    rarityButtons: {
        position: 'absolute',
        left: '27vw',
        top: '92.75vh',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, auto)',
        gap: '1vh',
        justifyContent: 'space-evenly',
        borderBottomRightRadius: '5px',
        borderBottomLeftRadius: '5px',
        zIndex: 2,
    },
    rarityButton: {
        borderBottomLeftRadius: '5px',
        borderBottomRightRadius: '5px',
        border: 'none',
        backgroundColor: 'grey',
        zIndex: 2,
        padding: '1vh 0.5vh 0.5vh 0.5vh',
        '&:hover': {
            backgroundColor: 'lightgrey',
        }
    },
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
                    <div className={classes.cardSlot}></div>
                    <div className={classes.cardSlot}></div>
                    <div className={classes.cardSlot}></div>
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
            <div className={classes.rarityButtons}>
                <button className={classes.rarityButton}>HOLO</button>
                <button className={classes.rarityButton}>EPIC</button>
                <button className={classes.rarityButton}>LEGENDARY</button>
            </div>
            <FilterSection />
            <ExitButton />
            {/* <div className={classes.searchBarContainer}>
            </div> */}
        </div>
    )
}

export default BinderContainer;