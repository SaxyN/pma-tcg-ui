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
}))

export const BinderCardInfo = ({ handleMoreInfoClick }: any) => {
    const classes = styles();
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);

    const cardInfo = useSelector((state: RootStateOrAny) => state.binder.cardInfo);
    const subCollection = useSelector((state: RootStateOrAny) => state.binder.subCollection);


    const handleCardShift = (newType: number) => {
        dispatch(BinderActions.shiftCardInfo({ newType: newType }));
    }

    const handleShowAllCard = () => {
        handleMoreInfoClick();
        dispatch(BinderActions.openSpecificCard({ specificCard: cardInfo }));
    }

    return (
        <div className={classes.infoCard}>
            <Card className={classes.modalStyle}>
                <Typography variant="h6">{cardInfo.name}</Typography>
                <CardContent className={classes.modalContent}>
                    <Tooltip TransitionComponent={Zoom} arrow placement="left-start" title={<AdvancedTooltip data={cardInfo} />} sx={{ marginRight: "15px" }}>
                        <Box sx={{ padding: "15px" }}>
                            <CardHandler cardImage={cardInfo.img} cardType={cardInfo.type} cardUID={Object.keys(cardInfo.uid)[0]} sizeTag={2} specialTag={cardInfo.specialTag} cardHoloX={cardInfo.holoX} cardHoloY={cardInfo.holoX} pattern={cardInfo.uid[Object.keys(cardInfo.uid)[0]].pattern} hoverEffects={true} />
                        </Box>
                    </Tooltip>
                    <Collapse in={open} orientation="horizontal" mountOnEnter unmountOnExit>
                        <div style={{ marginLeft: "50px", marginTop: "15px", display: "flex", }}>
                            {subCollection.length > 0 ?
                                subCollection.map((item: any) => {
                                    return (
                                        <Tooltip TransitionComponent={Zoom} arrow placement="left-start" title={<AdvancedTooltip data={item} />} sx={{ marginRight: "15px" }}>
                                            <Box sx={{ margin: "10px", padding: "10px", position: "relative", justifyItems: "center" }} onClick={() => handleCardShift(item.type)}>
                                                <CardHandler key={Object.keys(item.uid)[0]} cardImage={item.img} cardType={item.type} cardUID={Object.keys(item.uid)[0]} sizeTag={0} specialTag={item.specialTag} cardHoloX={item.holoX} cardHoloY={item.holoX} pattern={item.uid[Object.keys(item.uid)[0]].pattern} hoverEffects={false} />
                                            </Box>
                                        </Tooltip>
                                    )
                                })
                                : <></>}
                        </div>
                    </Collapse>
                </CardContent>
                <CardActions style={{ paddingTop: "25px", paddingBottom: "15px" }}>
                    <Tooltip placement="left-start" title={"Open all duplicates of this card"} sx={{ marginRight: "15px" }} enterDelay={1000}>
                        <Button variant="contained" sx={{ backgroundColor: "gray", '&:hover': { backgroundColor: "orange" } }} onClick={() => handleShowAllCard()}>More Info</Button>
                    </Tooltip>
                    {subCollection.length > 0 ?
                        <IconButton style={{ color: "black", marginLeft: "auto" }} onClick={() => setOpen(!open)}>{!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}</IconButton>
                        : <></>
                    }
                </CardActions>
            </Card>
        </div >
    )
}

