import React, { Fragment } from 'react';
import { makeStyles } from '@mui/styles';
import { Fade, Box, Modal } from '@mui/material';
import { BinderCard } from './BinderCard/BinderCard';
import { MissingCard } from "./MissingCard/MissingCard";
import { BinderCardInfo } from './BinderCardInfo';

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
    const [showCardInfo, setShowCardInfo] = React.useState(false);

    const handleClick = React.useCallback((event: any, cardID: string) => {
        event.preventDefault();
        switch (event.type) {
            case 'click':
                console.log("Left Click");
                break;
            case 'contextmenu':
                setShowCardInfo(!showCardInfo);
                break;
        }
    }, [])

    return (
        <Fragment>

            <Fragment>
                {array.length > 0 ?
                    array.map((currentValue: any) => {
                        switch (currentValue.slotType) {
                            case "owned":
                                return (
                                    <div key={currentValue.slotData.uid[0]} className={classes.cardSlot}>
                                        <BinderCard
                                            img={currentValue.slotData.img}
                                            imgStyle={{
                                                width: "100%",
                                                height: "100%",
                                                borderRadius: "5% / 3.5%",
                                            }}
                                            type={currentValue.slotData.type}
                                            alt={currentValue.slotData.uid}
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
            {/* <Fade in={showCardInfo} timeout={1000}> */}
            {/* <Modal open={showCardInfo} onClose={() => setShowCardInfo(!showCardInfo)}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <BinderCardInfo card={} />
                </Box>
            </Modal> */}
            {/* </Fade> */}
        </Fragment>
    )
}