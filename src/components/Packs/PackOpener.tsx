import React, { Fragment } from 'react';
import { useHistory } from "react-router-dom";
import CardFlip from '../Flip/CardFlip';
import { useSelector } from "react-redux";
import { CardPackControls } from '../CardPack/CardPackControls';
import { motion } from 'framer-motion-3d';

const PackOpener = () => {
    const pack = useSelector((state: any) => state.pack.pack_cards);

    return (
        <div>

            <div style={{ width: "100%", display: "flex", justifyContent: "center", paddingTop: "25px", margin: '20vh 0 0 0' }}>
                {pack.map((currentValue: any) => {
                    return (
                        <Fragment key={currentValue.uid}>
                            <CardFlip card={currentValue} />
                        </Fragment>
                    )
                })}
            </div>
            <div style={{ width: "100%", display: "flex", justifyContent: "space-evenly", paddingTop: "25px" }}>
                {/* <Button style={{ margin: "5px" }} variant="contained" component={Link} to="/packs">Open Another</Button> */}
                <CardPackControls />
            </div>
        </div>
    )
}

export default PackOpener