import React from 'react';
import { makeStyles } from '@mui/styles';
import { TextField, InputBase, Divider, Typography, Box, Collapse, FormControl, InputLabel } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import DiamondIcon from '@mui/icons-material/Diamond';
import TagIcon from '@mui/icons-material/Tag';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import CancelIcon from '@mui/icons-material/Cancel';

const styles = makeStyles((theme) => ({
    filterButton: {
        position: 'relative',
        marginLeft: 'none',
        width: '4vh',
        // top: '6vh',
        // left: '1vh',
        // borderRadius: '5px',
        backgroundColor: 'white',
        border: 'none',
        zIndex: 10,
        padding: '0.75vh 0.5vh 0.5vh 0.5vh',
        transition: 'ease 250ms',
        '&:hover': {
            backgroundColor: 'lightgrey',
        }
    }

}))


const FilterSection = ({ handleSearchChange, handleNameFilter, handleQualityFilter, handleIDFilter, handleFilterReset }: any) => {
    const classes = styles();
    // Variables For Visbility
    const [showFilters, setShowFilters] = React.useState(false);
    const [showSearchBar, setShowSearchBar] = React.useState(false);

    const updateSearch = (searchParam: string) => {
        console.log(searchParam);
    }

    return (
        <div>
            <Box style={{ border: 'solid 2px gray', borderRadius: '5px', transition: 'all .2s ease', width: "min-content" }}>
                <button onClick={() => setShowFilters(!showFilters)} className={classes.filterButton} disabled>{!showFilters ? <FilterAltIcon /> : <ExpandLessIcon />}</button>
                <Collapse in={showFilters} orientation="vertical">
                    <Box style={{ transition: 'all .2s ease' }}>
                        <button className={classes.filterButton} onClick={() => handleQualityFilter()}><DiamondIcon /> <Typography fontSize={"10px"} textAlign={"center"} variant="body2">Rarity</Typography></button>
                        <button className={classes.filterButton} onClick={() => handleNameFilter()}><AccountBoxIcon /> <Typography fontSize={"10px"} textAlign={"center"} variant="body2">Name</Typography></button>
                        <button className={classes.filterButton} onClick={() => handleIDFilter()}><TagIcon /> <Typography fontSize={"10px"} textAlign={"center"} variant="body2">ID</Typography></button>
                        <button className={classes.filterButton} onClick={() => handleFilterReset()}><CancelIcon /> <Typography fontSize={"10px"} textAlign={"center"} variant="body2">Reset</Typography></button>
                    </Box>
                </Collapse>
            </Box>
        </div>
    )
}

export default FilterSection;