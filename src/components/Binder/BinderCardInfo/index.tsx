import React from 'react';
import { makeStyles } from '@mui/styles';
import { RootStateOrAny, useSelector } from 'react-redux';
import { Card, CardContent, IconButton, CardActions, Collapse, Box, Button, Tooltip, Zoom, Typography } from "@mui/material";
import CardHandler from '../../CardHandler/CardHandler';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useDispatch } from 'react-redux';
import * as BinderActions from '../../../redux/binder/binder.slice';
import { AdvancedTooltip } from './AdvancedTooltip';
import { DataGrid } from '@mui/x-data-grid';
import { useNuiRequest } from "fivem-nui-react-lib";
import { columns } from './GridDefs';
import { Card as CardType } from '../../../models/CardModel';

const styles = makeStyles((theme) => ({
    infoCard: {
        position: "absolute",
        top: "20%",
        left: 0,
        right: 0,
        marginLeft: "auto",
        marginRight: "auto",
        width: "500px",
        height: "300px",
    },
    modalContent: {
        display: "flex"
    },
    modalContentInner: {
        display: "grid",
        gridTemplateColumns: 'auto auto auto',
    },
    modalButtonContent: {
        padding: "15px",
    },
    divider: {
        margin: "10px",
    },
    modalStyle: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        border: '5px solid black',
        boxShadow: "24px",
        borderRadius: "15px",
        p: 4,
        textAlign: "center",
        backgroundColor: "#2C3340",
        padding: "30px 30px 0px 30px",
        transition: "all ease 1s"
    },
    gridStyles: {
        marginLeft: "35px",
    }
}))

export const BinderCardInfo = ({ handleMoreInfoClick }: any) => {
    const classes = styles();
    const { send } = useNuiRequest();
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(true);

    const cardInfo = useSelector((state: RootStateOrAny) => state.binder.cardInfo);
    const subCollection = useSelector((state: RootStateOrAny) => state.binder.subCollection);

    const handleShare = (showcaseData: any) => {
        send("pma-tcg:createShowcase", showcaseData);
    }

    const handleTrade = (tradeData: CardType | null) => {
        send("pma-tcg:checkNearbyPlayers");
    }

    const swapCardInfo = (newCard: any) => {
        if (newCard.row.uid !== cardInfo.uid) {
            dispatch(BinderActions.updateCardInfo({ newCardInfo: newCard.row }));
        }
    }

    return (
        <div className={classes.infoCard}>
            <Card className={classes.modalStyle}>
                <CardContent className={classes.modalContent}>
                    <Tooltip TransitionComponent={Zoom} arrow placement="left-start" title={<AdvancedTooltip data={cardInfo} />} sx={{ marginRight: "15px" }}>
                        <Box sx={{ padding: "15px" }}>
                            <CardHandler cardImage={cardInfo.img} cardType={cardInfo.type} cardUID={cardInfo.uid} sizeTag={2} specialTag={cardInfo.specialTag} cardHoloX={cardInfo.holoX} cardHoloY={cardInfo.holoX} pattern={cardInfo.pattern} hoverEffects={true} />
                        </Box>
                    </Tooltip>
                    <Collapse in={open} orientation="horizontal" mountOnEnter unmountOnExit>
                        {subCollection.length > 0 ?
                            <Box sx={{ height: 550, width: 1200 }}>
                                <DataGrid
                                    className={classes.gridStyles}
                                    columns={columns}
                                    rows={subCollection}
                                    pageSize={10}
                                    rowsPerPageOptions={[]}
                                    onRowClick={swapCardInfo}
                                    getRowId={(r) => r.uid}
                                    showColumnRightBorder={true}

                                />
                            </Box> : <></>
                        }
                    </Collapse>
                </CardContent>
                <CardActions style={{ paddingTop: "25px", paddingBottom: "15px" }}>
                    <Button variant="contained" sx={{ color: "white", backgroundColor: "gray", '&:hover': { backgroundColor: "orange" } }} onClick={() => handleShare(cardInfo)}>Share</Button>
                    {subCollection.length > 0 ?
                        <IconButton style={{ color: "black", marginLeft: "auto" }} onClick={() => setOpen(!open)}>{!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}</IconButton>
                        : <></>
                    }
                </CardActions>
            </Card>
        </div >
    )
}

