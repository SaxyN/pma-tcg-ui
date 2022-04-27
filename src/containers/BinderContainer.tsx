import React from 'react';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
import { TextField, Input } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

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
    },
    leftBinderSection: {
        borderRight: 'solid white 2px',
        "-webkit-scrollbar": { display: "none" },
        display: 'grid',
        gap: '5%',
        gridTemplateColumns: 'repeat(3, auto)',
        width: '100%',
        justifyContent: 'space-evenly',
        justifyItems: 'center',
        alignContent: 'space-evenly',
        alignItems: 'center',
        paddingLeft: '2vw',
        paddingRight: '2vw',
        borderTopLeftRadius: '5px',
        borderBottomLeftRadius: '5px',
    },
    rightBinderSection: {
        borderLeft: 'solid white 2px',
        "-webkit-scrollbar": { display: "none" },
        display: 'grid',
        gap: '5%',
        gridTemplateColumns: 'repeat(3, auto)',
        width: '100%',
        justifyContent: 'space-evenly',
        justifyItems: 'center',
        alignContent: 'space-evenly',
        alignItems: 'center',
        paddingLeft: '2vw',
        paddingRight: '2vw',
        borderTopRightRadius: '5px',
        borderBottomRightRadius: '5px',
    },
    cardSlot: {
        height: '21vh',
        width: '15vh',
        borderLeft: 'solid red 2px',
        borderBottom: 'solid red 2px',
        borderRight: 'solid red 2px',
    },
    rarityButtons: {
        position: 'absolute',
        left: '27vw',
        top: '93vh',
        display: 'flex',
        justifyContent: 'space-evenly',
        border: 'solid black 2px',
        borderBottomRightRadius: '5px',
        borderBottomLeftRadius: '5px',
    },
    rarityButton: {

    },
    searchBarContainer: {
        position: 'absolute',
        backgroundColor: '#333844',
        justifyContent: 'center',
        height: '3.1vh',
        display: 'flex',
        left: '64vw',
        top: '93vh',
        border: 'solid black 2px',
        borderBottomRightRadius: '5px',
        borderBottomLeftRadius: '5px',
        color: 'white',
        padding: '0 0.5vh 0.5vh 0.5vh',
    },
    searchBar: {
        '& .MuiInput-input': {
            color: "white",
            borderBottomColor: 'white',
        },
        '& .MuiInput-input:after': {
            borderBottomColor: 'white',
        },
    }
}))

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: 'white',
    },
    // '& label': {
    //     color: 'white',
    // },
    '& .MuiInputLabel-root': {
        color: 'white',
        paddingBottom: '5vh',
    },
    '& .MuiInput-standard:after': {
        borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
        height: '3vh',
        '& fieldset': {
            borderColor: 'darkgrey',
        },
        '&:hover fieldset': {
            borderColor: 'grey',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'white',
        },
    },
});

const BinderContainer = () => {
    const classes = styles();
    return (
        <div className={classes.binderOuter}>
            <div className={classes.binderMain}>
                <div className={classes.leftBinderSection}>
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
                <div className={classes.rightBinderSection}>
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
                <button>HOLO</button>
                <button>EPIC</button>
                <button>LEGENDARY</button>
            </div>
            <div className={classes.searchBarContainer}>
                {/* <InputLabel htmlFor='card_search'>
                <CssTextField id='card_search' label="Search" variant="outlined" />
            </InputLabel> */}
                {/* <TextField variant="standard"></TextField> */}
                <SearchIcon style={{ marginTop: '0.8vh' }} />
                <Input placeholder='Search' className={classes.searchBar} />
            </div>
        </div>
    )
}

export default BinderContainer;