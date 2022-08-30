import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Button, Divider, Fade, IconButton, Modal, Typography } from '@mui/material';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import CardHandler from '../CardHandler/CardHandler';
import { Card } from '../../models/CardModel';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import * as BinderActions from '../../redux/binder/binder.slice';

import { columns } from '../Binder/BinderCardInfo/GridDefs';
import { DataGrid } from '@mui/x-data-grid';
import { useNuiRequest } from 'fivem-nui-react-lib';

const styles = makeStyles((theme) => ({
    tradingOuter: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 1300,
        height: 800,
        border: "solid 2px black",
        backgroundColor: "#2C3340",
        color: "white",
        boxShadow: "24px",
        borderRadius: "15px",
        padding: "15px",
    },
    tradingInner: {
        margin: 0,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: 'translate(-50%, -50%)',
    },
    tradeDetails: {
        height: 45,
        width: "100%",
        border: "solid 2px white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "5px 0 5px 0",
    },
    tradeWindow: {
        border: "solid 2px transparent",
        width: "100%",
        height: 330,
        display: "flex",
        justifyContent: "center",
    },
    tradeItem: {
        margin: "15px",
    },
    acceptButton: {
        margin: "auto 5px auto 5px",
        color: "white",
        backgroundColor: "gray",
        '&:hover': { backgroundColor: "green" }
    },
    cancelButton: {
        margin: "auto 5px auto 5px",
        color: "white",
        backgroundColor: "gray",
        '&:hover': { backgroundColor: "red" }
    },
    gridOpenButton: {
        margin: 0,
        position: "absolute",
        top: "1%",
        right: "1%",
        zIndex: 20,
    }


}))

export const TradingWindow = () => {
    const classes = styles();
    const dispatch = useDispatch();
    const { send } = useNuiRequest();
    const [openGrid, setOpenGrid] = React.useState(false);

    const localSelected = useSelector(
        (state: RootStateOrAny) => state.trade.localSelected
    );

    const remoteSelected = useSelector(
        (state: RootStateOrAny) => state.trade.remoteSelected
    );

    const subCollection = useSelector(
        (state: RootStateOrAny) => state.binder.subCollection
    );

    const handleGetGrid = () => {
        setOpenGrid(!openGrid);
    }

    const handleAddToTrade = (cardToAdd: any) => {
        if (localSelected.length < 5) {
            // send("pma-tcg:addCardToTrade", cardToAdd.row);
        }
    }

    const handleCancelTrade = () => {
        send("pma-tcg:cancelTrade");
    }


    return (
        <Box className={classes.tradingOuter}>
            <Box className={classes.tradingInner}>
                <Box className={classes.gridOpenButton}>
                    <IconButton onClick={handleGetGrid} sx={{ color: "white" }}><AddCircleIcon /></IconButton>
                </Box>
                <Typography variant="h6">Your Offerings</Typography>
                <Box className={classes.tradeWindow}>
                    {/* Hold OTHER player's selected items */}
                    {localSelected.length > 0 ?
                        localSelected.map((currentValue: Card) => {
                            return (
                                <div className={classes.tradeItem} key={currentValue.uid}>
                                    <CardHandler cardImage={currentValue.img} cardType={currentValue.type} cardUID={currentValue.uid} sizeTag={0} specialTag={currentValue.specialTag} cardHoloX={currentValue.holoX} cardHoloY={currentValue.holoY} pattern={currentValue.pattern} hoverEffects={true} />
                                </div>
                            )
                        })
                        : <></>}
                </Box>
                <Divider orientation="horizontal" sx={{ fontSize: "12px" }} />
                <Typography variant="h6">Frank's Offerings</Typography>
                <Box className={classes.tradeWindow}>
                    {/* Hold player's selected items */}
                    {remoteSelected.length > 0 ?
                        remoteSelected.map((currentValue: Card) => {
                            return (
                                <div className={classes.tradeItem} key={currentValue.uid}>
                                    <CardHandler cardImage={currentValue.img} cardType={currentValue.type} cardUID={currentValue.uid} sizeTag={0} specialTag={currentValue.specialTag} cardHoloX={currentValue.holoX} cardHoloY={currentValue.holoY} pattern={currentValue.pattern} hoverEffects={true} />
                                </div>
                            )
                        })
                        : <></>}
                </Box>
                <Box className={classes.tradeDetails}>
                    <Typography variant="body2">Click accept when you are ready to trade</Typography>
                    <Button variant="contained" className={classes.acceptButton}>Accept</Button>
                    <Button variant="contained" className={classes.cancelButton} onClick={() => handleCancelTrade()}>Cancel Trade</Button>
                </Box>
            </Box>

            <Modal open={openGrid} onClose={() => setOpenGrid(!openGrid)}>
                <Fade in={openGrid} timeout={500 | 0}>
                    <Box sx={{
                        position: 'fixed',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        backgroundColor: "gray",
                        border: "solid 2px black",
                        padding: "15px",
                        height: 600,
                        width: 1200,
                    }}>
                        <DataGrid
                            columns={columns}
                            rows={subCollection}
                            rowsPerPageOptions={[]}
                            getRowId={(r) => r.uid}
                            showColumnRightBorder={true}
                            disableSelectionOnClick
                            onRowDoubleClick={handleAddToTrade}
                        />
                    </Box>
                </Fade>
            </Modal>
        </Box>
    )
}