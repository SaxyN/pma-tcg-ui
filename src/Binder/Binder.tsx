import React from 'react';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { Fade, Typography, Box } from '@mui/material';
import BinderContainer from '../containers/BinderContainer';
import BinderNui from './BinderNui';

export const Binder = () => {
    const dispatch = useDispatch();
    const showBinder = useSelector(
        (state: RootStateOrAny) => state.binder.binderVisible
    );

    return (
        <Fade in={showBinder} timeout={1000}>
            <Box>
                <BinderNui>
                    <BinderContainer></BinderContainer>
                </BinderNui>
            </Box>
        </Fade>
    )
}