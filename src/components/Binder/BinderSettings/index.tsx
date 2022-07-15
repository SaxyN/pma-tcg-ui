import React from 'react';
import { makeStyles } from "@mui/styles";
import SettingsIcon from '@mui/icons-material/Settings';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { Box, Card, CardContent, Collapse, CardHeader, Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material';

const styles = makeStyles((theme) => ({
    settingsButton: {
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
    }

}))

export const BinderSettings = ({ setShowSettings, showSettings, handleSettingChange, showMissingCards }: any) => {
    const classes = styles();
    return (
        <div>
            <Box style={{ border: 'solid 2px gray', borderRadius: '5px', transition: 'all .2s ease', width: "min-content" }}>
                <button className={classes.settingsButton} onClick={() => setShowSettings(!showSettings)}>
                    {showSettings ? <ExpandLessIcon /> : <SettingsIcon />}
                </button>
                <Collapse in={showSettings} orientation="vertical">
                    <Box style={{ transition: "all .2s ease", backgroundColor: "white" }}>
                        <Checkbox style={{ width: "39px" }} checked={showMissingCards} onChange={() => handleSettingChange("Show Unowned")} />
                        <Typography variant="body2" fontSize={"10px"}>Show All</Typography>
                    </Box>
                </Collapse>
            </Box>
        </div>
    )
}