import React from 'react';
import { makeStyles } from '@mui/styles';
import { BinderCard } from './BinderCard';
import { MissingCard } from "./MissingCard";

import { mockInventory } from '../../mockData/mockInventory';

const styles = makeStyles(() => ({
    cardSlot: {
        // width: "247.5px", height: "346.5px",
        // width: "192.5px", height: "262.5px",
        // width: "10vw", height: "26.867963152507677vh",
        maxWidth: "192.5px",
        width: "100%", height: "262.5px",
        // border: 'solid red 2px',
        borderStyle: 'none dashed dashed dashed',
        border: 'black',
        position: 'relative',
        paddingBottom: "3%"
    },
}))

export const BinderInventory = ({ array }: any) => {
    const classes = styles();
    // if (mockInventory) {
    //     return (
    //         mockInventory.map((currentValue: any) => {
    //             return (
    //                 <div key={currentValue.uid} className={classes.cardSlot}>
    //                     <BinderCard img={currentValue.img} imgStyle={{ width: currentValue.width, height: currentValue.height, borderRadius: currentValue.borderRadius }} alt={currentValue.uid} />
    //                 </div>
    //             )
    //         })
    //     )
    // } else {
    //     return (
    //         <>No Data!</>
    //     )
    // }
    if (array) {
        return (
            array.map((currentValue: any) => {
                console.log(currentValue.slotType);
                switch (currentValue.slotType) {
                    case "owned":
                        return (
                            <div key={currentValue.slotData.uid} className={classes.cardSlot}>
                                <BinderCard
                                    img={currentValue.slotData.img}
                                    imgStyle={{
                                        width: currentValue.slotData.width,
                                        height: currentValue.slotData.height,
                                        borderRadius: currentValue.slotData.borderRadius,
                                    }}
                                    alt={currentValue.slotData.uid}
                                />
                            </div>
                        )
                    case "missing":
                        return (
                            <div key={currentValue.slotData.uid} className={classes.cardSlot}>
                                <MissingCard
                                    img={currentValue.slotData.img}
                                    imgStyle={{
                                        width: currentValue.slotData.width,
                                        height: currentValue.slotData.height,
                                        borderRadius: currentValue.slotData.borderRadius
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
                // if (currentValue.slotType === "owned") {


                // }
            })
        )
    } else {
        return (
            <>No Data?</>
        )
    }
}