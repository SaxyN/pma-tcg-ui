import React from 'react';
import NormalCard from '../CardItem/NormalCard/NormalCard';
import HoloCard from "../CardItem/HoloCard/HoloCard";
import EpicCard from "../CardItem/EpicCard/EpicCard";
import LegendaryCard from "../CardItem/LegendaryCard/LegendaryCard";
import FullArtCard from "../CardItem/FullArtCard/FullArtCard";
import FullArtCardSpecial from "../CardItem/FullArtCardSpecial/FullArtCardSpecial";
import GoldCard from "../CardItem/GoldCard/GoldCard";
import RainbowCard from "../CardItem/RainbowCard/RainbowCard";
import BlackPearlCard from "../CardItem/BlackPearlCard/BlackPearlCard";
import GreyCard from '../CardItem/GreyCard/GreyCard';

const cardSizes = {
    "normal": { width: "187.5px", height: "262.5px", borderRadius: "5% / 3.5%" },
    "medium": { width: "247.5px", height: "346.5px", borderRadius: "5% / 3.5%" },
    "large": { width: "375px", height: "525px", borderRadius: "5% / 3.5%" },
}

const CardHandler = ({ cardImage, cardType, cardUID, sizeTag, specialTag, cardHoloX, cardHoloY, pattern, hoverEffects }: any) => {

    function getStyle(tag: any) {
        if (tag === 0) return cardSizes.normal
        if (tag === 1) return cardSizes.medium
        if (tag === 2) return cardSizes.large
        else return cardSizes.normal
    }

    switch (cardType) {
        case -1: {
            return <GreyCard imageFace={cardImage} imageStyle={getStyle(sizeTag)} cardUID={cardUID} sizeTag={sizeTag} specialTag={specialTag} cardHoloX={cardHoloX} cardHoloY={cardHoloY} pattern={pattern} hoverEffects={hoverEffects} />
        }
        case 0: {
            return <NormalCard imageFace={cardImage} imageStyle={getStyle(sizeTag)} cardUID={cardUID} sizeTag={sizeTag} specialTag={specialTag} cardHoloX={cardHoloX} cardHoloY={cardHoloY} pattern={pattern} hoverEffects={hoverEffects} />
        }
        case 1: {
            return <HoloCard imageFace={cardImage} imageStyle={getStyle(sizeTag)} cardUID={cardUID} sizeTag={sizeTag} specialTag={specialTag} cardHoloX={cardHoloX} cardHoloY={cardHoloY} pattern={pattern} hoverEffects={hoverEffects} />
        }
        case 2: {
            return <EpicCard imageFace={cardImage} imageStyle={getStyle(sizeTag)} cardUID={cardUID} sizeTag={sizeTag} specialTag={specialTag} cardHoloX={cardHoloX} cardHoloY={cardHoloY} pattern={pattern} hoverEffects={hoverEffects} />
        }
        case 3: {
            return <LegendaryCard imageFace={cardImage} imageStyle={getStyle(sizeTag)} cardUID={cardUID} sizeTag={sizeTag} specialTag={specialTag} cardHoloX={cardHoloX} cardHoloY={cardHoloY} pattern={pattern} hoverEffects={hoverEffects} />
        }
        case 4: {
            return <FullArtCard imageFace={cardImage} imageStyle={getStyle(sizeTag)} cardUID={cardUID} sizeTag={sizeTag} specialTag={specialTag} cardHoloX={cardHoloX} cardHoloY={cardHoloY} pattern={pattern} hoverEffects={hoverEffects} />
        }
        case 5: {
            return <FullArtCardSpecial imageFace={cardImage} imageStyle={getStyle(sizeTag)} cardUID={cardUID} sizeTag={sizeTag} specialTag={specialTag} cardHoloX={cardHoloX} cardHoloY={cardHoloY} pattern={pattern} hoverEffects={hoverEffects} />
        }
        case 6: {
            return <GoldCard imageFace={cardImage} imageStyle={getStyle(sizeTag)} cardUID={cardUID} sizeTag={sizeTag} specialTag={specialTag} cardHoloX={cardHoloX} cardHoloY={cardHoloY} pattern={pattern} hoverEffects={hoverEffects} />
        }
        case 7: {
            return <BlackPearlCard imageFace={cardImage} imageStyle={getStyle(sizeTag)} cardUID={cardUID} sizeTag={sizeTag} specialTag={specialTag} cardHoloX={cardHoloX} cardHoloY={cardHoloY} pattern={pattern} hoverEffects={hoverEffects} />
        }
        case 8: {
            return <RainbowCard imageFace={cardImage} imageStyle={getStyle(sizeTag)} cardUID={cardUID} sizeTag={sizeTag} specialTag={specialTag} cardHoloX={cardHoloX} cardHoloY={cardHoloY} pattern={pattern} hoverEffects={hoverEffects} />
        }
        default:
            return <>Unknown Card Type</>
    }
}

export default CardHandler;