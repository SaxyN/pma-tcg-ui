import React from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';
import { Fade, Box } from '@mui/material';
import Binder from '../../components/Binder';
import BinderNui from './BinderNui';

export const BinderContainer = () => {
    const showBinder = useSelector(
        (state: RootStateOrAny) => state.binder.binderVisible
    );

    return (
        <Fade in={showBinder} timeout={1000} unmountOnExit>
            <Box>
                <BinderNui>
                    <Binder />
                </BinderNui>
            </Box>
        </Fade>
    )
}