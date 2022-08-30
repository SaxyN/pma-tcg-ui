import React from 'react';
import { Fade, Box, Tooltip, Zoom, Button } from "@mui/material";
import { useDispatch } from 'react-redux';
import CardHandler from '../../components/CardHandler/CardHandler';
import * as showcaseActions from '../../redux/showcase/showcase.slice';
import { AdvancedTooltip } from '../../components/Binder/BinderCardInfo/AdvancedTooltip';

export function ShowCase({ showCaseVisible, showCaseData }: any) {
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(showcaseActions.closeShowcase());
        setTimeout(() => {
            dispatch(showcaseActions.resetShowcase());
        }, 1100);
    }


    const handleTimeout = () => {
        if (showCaseVisible) {
            console.log("Creating Timeout");
            setTimeout(() => {
                handleClose();
            }, 10000)
        }
    }

    handleTimeout();
    return (
        <Fade in={showCaseVisible} timeout={1000} style={{ position: "absolute", bottom: 45, right: 45, zIndex: 700 }}>
            <Box>
                <div>
                    <Box sx={{ display: "block", textAlign: "center", padding: "10px" }}>
                        <Tooltip TransitionComponent={Zoom} arrow placement="left-start" title={<AdvancedTooltip data={showCaseData} />} sx={{ marginRight: "25px" }}>
                            <Box sx={{ margin: "10px 10px 10px 20px" }}>
                                <CardHandler cardImage={showCaseData.img} cardType={showCaseData.type} cardUID={showCaseData.uid} sizeTag={1} specialTag={showCaseData.specialTag} holoX={showCaseData.holoX} holoY={showCaseData.holoY} pattern={showCaseData.pattern} hoverEffects={true} />
                            </Box>
                        </Tooltip>
                        <Button variant="contained" onClick={() => handleClose()} style={{ backgroundColor: "#2C3340", zIndex: 500 }}>
                            CLOSE
                        </Button>
                    </Box>
                </div>
            </Box >
        </Fade >
    )
}