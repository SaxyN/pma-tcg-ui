import React, { Fragment } from 'react';
import { Button } from "@mui/material";
import { Link, Redirect, useHistory } from "react-router-dom";
import CardFlip from '../Flip/CardFlip';
import { useSelector } from "react-redux";
import { CardList } from '../../mockData/mock';
import { CardPackControls } from '../CardPack/CardPackControls';

const PackOpener = () => {
    // const pack = useSelector((state: any) => state.pack.pack);
    const history = useHistory();

    return (
        <div>
            <div style={{ width: "100%", display: "flex", justifyContent: "center", paddingTop: "25px", margin: '20vh 0 0 0' }}>
                {CardList.map((currentValue: any) => {
                    return (
                        <Fragment key={currentValue.uid}>
                            <CardFlip cardType={currentValue.type} cardImage={currentValue.img} specialTag={currentValue.specialTag !== undefined ? currentValue.specialTag : ""} />
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