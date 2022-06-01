import React from 'react';
import { makeStyles } from '@mui/styles';
import "./binderCard.scss";

const styles = makeStyles(() => ({
    binderCardOuter: {
        // border: "dashed purple 2px"
    },
    binderCardInner: {
        transition: "0.2s",
        '&:hover': {
            transform: "translateY(-10px)",
        }
    },
    binderCard: {
        width: "100%",
        height: "100%",
        borderRadius: "5% / 3.5%",
        "&:before": {
            content: "TEST TEST",
            clipPath: 'polygon(8.9% 11.2%, 8.9% 58.9%, 91.5% 58.9%, 91.5% 11.2%)',
            backgroundPosition: "50% 50%",
            backgroundSize: "300% 300%",
            background: 'linear-gradient(to right bottom, #430089, #82ffa1)',
            // backgroundImage: "linear-gradient(45deg, transparent 15%, #f32a6d 36%, #e7ac3e 43%, #45e692 50%, #5ac4e4 57%, #b153dd 64%, transparent 100%)",
            opacity: 1,
        },
        // mixBlendMode: "color-dodge",
        // filter: "brightness(0.5) contrast(1)",
        // zIndex: 10,

    }
}))

export const BinderCard = ({ img, imgStyle, cardUID }: any) => {
    const classes = styles();
    return (
        <div className={classes.binderCardOuter}>
            <div className={classes.binderCardInner}>
                <img src={"./assets/img/" + img + ".png"} className="binderCard" alt={cardUID} />
            </div>
        </div>
    )
}