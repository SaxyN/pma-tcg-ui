import React from 'react';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
import { TextField, Input, Divider, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { ChevronRight } from '@mui/icons-material';

const styles = makeStyles((theme) => ({
    sideSection: {
        position: 'absolute',
        backgroundColor: '#333844',
        border: 'solid black 2px',
        top: '32vh',
        left: '4vw',
        width: '9vw',
        color: 'white',
        zIndex: 2,
        padding: '0vh 1vh 0vh 1vh',
        borderRadius: '5px',
    },

    sideSectionButtons: {

    },
    sideSectionButton: {
        border: 'none',
        backgroundColor: 'grey',
        width: '100%',
        zIndex: 2,
        padding: '1vh 0.5vh 0.5vh 0.5vh',
        transition: 'ease 250ms',
        '&:hover': {
            backgroundColor: 'lightgrey',
        }
    },
    searchBar: {
        '& .MuiInput-root': {
            '& .Mui-focused fieldset': {
                borderColor: "red"
            }
        },
        '& .MuiInput-input': {
            color: "white",
            borderBottomColor: 'white',

        },
    },
    filterButton: {
        position: 'absolute',
        top: '35vh',
        left: '13.5vw',
        borderTopLeftRadius: '5px',
        borderBottomLeftRadius: '5px',
        border: 'none',
        backgroundColor: 'grey',
        zIndex: 2,
        padding: '0.75vh 0.5vh 0.5vh 0.5vh',
        transition: 'ease 250ms',
        '&:hover': {
            backgroundColor: 'lightgrey',
        }
    },
    chevronIcon: {
        margin: '0.8vh 0.8vh 2.0vh 0.8vh',
    }


}))


const FilterSection = () => {
    const classes = styles();
    const [show, setShow] = React.useState(false);
    if (show) {
        return (
            <div className={classes.sideSection}>
                <div style={{ display: 'flex' }}>
                    <Typography variant="h6">PMA Binder</Typography>
                    <ChevronRight onClick={() => setShow(!show)} className={classes.chevronIcon} />
                </div>
                <div style={{ display: "flex", padding: '0vh 0vh 1vh 0vh' }}>
                    <SearchIcon style={{ marginTop: '0.8vh' }} />
                    <Input placeholder='Search' className={classes.searchBar} />
                </div>
                <Divider orientation='horizontal' style={{ border: 'solid black 2px' }} />
                <div className={classes.sideSectionButtons}>
                    <button className={classes.sideSectionButton}>HOLO</button>
                    <button className={classes.sideSectionButton}>EPIC</button>
                    <button className={classes.sideSectionButton}>LEGENDARY</button>
                </div>
            </div>
        )
    } else {
        return (
            <button onClick={() => setShow(!show)} className={classes.filterButton}><FilterAltIcon /></button>
        )
    }
}

export default FilterSection;