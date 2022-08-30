import React from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';
import { Fade, Box } from '@mui/material';

import { TradingWindow } from '../../components/TradingWindow';


export const TradingContainer = () => {

    const showTrading = useSelector(
        (state: RootStateOrAny) => state.trade.showTrading
    );

    return (
        <Fade in={showTrading} timeout={1000}>
            <Box>
                <TradingWindow />
            </Box>
        </Fade>
    )
}