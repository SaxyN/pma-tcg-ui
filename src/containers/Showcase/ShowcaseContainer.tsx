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
        // border: "solid yellow 2px",
    },
    showcaseButton: {
        color: "black",
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
            <Fade in={showcaseVisible} timeout={1000}>
                <Box>
                    <ShowcaseNui>
                        <div className={classes.showcaseOuter}>
                            <Tooltip TransitionComponent={Zoom} arrow placement="left-start" title={<AdvancedTooltip data={showcaseData} />} sx={{ marginRight: "15px" }}>
                                <Box sx={{ display: "block", textAlign: "center", padding: "10px" }}>
                                    <Button onClick={() => handleClose()} className={classes.showcaseButton}>Close</Button>
                                    <Box sx={{ margin: "10px" }}>
                                        <CardHandler cardImage={showcaseData.img} cardType={showcaseData.type} cardUID={showcaseData.uid} sizeTag={1} specialTag={showcaseData.specialTag} holoX={showcaseData.holoX} holoY={showcaseData.holoY} pattern={showcaseData.pattern} hoverEffects={true} />
                                    </Box>
                                </Box>
                            </Tooltip>
                        </div>
                    </ShowcaseNui>
                </Box>
            </Fade>
        </div>
    )
}