import React, { Fragment } from 'react';
import { makeStyles } from '@mui/styles';
import { Fade, Box, Modal, Backdrop } from '@mui/material';
import { BinderCard } from './BinderCard/BinderCard';
import { MissingCard } from "./MissingCard/MissingCard";
import { BinderCardInfo } from './BinderCardInfo';
import { useDispatch } from 'react-redux';
import * as BinderActions from '../../redux/binder/binder.slice';

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
    const [showCardInfo, setShowCardInfo] = React.useState(false);
    const [showMenu, setShowMenu] = React.useState(false);
    const [showSpecificCard, setShowSpecificCard] = React.useState(false);

    const handleClick = React.useCallback((event: any, name: string, img: string) => {
        event.preventDefault();
        switch (event.type) {
            case 'click':
                dispatch(BinderActions.showCardInfo({ name: name }))
                setShowCardInfo(!showCardInfo);
                break;
        }
    }, [])

    const handleMoreInfoClick = () => {
        setShowCardInfo(!showCardInfo);
        setShowSpecificCard(!showSpecificCard);
    }

    return (
        <Fragment>
            <Fragment>
                {array.length > 0 ?
                    array.map((currentValue: any) => {
                        switch (currentValue.slotType) {
                            case "owned":
                                return (
                                    <div key={Object.keys(currentValue.slotData.uid)[0]} className={classes.cardSlot}>
                                        <BinderCard
                                            name={currentValue.slotData.name}
                                            img={currentValue.slotData.img}
                                            imgStyle={{
                                                width: "100%",
                                                height: "100%",
                                                borderRadius: "5% / 3.5%",
                                            }}
                                            type={currentValue.slotData.type}
                                            alt={currentValue.slotData.uid}
                                            cardUID={Object.keys(currentValue.slotData.uid)[0]}
                                            handleClick={handleClick}
                                        />
                                    </div>
                                )
                            case "missing":
                                return (
                                    <div key={currentValue.slotData.uid} className={classes.cardSlot}>
                                        <MissingCard
                                            img={currentValue.slotData.img}
                                            imgStyle={{
                                                width: "100%",
                                                height: "100%",
                                                borderRadius: "5% / 3.5%",
                                            }}
                                            alt={currentValue.slotData.uid}
                                        />
                                    </div>
                                )
                            default:
                                return (
                                    <></>
                                )
                        }
                    })
                    : <></>}
            </Fragment>
            <Backdrop open={showCardInfo || showSpecificCard} />
            <Modal open={showCardInfo} onClose={() => setShowCardInfo(!showCardInfo)}>
                <Fade in={showCardInfo} timeout={500}>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <BinderCardInfo handleMoreInfoClick={handleMoreInfoClick} />
                    </Box>
                </Fade>
            </Modal>
            {/* <Modal open={showSpecificCard} onClose={() => setShowSpecificCard(!showSpecificCard)}>
                <Fade in={showSpecificCard} timeout={500}>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <SpecificCardInfo />
                    </Box>
                </Fade>
            </Modal> */}
        </Fragment >
    )
}