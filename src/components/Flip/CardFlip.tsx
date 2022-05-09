import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import ReactCardFlip from 'react-card-flip';
import card_back from '../../assets/img/card_back.png';

import cardFlipSfx from "../../assets/audio/card_flip.wav";
import holoFlipSfx from "../../assets/audio/nice.mp3";
import epicFlipSfx from "../../assets/audio/found.mp3";
import fullArtSpecialSfx from "../../assets/audio/thunder.mp3";
import legendaryFlipSfx from "../../assets/audio/english_rare.mp3";
import useSound from "use-sound";
import CardHandler from '../CardHandler/CardHandler';

const styles = makeStyles((theme) => ({
    flipCard: {
        margin: "35px",
    },
    normalBack: {
        height: "346.5px",
        transition: "box-shadow 0.1s ease-out",
        borderRadius: "5%/3.5%",
        "&:hover": {
            boxShadow: "0 0 30px -5px white, 0 0 10px -2px white, 0 55px 35px -20px rgba(0, 0, 0, 0.5)",
        }
    },
    holoBack: {
        height: "346.5px",
        transition: "box-shadow 0.1s ease-out",
        borderRadius: "5%/3.5%",
        "&:hover": {
            boxShadow: "0 0 30px 5px blue, 0 0 10px -2px blue, 0 55px 35px -20px rgba(0, 0, 0, 0.5)",
        }
    },
    epicBack: {
        height: "346.5px",
        transition: "box-shadow 0.1s ease-out",
        borderRadius: "5%/3.5%",
        "&:hover": {
            boxShadow: "0 0 30px 5px #18E3CE, 0 0 10px -2px #18E3CE, 0 55px 35px -20px rgba(0, 0, 0, 0.5)",
        }
    },
    legendaryBack: {
        height: "346.5px",
        transition: "box-shadow 0.1s ease-out",
        borderRadius: "5%/3.5%",
        "&:hover": {
            boxShadow: "0 0 30px 5px yellow, 0 0 10px -2px yellow, 0 55px 35px -20px rgba(0, 0, 0, 0.5)",
        }
    },
    fullArtBack: {
        height: "346.5px",
        transition: "box-shadow 0.1s ease-out",
        borderRadius: "5%/3.5%",
        "&:hover": {
            boxShadow: "0 0 30px 5px purple, 0 0 10px -2px purple, 0 55px 35px -20px rgba(0, 0, 0, 0.5)",
        }
    },
    fullArtSpecialBack: {
        height: "346.5px",
        transition: "box-shadow 0.1s ease-out",
        borderRadius: "5%/3.5%",
        "&:hover": {
            boxShadow: "0 0 30px 5px cyan, 0 0 10px -2px cyan, 0 55px 35px -20px rgba(0, 0, 0, 0.5)",
        }
    },
    goldBack: {
        height: "346.5px",
        transition: "box-shadow 0.1s ease-out",
        borderRadius: "5%/3.5%",
        "&:hover": {
            boxShadow: "0 0 30px 5px gold, 0 0 10px -2px gold, 0 55px 35px -20px rgba(0, 0, 0, 0.5)",
        }
    },
    blackPearlBack: {
        height: "346.5px",
        transition: "box-shadow 0.1s ease-out",
        borderRadius: "5%/3.5%",
        "&:hover": {
            boxShadow: "0 0 30px 5px black, 0 0 10px -2px black, 0 55px 35px -20px rgba(0, 0, 0, 0.5)",
        }
    },
    rainbowBack: {
        height: "346.5px",
        transition: "box-shadow 0.1s ease-out",
        borderRadius: "5%/3.5%",
        "&:hover": {
            boxShadow: "0 0 30px 5px red, 0 0 10px -2px blue, 0 55px 35px -20px rgba(0, 0, 0, 0.5)",
        }
    },
}))

const CardFlip = ({ cardType, cardImage, specialTag }: any) => {
    const classes = styles();
    const [flipped, setFlipped] = useState(false);
    const [normalCard] = useSound(
        cardFlipSfx,
        { volume: 0.25 }
    );
    const [holoCard] = useSound(
        holoFlipSfx,
        { volume: 0.25 }
    );
    const [epicCard] = useSound(
        epicFlipSfx,
        { volume: 0.45 }
    );
    const [legendaryCard] = useSound(
        legendaryFlipSfx,
        { volume: 0.25 }
    );
    const [fullArtCard] = useSound(
        epicFlipSfx,
        { volume: 0.25 }
    )
    const [fullArtSpecialCard] = useSound(
        fullArtSpecialSfx,
        { volume: 0.25 }
    )
    // const [] = useSound(
    //     "sound here",
    //     { volume: 0.25 }
    // )

    const handleFlip = () => {
        if (!flipped) {
            setFlipped(true)
            if (cardType === 0) {
                normalCard()
            } else if (cardType === 1) {
                holoCard()
            } else if (cardType === 2) {
                epicCard()
            } else if (cardType === 3) {
                legendaryCard()
            } else if (cardType === 4) {
                fullArtCard()
            } else if (cardType === 5) {
                fullArtSpecialCard()
            }
        }
    }

    return (
        <div style={{ margin: "20px" }}>
            <ReactCardFlip isFlipped={flipped} flipDirection='horizontal'>
                <div onClick={() => handleFlip()} className={
                    cardType === 1 ? classes.holoBack :
                        cardType === 2 ? classes.epicBack :
                            cardType === 3 ? classes.legendaryBack :
                                cardType === 4 ? classes.fullArtBack :
                                    cardType === 5 ? classes.fullArtSpecialBack :
                                        cardType === 6 ? classes.goldBack :
                                            cardType === 7 ? classes.blackPearlBack :
                                                cardType === 8 ? classes.rainbowBack :
                                                    classes.normalBack}>
                    {/*   width: 375px; height: 525px; width: 247.5px; height: 346.5px; */}
                    <img src={card_back} alt="logo" style={{ width: "247.5px", height: "346.5px", borderRadius: "5% / 3.5%" }} />
                </div>
                <>
                    <CardHandler cardImage={cardImage} cardType={cardType} sizeTag={1} specialTag={specialTag} />
                </>
            </ReactCardFlip>
        </div>
    )
}

export default CardFlip