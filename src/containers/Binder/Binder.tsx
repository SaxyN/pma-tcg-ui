import React from 'react';
import { makeStyles } from '@mui/styles';
import FilterSection from '../../components/Filters/FilterSection';
import ExitButton from '../../components/Buttons/ExitButton';
// import PUTTS_R from '../../components/CardItem/CardAssets/r_putts_b.png';
// import CardHandler from '../../components/CardHandler/CardHandler';
// import ImageHandler from '../../components/ImageHandler/ImageHandler';
// import { ClassNames } from '@emotion/react';
// import { BinderCard } from './BinderCard';
// import { MissingCard } from './MissingCard';
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux';
import { BinderInventory } from './BinderInventory';
import * as BinderActions from '../../redux/binder/binder.slice';

const styles = makeStyles((theme) => ({
    binderOuter: {
        border: 'solid red 2px',
        textAlign: 'center',
        justifyContent: 'center',
        display: 'flex',
        minWidth: '800px',
        height: '99vh',
    },
    binderMain: {
        display: 'flex',
        justifyContent: 'space-evenly',
        position: 'absolute',
        top: '7.5vh',
        minWidth: '800px',
        width: '70vw',
        height: '85vh',
        border: 'solid black 2px',
        backgroundColor: '#333844',
        color: 'white',
        borderRadius: '5px',
        zIndex: 5,
        // overflow: 'scroll',
        // "-webkit-scrollbar": { display: "none" },
        // overflowX: 'hidden',
    },
    binderSection: {
        display: 'grid',
        gap: '1% 5%',
        gridTemplateColumns: 'repeat(5, 1fr)',
        width: '100%',
        justifyContent: 'space-evenly',
        justifyItems: 'center',
        paddingLeft: '2vw',
        paddingRight: '2vw',
        overflowX: 'hidden',
        padding: '2vh 0 2vh 0',
    },
    cardSlot: {
        width: "192.5px", height: "262.5px",
        // border: 'solid red 2px',
        borderStyle: 'none dashed dashed dashed',
        border: 'gray',
        position: 'relative',
    },
    rarityButtons: {
        position: 'absolute',
        left: '27vw',
        top: '92.75vh',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, auto)',
        gap: '1vh',
        justifyContent: 'space-evenly',
        borderBottomRightRadius: '5px',
        borderBottomLeftRadius: '5px',
        zIndex: 2,
    },
    rarityButton: {
        borderBottomLeftRadius: '5px',
        borderBottomRightRadius: '5px',
        border: 'none',
        backgroundColor: 'grey',
        zIndex: 2,
        padding: '1vh 0.5vh 0.5vh 0.5vh',
        '&:hover': {
            backgroundColor: 'lightgrey',
        }
    },
}))

const Binder = () => {
    const classes = styles();
    const dispatch = useDispatch();
    const cardInventory = useSelector(
        (state: RootStateOrAny) => state.binder.cardInventory
    );
    const trueInventory = useSelector(
        (state: RootStateOrAny) => state.binder.trueInventory
    );
    // const showMissingCards = useSelector(
    //     (state: RootStateOrAny) => state.binder.showMissingCards
    // );

    // const renderBinderInventory = () => {

    // }

    const handleSearchChange = (search: string) => {
        if (search !== "") {
            dispatch(BinderActions.filterBySearch({ searchParameter: search, plyInventory: trueInventory }))
        } else {
            dispatch(BinderActions.createMissingInventory());
        }
    }

    return (
        <div className={classes.binderOuter}>
            <div className={classes.binderMain}>
                <div className={classes.binderSection}>
                    <BinderInventory array={cardInventory} />
                </div>
            </div>
            <FilterSection handleSearchChange={handleSearchChange} />
            <ExitButton />
            {/* <div className={classes.searchBarContainer}>
            </div> */}
        </div>
    )
}

export default Binder;