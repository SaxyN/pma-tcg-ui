import React from 'react';
import { makeStyles } from "@mui/styles";
import * as storeActions from "../../redux/cards/cards.slice";
import { generatePack } from '../../cardpull/cardPuller';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import Pack from "./Pack";
import { useHistory, useRouteMatch } from 'react-router';

const useStyles = makeStyles((theme) => ({
    main: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        padding: 20,
    },
    subMain: {
        display: ""
    },
    subButton: {
        marginLeft: "none",
        position: "relative",
    },
    cardStyle: {
        margin: "15px",
        textAlign: "center"
    },
    show: {
        display: "auto",
        position: "absolute",
        marginLeft: "45%",
        width: 600,
        height: 600,
        transition: "transform 1s ease"
    },
    pack: {
        transition: "transform ease .5s",
        width: "270.25px", height: "525px",
        borderRadius: "15px",
        marginTop: "10px",
        marginBottom: "10px",
        "&:hover": {
            transform: "scale(1.05)",
        }
    },
    packDescription: {
        marginTop: "10px",
    }
}))

const PacksFrame = () => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const match = useRouteMatch();
    const inventoryData = useSelector((state: RootStateOrAny) => state.cards.inventory);
    const collection = useSelector((state: RootStateOrAny) => state.cards.collection);
    const packs = useSelector((state: RootStateOrAny) => state.cards.packs);

    const handlePackOpen = (packData: any) => {
        let pack = generatePack(packData.type, packData.size, packData.set)
        dispatch(storeActions.loadNewPack(pack));
        dispatch(storeActions.updateCollection({ pack: pack, collection }));
        dispatch(storeActions.updateInventoryData({ pack: pack, inventoryData: inventoryData }))
        // dispatch(storeActions.updateInventoryData({ inventoryData: updateInven(pack, inventoryData) }))
        // setTimeout(() => {
        //     history.push(`${match.url}/packgenerate`);
        // }, 250);
    }

    // function updateInven(pack: any, inventoryData: any) {
    //     var needToAdd: boolean = true;
    //     if (inventoryData.length === 0) {
    //         inventoryData.push(pack[0]);
    //     }

    //     for (var i: number = 0; i < pack.length; i++) {
    //         for (var j: number = 0; j < inventoryData.length; j++) {
    //             if (pack[i].id === inventoryData[j].id && pack[i].type === inventoryData[j].type) {
    //                 needToAdd = false;
    //                 inventoryData[j].count = inventoryData[j].count + 1;
    //             }
    //         }
    //         if (needToAdd) {
    //             const data = {
    //                 count: 1,
    //                 id: pack[i].id,
    //                 img: pack[i].img,
    //                 type: pack[i].type,
    //                 name: pack[i].name,
    //                 set: pack[i].set,
    //                 specialTag: pack[i].specialTag,
    //             }
    //             inventoryData = Object.assign([], inventoryData);
    //             inventoryData.push(data);
    //         } else {
    //             needToAdd = true
    //         }
    //     }

    //     inventoryData.sort((a: any, b: any) => {
    //         if (a.id === b.id) {
    //             return b.type - a.type;
    //         }
    //         return a.id - b.id;
    //     });
    //     return inventoryData;
    // }
    return (
        <div className={classes.main}>

            {packs ? packs.map((currentValue: any) => {
                return (
                    <Pack key={currentValue.name} packData={currentValue} imageSize={"l"} handlePackOpen={handlePackOpen} />
                )
            }) : <>No Packs!</>}
        </div>
    )
}

export default PacksFrame;