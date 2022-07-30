import React from 'react';
import { makeStyles } from '@mui/styles';
import { RootStateOrAny, useSelector } from 'react-redux';
import { Card, CardContent, IconButton, CardActions, Collapse, Box, Menu, MenuItem, Tooltip, Zoom, Divider, Button } from "@mui/material";
import CardHandler from '../../CardHandler/CardHandler';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useDispatch } from 'react-redux';
import * as BinderActions from '../../../redux/binder/binder.slice';
import { AdvancedTooltip } from '../BinderCardInfo/AdvancedTooltip';
import { Card as CardType } from '../../../models/CardModel';
import { useNuiRequest } from "fivem-nui-react-lib";
import { DataGrid } from '@mui/x-data-grid';
import { columns } from '../BinderCardInfo/GridDefs';

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
        maxHeight: "80%",
        backgroundColor: "#2C3340",
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
        transition: "all ease 1s",
        maxHeight: "80%",
        overflow: "scroll",
    },
}))

export const SpecificCardInfo = () => {
    const { send } = useNuiRequest();
    const classes = styles();
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(true);
    const [currentCard, setCurrentCard] = React.useState<CardType | null>(null);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const menuOpen = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
        setCurrentCard(null);
    };

    const cardInfo = useSelector((state: RootStateOrAny) => state.binder.cardInfo);
    const subCollection = useSelector((state: RootStateOrAny) => state.binder.subCollection);

    const handleShare = (showcaseData: any) => {
        send("pma-tcg:createShowcase", showcaseData);
    }

    const handleTrade = (tradeData: CardType | null) => {
        send("pma-tcg:checkNearbyPlayers");
    }


    const swapCardInfo = (newCard: any) => {
        let newSubCollection: CardType[] = [];
        let newCardInfo: CardType | null = null;

        console.log(newCard.row.uid);
        for (let i = 0; i < subCollection.length; i++) {
            if (newCard.row.uid === subCollection[i].uid) {
                console.log(subCollection[i]);
                newCardInfo = subCollection[i];
                newSubCollection.push(cardInfo);
            } else {
                newSubCollection.push(subCollection[i]);
            }
        }

        console.log(subCollection, cardInfo);
        console.log(newSubCollection, newCardInfo);

        // dispatch(BinderActions.swapCardInfo({ current: cardInfo, newCard: newCard }));
        dispatch(BinderActions.swapCardInfo({ newCardInfo: newCardInfo, newSubCollection: newSubCollection }));
    }

    return (
        <div className={classes.infoCard}>
            <Card className={classes.modalStyle}>
                <CardContent className={classes.modalContent}>
                    <Tooltip TransitionComponent={Zoom} arrow placement="left-start" title={<AdvancedTooltip data={cardInfo} />} sx={{ marginRight: "15px" }}>
                        <Box sx={{ padding: "15px", maxHeight: "500px" }} >
                            <Box>
                                <CardHandler cardImage={cardInfo.img} cardType={cardInfo.type} cardUID={cardInfo.uid} sizeTag={2} specialTag={cardInfo.specialTag} cardHoloX={cardInfo.holoX} cardHoloY={cardInfo.holoX} pattern={cardInfo.pattern} hoverEffects={true} />
                            </Box>
                        </Box>
                    </Tooltip>
                    <Collapse in={open} orientation="horizontal" mountOnEnter unmountOnExit>
                        {/* <div style={{ marginLeft: "50px", marginTop: "15px", display: "grid", gridTemplateColumns: "auto auto auto" }}>
                            {subCollection.length > 0 ?
                                subCollection.map((item: any) => {
                                    if (cardInfo.uid !== item.uid) {
                                        return (
                                            <Tooltip TransitionComponent={Zoom} arrow placement="left-start" title={<AdvancedTooltip data={item} />} sx={{ marginRight: "15px" }}>
                                                <Box sx={{ margin: "10px", padding: "10px", position: "relative", justifyItems: "center" }} onClick={() => swapCardInfo(item)}>
                                                    <CardHandler key={item.uid} cardImage={item.img} cardType={item.type} cardUID={item.uid} sizeTag={0} specialTag={item.specialTag} cardHoloX={item.holoX} cardHoloY={item.holoX} pattern={item.pattern} hoverEffects={false} />
                                                </Box>
                                            </Tooltip>
                                        )
                                    } else {
                                        return (
                                            <></>
                                        )
                                    }
                                })
                                : <></>}
                        </div> */}
                        {console.log(subCollection)}
                        {subCollection.length > 0 ?
                            <Box sx={{ height: 600, width: 1200 }}>
                                <DataGrid
                                    sx={{ marginLeft: "35px", color: "white" }}
                                    columns={columns}
                                    rows={subCollection}
                                    // pageSize={10}
                                    rowsPerPageOptions={[]}
                                    onRowClick={swapCardInfo}
                                    getRowId={(r) => r.uid}
                                />
                            </Box> : <></>
                        }
                    </Collapse>
                </CardContent>
                <CardActions style={{ paddingTop: "35px", paddingBottom: "25px", justifyContent: "center" }}>
                    <Button variant="contained" sx={{ color: "white", backgroundColor: "gray", '&:hover': { backgroundColor: "orange" } }} onClick={() => handleShare(cardInfo)}>Share</Button>
                    <Button variant="contained" sx={{ color: "white", backgroundColor: "gray", '&:hover': { backgroundColor: "orange" } }} onClick={() => handleTrade(currentCard)}>Trade</Button>
                    {subCollection.length > 0 ?
                        <IconButton style={{ color: "black", marginLeft: "auto" }} onClick={() => setOpen(!open)}>{!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}</IconButton>
                        : <></>
                    }
                </CardActions>
            </Card>
            {/* <Menu
                id="card-options"
                anchorEl={anchorEl}
                open={menuOpen}
                onClose={handleClose}
                TransitionComponent={Zoom}
            >
                <MenuItem onClick={() => { handleClose(); handleShare(currentCard) }}>Share</MenuItem>
                <MenuItem onClick={handleClose}>Trade</MenuItem>
            </Menu> */}
        </div >
    )
}

