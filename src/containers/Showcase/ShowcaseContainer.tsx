import React from 'react';
import { Fade, Box, Button, Tooltip, Zoom } from "@mui/material";
import { makeStyles } from '@mui/styles';
import ShowcaseNui from './ShowcaseNui';
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux';
import CardHandler from '../../components/CardHandler/CardHandler';
import * as showcaseActions from '../../redux/showcase/showcase.slice';
import { AdvancedTooltip } from '../../components/Binder/BinderCardInfo/AdvancedTooltip';

const styles = makeStyles((theme) => ({
    showcaseOuter: {
    },
    showcaseButton: {
        color: "white",
        backgroundColor: "gray",
        '&:hover': { backgroundColor: "orange" }
    }
}));

export function ShowcaseContainer() {
    const classes = styles();
    const dispatch = useDispatch();
    const showcaseVisible = useSelector((state: RootStateOrAny) => state.showcase.showcaseVisible);
    const showcaseData = useSelector((state: RootStateOrAny) => state.showcase.showcaseData);

    const handleClose = () => {
        dispatch(showcaseActions.closeShowcase());
        setTimeout(() => {
            dispatch(showcaseActions.resetShowcase());
        }, 1100);
    }

    return (
        <div style={{ position: "absolute", bottom: 45, right: 45, zIndex: 5 }}>
            <Fade in={showcaseVisible} timeout={1000} unmountOnExit>
                <Box>
                    <ShowcaseNui>
                        <div className={classes.showcaseOuter}>
                            <Box sx={{ display: "block", textAlign: "center", padding: "10px" }}>
                                <Button onClick={() => handleClose()} sx={{
                                    color: "white",
                                    backgroundColor: "gray",
                                    '&:hover': { backgroundColor: "orange" }
                                }}>Close</Button>
                                <Tooltip TransitionComponent={Zoom} arrow placement="left-start" title={<AdvancedTooltip data={showcaseData} />} sx={{ marginRight: "25px" }}>
                                    <Box sx={{ margin: "10px 10px 10px 20px" }}>
                                        <CardHandler cardImage={showcaseData.img} cardType={showcaseData.type} cardUID={showcaseData.uid} sizeTag={1} specialTag={showcaseData.specialTag} holoX={showcaseData.holoX} holoY={showcaseData.holoY} pattern={showcaseData.pattern} hoverEffects={true} />
                                    </Box>
                                </Tooltip>
                            </Box>
                        </div>
                    </ShowcaseNui>
                </Box>
            </Fade>
        </div>
    )
}