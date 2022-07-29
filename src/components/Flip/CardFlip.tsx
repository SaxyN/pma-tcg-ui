import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import ReactCardFlip from 'react-card-flip';

import cardFlipSfx from "../../assets/audio/card_flip.wav";
import holoFlipSfx from "../../assets/audio/nice.mp3";
import epicFlipSfx from "../../assets/audio/found.mp3";
import fullArtSpecialSfx from "../../assets/audio/thunder.mp3";
import legendaryFlipSfx from "../../assets/audio/english_rare.mp3";
import useSound from "use-sound";
import CardHandler from '../CardHandler/CardHandler';
import fullArtSfx from '../../assets/audio/Oooo_3.mp3';
import goldSfx from '../../assets/audio/goldSfx.mp3';
import blackPearlSfx from '../../assets/audio/pearlSfx.wav';
import rainbowSfx from '../../assets/audio/rainbowSfx.mp3';

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
            boxShadow: "0 0 30px 5px lightgreen, 0 0 10px -2px lightgreen, 0 55px 35px -20px rgba(0, 0, 0, 0.5)",
        }
    },
    epicBack: {
        height: "346.5px",
        transition: "box-shadow 0.1s ease-out",
        borderRadius: "5%/3.5%",
        "&:hover": {
            boxShadow: "0 0 30px 5px blue, 0 0 10px -2px blue, 0 55px 35px -20px rgba(0, 0, 0, 0.5)",
        }
    },
    legendaryBack: {
        height: "346.5px",
        transition: "box-shadow 0.1s ease-out",
        borderRadius: "5%/3.5%",
        "&:hover": {
            boxShadow: "0 0 30px 5px #18E3CE, 0 0 10px -2px #18E3CE, 0 55px 35px -20px rgba(0, 0, 0, 0.5)",
        }
    },
    fullArtBack: {
        height: "346.5px",
        transition: "box-shadow 0.1s ease-out",
        borderRadius: "5%/3.5%",
        "&:hover": {
            boxShadow: "0 0 30px 5px #F933FF, 0 0 10px -2px #F933FF, 0 55px 35px -20px rgba(0, 0, 0, 0.5)",
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

const CardFlip = ({ card, onCardFlip, index }: any) => {
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
        fullArtSfx,
        { volume: 0.25 }
    )
    const [fullArtSpecialCard] = useSound(
        fullArtSpecialSfx,
        { volume: 0.25 }
    )
    const [goldCard] = useSound(
        goldSfx,
        { volume: 0.25 }
    )
    const [blackPearlCard] = useSound(
        blackPearlSfx,
        { volume: 0.25 }
    )
    const [rainbowCard] = useSound(
        rainbowSfx,
        { volume: 0.25 }
    )
    // const [] = useSound(
    //     "sound here",
    //     { volume: 0.25 }
    // )

    const handleFlip = () => {
        if (!flipped) {
            setFlipped(true);
            onCardFlip(index);
            if (card.type === 0) {
                normalCard()
            } else if (card.type === 1) {
                holoCard()
            } else if (card.type === 2) {
                epicCard()
            } else if (card.type === 3) {
                legendaryCard()
            } else if (card.type === 4) {
                fullArtCard()
            } else if (card.type === 5) {
                fullArtSpecialCard()
            } else if (card.type === 6) {
                goldCard()
            } else if (card.type === 7) {
                blackPearlCard()
            } else if (card.type === 8) {
                rainbowCard()
            }
        }
    }

    if (card) {
        return (
            <div style={{ margin: "20px" }}>
                <ReactCardFlip isFlipped={flipped} flipDirection='horizontal'>
                    <div onClick={() => handleFlip()} className={
                        card.type === 1 ? classes.holoBack :
                            card.type === 2 ? classes.epicBack :
                                card.type === 3 ? classes.legendaryBack :
                                    card.type === 4 ? classes.fullArtBack :
                                        card.type === 5 ? classes.fullArtSpecialBack :
                                            card.type === 6 ? classes.goldBack :
                                                card.type === 7 ? classes.blackPearlBack :
                                                    card.type === 8 ? classes.rainbowBack :
                                                        classes.normalBack}>
                        {/*   width: 375px; height: 525px; width: 247.5px; height: 346.5px; */}
                        <img src={"./assets/img/" + card.card_back + ".png"} alt="card_back" style={{ width: "248px", height: "347px", borderRadius: "5% / 3.5%" }} loading="lazy" />
                    </div>
                    <>
                        <CardHandler cardImage={card.img} cardType={card.type} cardUID={card.uid} sizeTag={1} specialTag={card.specialTag} cardHoloX={card.holoX} cardHoloY={card.holoY} pattern={card.pattern} hoverEffects={true} />
                    </>
                </ReactCardFlip>
            </div>
        )
    }
}

export default CardFlip