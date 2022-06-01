import React from 'react';
import { makeStyles } from '@mui/styles';

const styles = makeStyles(() => ({
    binderCardOuter: {
        // border: "dashed purple 2px"
    },
    binderCardInner: {
        transition: "0.2s",
        filter: "blur(0.5rem)",
    }
}))

export const MissingCard = ({ img, imgStyle, cardUID }: any) => {
    const classes = styles();
    return (
        <div className={classes.binderCardOuter}>
            <div className={classes.binderCardInner}>
                <img src={"./assets/img/" + img + ".png"} style={imgStyle} alt={cardUID} />
            </div>
        </div>
    )
}