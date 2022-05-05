import React from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';
import {Fade, Box} from '@mui/material';
import PackNui from './PackNui';
import { CardPack } from '../components/CardPack/CardPack';
import { CardPackControls } from '../components/CardPack/CardPackControls';

const PackContainer = () => {
    const showPack = useSelector(
        (state: RootStateOrAny) => state.pack.packVisible
    );

    return (
        <div style={{position: "absolute", top:0, width: "100%"}}>
        <Fade in={showPack} timeout={1000}>
            <Box>
                <PackNui>
                    <CardPack />
                </PackNui>
            </Box>
        </Fade>
        </div>
    )
}

export default PackContainer