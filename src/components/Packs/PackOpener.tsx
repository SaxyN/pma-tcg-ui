import React, { Fragment } from 'react';
import CardFlip from '../Flip/CardFlip';
import { useDispatch, useSelector } from "react-redux";
import { CardPackControls } from '../CardPack/CardPackControls';
import { Fade, Box, Modal } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useNuiRequest } from 'fivem-nui-react-lib';
import * as PackActions from "../../redux/pack/pack.slice";

import { columns } from '../Binder/BinderCardInfo/GridDefs';

const PackOpener = () => {
    const { send } = useNuiRequest();
    const dispatch = useDispatch();
    const pack = useSelector((state: any) => state.pack.pack_cards);
    const [enableClose, setEnableClose] = React.useState(false);
    const [showPackGrid, setShowPackGrid] = React.useState(false);

    const flipStatus = new Array(pack.length).fill(false);

    const handleFlip = (index: number) => {
        flipStatus[index] = true;
        let allFlipped = true;

        for (let i = 0; i < flipStatus.length; i++) {
            if (!flipStatus[i]) {
                allFlipped = false;
            }
        }

        if (allFlipped) {
            setEnableClose(true);
        }
    }

    const handlePackClose = () => {
        send("pma-tcg:closePack");
        dispatch(PackActions.closePack());
        setEnableClose(false);
        console.log("closed");
    }

    const handleOpenPackGrid = () => {
        setShowPackGrid(!showPackGrid);
    }

    return (
        <div>
            <div style={{ width: "100%", display: "flex", justifyContent: "center", paddingTop: "25px", margin: '20vh 0 0 0' }}>
                {pack.map((currentValue: any, index: number) => {
                    return (
                        <Fragment key={currentValue.uid}>
                            <CardFlip card={currentValue} onCardFlip={handleFlip} index={index} />
                        </Fragment>
                    )
                })}
            </div>
            <Fade in={enableClose} timeout={1000 | 0} unmountOnExit>
                <div style={{ width: "100%", display: "flex", justifyContent: "space-evenly", paddingTop: "25px" }}>
                    <CardPackControls handleOpenPackGrid={handleOpenPackGrid} handlePackClose={handlePackClose} enableClose={enableClose} />
                </div>
            </Fade>
            <Modal open={showPackGrid} onClose={() => setShowPackGrid(!showPackGrid)}>
                <Fade in={showPackGrid} timeout={500 | 0} unmountOnExit>
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
                            rows={pack}
                            rowsPerPageOptions={[]}
                            getRowId={(r) => r.uid}
                            showColumnRightBorder={true}
                            disableSelectionOnClick
                        />
                    </Box>
                </Fade>
            </Modal>
        </div>
    )
}

export default PackOpener