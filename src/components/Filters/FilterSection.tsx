import React from 'react';
import { makeStyles } from '@mui/styles';
import { TextField, Input, Divider, Typography, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { ChevronLeft, ExitToAppOutlined } from '@mui/icons-material';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import DiamondIcon from '@mui/icons-material/Diamond';
import TagIcon from '@mui/icons-material/Tag';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

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
        padding: '10px',
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
        position: 'relative',
        marginLeft: 'none',
        width: '4vh',
        // top: '6vh',
        // left: '1vh',
        borderRadius: '5px',
        backgroundColor: 'white',
        border: 'none',
        zIndex: 10,
        padding: '0.75vh 0.5vh 0.5vh 0.5vh',
        transition: 'ease 250ms',
        '&:hover': {
            backgroundColor: 'lightgrey',
        }
    },
    chevronIcon: {
        // margin: '0.8vh 0.8vh 2.0vh 0.8vh',
        position: 'relative',
        margin: "5px 0 0 auto",
    }


}))


const FilterSection = ({ handleSearchChange, handleNameFilter, handleQualityFilter, handleIDFilter }: any) => {
    const classes = styles();
    const [show, setShow] = React.useState(false);

    if (show) {
        return (
            // <Box className={classes.sideSection}>
            //     <div style={{ display: 'flex' }}>
            //         <Typography variant="h6">Filters</Typography>
            //         <ExitToAppOutlined onClick={() => setShow(!show)} className={classes.chevronIcon} />
            //     </div>
            //     <div style={{ display: "flex", padding: '0vh 0vh 1vh 0vh' }}>
            //         <SearchIcon style={{ marginTop: '0.8vh' }} />
            //         <Input placeholder='Search' className={classes.searchBar} onChange={(e) => handleSearchChange(e.target.value)} />
            //     </div>
            //     <Divider orientation='horizontal' style={{ border: 'solid black 2px' }} />
            // </Box>
            <Box style={{ border: 'solid 2px gray', borderRadius: '5px', transition: 'all .2s ease' }}>
                <button onClick={() => setShow(!show)} className={classes.filterButton}><ChevronLeft /></button>
                <button className={classes.filterButton}><DiamondIcon onClick={() => handleQualityFilter()} /></button>
                <button className={classes.filterButton}><TagIcon onClick={() => handleIDFilter()} /></button>
                <button className={classes.filterButton}><AccountBoxIcon onClick={() => handleNameFilter()} /></button>
            </Box>
        )
    } else {
        return (
            <Box style={{ border: 'solid 2px gray', borderRadius: '5px', transition: 'all .2s ease' }}>
                <button onClick={() => setShow(!show)} className={classes.filterButton}><FilterAltIcon /></button>
            </Box>
        )
    }
}

export default FilterSection;