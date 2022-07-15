import React from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';
import { Fade, Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import PackNui from './PackNui';
import { CardPackControls } from '../../components/CardPack/CardPackControls';
import CardHandler from '../../components/CardHandler/CardHandler';
import { CardList } from '../../mockData/mock'; // Mock Data
import PackOpener from '../../components/Packs/PackOpener';

const styles = makeStyles((theme) => ({
    wrapper: {
        width: "70%",
        textAlign: "center",
        justifyContent: "center"
    },
    showcaseBack: {
        width: "100%",
        display: "normal",
        gridTemplateColumns: "auto auto auto auto auto auto",
        justifyContent: "center",
        textAlign: "center",
        marginTop: "20px",
        padding: "20px"
    },
    innerShowcase: {
        width: "100%",
        display: "grid",
        gridTemplateColumns: "auto auto auto auto auto auto",
        justifyContent: "center",
        paddingBottom: "50px"
    },
    cardName: {
        marginBottom: "25px",
        textAlign: "center",
    }
}))

const PackContainer = () => {
    const classes = styles();
    const showPack = useSelector(
        (state: RootStateOrAny) => state.pack.packVisible
    );

    return (
        <div style={{ position: "absolute", top: 0, width: "100%" }}>
            <Fade in={showPack} timeout={1000}>
                <Box>
                    <PackNui>
                        <div className={classes.innerShowcase}>
                            <PackOpener />
                        </div>
                    </PackNui>
                </Box>
            </Fade>
        </div>
    )
}

export default PackContainer