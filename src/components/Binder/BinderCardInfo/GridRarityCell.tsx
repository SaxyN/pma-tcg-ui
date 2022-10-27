import React from 'react';
import { Typography, Box } from '@mui/material';

export const GridRarityCell = (props: any) => {

    const textSelector = (rarity: number): string => {
        switch (rarity) {
            case 0:
                return "Common"
            case 1:
                return "Holo"
            case 2:
                return "Epic"
            case 3:
                return "Legendary"
            case 4:
                return "Full Art"
            case 5:
                return "Full Special"
            case 6:
                return "Gold"
            case 7:
                return "Black Pearl"
            case 8:
                return "Rainbow"
            default:
                return "..."
        }
    }

    const colorSelector = (rarity: number): string => {
        switch (rarity) {
            case 0:
                return "black"
            case 1:
                return "lightgreen"
            case 2:
                return "#2298E8"
            case 3:
                return "orange"
            case 4:
                return "#D433E8"
            case 5:
                return "#D433E8"
            case 6:
                return "gold"
            case 7:
                return "black"
            case 8:
                return "red"
            default:
                return "black"
        }
    }

    return (
        <Box
            sx={{ borderRadius: "15px", border: `2px solid ${colorSelector(props.rarity)}`, padding: "2px 4px 2px 4px" }}
        >
            <Typography variant="body2" sx={{ color: `${colorSelector(props.rarity)}` }}>{textSelector(props.rarity)}</Typography>
        </Box>
    )
}