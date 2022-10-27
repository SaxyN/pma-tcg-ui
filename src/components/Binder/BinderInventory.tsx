import React, { Fragment } from 'react';
import { makeStyles } from '@mui/styles';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Typography from '@mui/material/Typography';
import { BinderCard } from './BinderCard/BinderCard';
import { MissingCard } from "./MissingCard/MissingCard";
import { OpenSlot } from './OpenSlot.tsx/OpenSlot';
import { BinderCardInfo } from './BinderCardInfo';
import { useDispatch } from 'react-redux';
import { useNuiRequest } from 'fivem-nui-react-lib';

import * as binderActions from '../../redux/binder/binder.slice';

const styles = makeStyles(() => ({
    cardSlot: {
        width: "100%",
        borderStyle: 'none dashed dashed dashed',
        border: 'black',
        position: 'relative',
    },
}))

export const BinderInventory = ({ array }: any) => {
    const classes = styles();
    const dispatch = useDispatch();
    const { send } = useNuiRequest();
    const [showCardInfo, setShowCardInfo] = React.useState(false);
    const [showSpecificCard, setShowSpecificCard] = React.useState(false);

    const handleClick = React.useCallback((event: any, id: number) => {
        event.preventDefault();
        switch (event.type) {
            case 'click':
                // send("pma-tcg:getCardData", id);
                dispatch(binderActions.getCardCollection({ id: id }))
                setShowCardInfo(!showCardInfo);
                break;
        }
    }, [])

    const handleMoreInfoClick = () => {
        setShowCardInfo(!showCardInfo);
        setShowSpecificCard(!showSpecificCard);
    }

    const clearShowCardData = () => {
        dispatch(clearShowCardData);
    }

    return (
        <Fragment>
            <Fragment>
                {array.length > 0 ?
                    array.map((currentValue: any, index: number) => {
                        switch (currentValue.slotType) {
                            case "owned":
                                return (
                                    <div key={index} className={classes.cardSlot}>
                                        <BinderCard
                                            name={currentValue.slotData.name}
                                            img={currentValue.slotData.img}
                                            imgStyle={{
                                                width: "100%",
                                                height: "100%",
                                                borderRadius: "5% / 3.5%",
                                            }}
                                            id={currentValue.slotData.id}
                                            type={currentValue.slotData.type}
                                            alt={currentValue.slotData.name}
                                            cardUID={index}
                                            handleClick={handleClick}
                                        />
                                    </div>
                                )
                            case "missing":
                                return (
                                    <div key={index} className={classes.cardSlot}>
                                        <MissingCard
                                            img={currentValue.slotData.img}
                                            imgStyle={{
                                                width: "100%",
                                                height: "100%",
                                                borderRadius: "5% / 3.5%",
                                            }}
                                            alt={index}
                                        />
                                    </div>
                                )
                            case "undefined":
                                return (
                                    <div key={index} className={classes.cardSlot}>
                                        <OpenSlot
                                            img={'blank_card'}
                                            imgStyle={{
                                                width: "100%",
                                                height: "100%",
                                                borderRadius: "5% / 3.5%",
                                            }}
                                            alt={index}
                                        />
                                    </div>
                                )
                            default:
                                return (
                                    <></>
                                )
                        }
                    })
                    :
                    <div>
                        <Typography variant="h4">Nothing Here!</Typography>
                        <Typography variant="h2">Open packs to start collecting!</Typography>
                    </div>
                }
            </Fragment>
            <Backdrop open={showCardInfo || showSpecificCard} />
            <Modal open={showCardInfo} onClose={() => { setShowCardInfo(!showCardInfo), clearShowCardData() }}>
                <Fade in={showCardInfo} timeout={500}>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <BinderCardInfo handleMoreInfoClick={handleMoreInfoClick} />
                    </Box>
                </Fade>
            </Modal>
        </Fragment >
    )
}