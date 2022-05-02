import React from 'react';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { Fade, Typography, Box } from '@mui/material';
import BinderContainer from '../containers/BinderContainer';

export const Binder = () => {
    const dispatch = useDispatch();
    const showBinder = useSelector(
        (state: RootStateOrAny) => state.binder.binderVisible
    );

    return (
        <Fade in={showBinder} timeout={1000}>
            <Box>
                <BinderContainer></BinderContainer>
            </Box>
        </Fade>
    )
}