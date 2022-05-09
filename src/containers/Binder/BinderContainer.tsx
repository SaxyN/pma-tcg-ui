import React from 'react';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { Fade, Typography, Box } from '@mui/material';
import Binder from './Binder';
import BinderNui from './BinderNui';
import CardProfile from '../../components/CardProfile/CardProfile';

export const BinderContainer = () => {
    const dispatch = useDispatch();
    const showBinder = useSelector(
        (state: RootStateOrAny) => state.binder.binderVisible
    );

    return (
        <Fade in={showBinder} timeout={1000}>
            <Box>
                <BinderNui>
                    <Binder></Binder>
                    {/* <CardProfile /> */}
                </BinderNui>
            </Box>
        </Fade>
    )
}