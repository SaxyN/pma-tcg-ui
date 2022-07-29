import React, { Fragment } from 'react';
import { Tooltip, Typography, Zoom, Box } from '@mui/material';
import "./binderCard.scss";


export const BinderCard = ({ name, id, img, cardUID, handleClick }: any) => {
    return (
        <Box>
            <Tooltip
                title={
                    <Fragment>
                        <Typography color="inherit">{name}</Typography>
                        {"Click to see more!"}
                    </Fragment>
                }
                TransitionComponent={Zoom} arrow placement="right-start">
                <div className="binderSlot" onClick={(e: any) => handleClick(e, id)}>
                    <img src={"./assets/img/" + img + ".png"} alt={cardUID} className="binderCard" loading="lazy" draggable="false" unselectable="on" />
                </div>
            </Tooltip>
        </Box>
    )
}