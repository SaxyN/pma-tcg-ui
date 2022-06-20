import React from 'react';
import "./binderSettings.scss";

import SettingsIcon from '@mui/icons-material/Settings';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Box, Card, CardContent, CardHeader, Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material';

export const BinderSettings = ({ setShowSettings, showSettings }: any) => {

    return (
        <Box className="settingsWrapper">
            <Box style={{ border: 'solid 2px gray', borderRadius: '5px' }}>
                <button className={showSettings ? "settingsButtonActive" : "settingsButton"} onClick={() => setShowSettings(!showSettings)}>
                    {showSettings ? <ChevronLeftIcon /> : <SettingsIcon />}
                </button>
                {showSettings ?
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Settings</Typography>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Show Unowned" />
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Enable Card Effects" />
                            </FormGroup>
                        </CardContent>
                    </Card>
                    : <></>}
            </Box>
        </Box>
    )
}