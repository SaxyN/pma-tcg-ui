import React, { useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import FilterSection from '../Filters/FilterSection';
import CloseIcon from '@mui/icons-material/Close';
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux';
import { BinderInventory } from './BinderInventory';
import * as BinderActions from '../../redux/binder/binder.slice';
import { useNuiRequest } from "fivem-nui-react-lib";
import { BinderSettings } from './BinderSettings';
import { Box, Pagination } from '@mui/material';

const styles = makeStyles((theme) => ({
    binderOuter: {
        // border: 'solid red 2px',
        textAlign: 'center',
        justifyContent: 'center',
        display: 'flex',
        width: '100%',
        height: '99vh',
        opacity: 1,
        transition: "all ease 0.2s"
    },
    binderMain: {
        display: 'flex',
        justifyContent: 'space-evenly',
        position: 'relative',
        top: '2.5vh',
        width: '67vw',
        height: '95vh',
        border: 'solid black 2px',
        backgroundColor: '#333844',
        color: 'white',
        borderRadius: '10px',
        zIndex: 5,
        overflowX: 'hidden',
        transition: "all ease 0.2s"
    },
    binderInner: {
        transition: "all ease 0.2s",
    },
    binderSection: {
        opacity: 1,
        display: 'grid',
        gap: '1em 1%',
        gridTemplateColumns: 'repeat(6, 1fr)',
        // width: '100%',
        justifyContent: 'space-evenly',
        justifyItems: 'center',
        paddingLeft: '2vw',
        paddingRight: '2vw',
        overflowX: 'hidden',
        padding: '2vh 0 2vh 0',
        margin: '0 1vh 0 1vh',
        transition: "all ease 0.2s"
    },
    exitButton: {
        position: 'relative',
        width: '4vh',
        // top: '1vh',
        // left: '1vh',
        borderRadius: '5px',
        backgroundColor: 'white',
        border: 'none',
        zIndex: 10,
        padding: '0.75vh 0.5vh 0.5vh 0.5vh',
        transition: 'ease 250ms',
        '&:hover': {
            backgroundColor: 'lightgray',
        }
    },
    sideButtons: {
        position: "absolute",
        display: 'grid',
        left: '1vh',
        top: '1vh',
        transition: "all ease 0.2s"
        // border: 'solid black 2px'
    }
}))

const Binder = () => {
    const { send } = useNuiRequest();
    const classes = styles();
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = React.useState<number>(1);

    const [showCardInfo, setShowCardInfo] = React.useState(false);
    const [showSettings, setShowSettings] = React.useState(false);
    // const [showFilters, setShowFilters] = React.useState(false);


    useEffect(() => {
        if (currentPage > paginationSize) {
            setCurrentPage(1);
        }
    })


    const cardInventory = useSelector(
        (state: RootStateOrAny) => state.binder.cardInventory
    );

    const trueInventory = useSelector(
        (state: RootStateOrAny) => state.binder.trueInventory
    );

    const showMissingCards = useSelector(
        (state: RootStateOrAny) => state.binder.showMissingCards
    )

    const paginationSize = useSelector(
        (state: RootStateOrAny) => state.binder.paginationSize
    )

    const handleSearchChange = (search: string) => {
        if (search !== "") {
            dispatch(BinderActions.filterBySearch({ searchParameter: search, plyInventory: trueInventory }))
        } else {
            // dispatch(BinderActions.createMissingInventory());
        }
    }

    const handleNameFilter = () => {
        dispatch(BinderActions.filterByName());
    }

    const handleQualityFilter = () => {
        dispatch(BinderActions.filterByQuality());
    }

    const handleIDFilter = () => {
        dispatch(BinderActions.filterByID());
    }

    const handleFilterReset = () => {
        if (showMissingCards) {
            // dispatch(BinderActions.createMissingInventory());
        } else {
        }
    }

    const handleSettingChange = (setting: string) => {
        if (setting === "Show Unowned") {
            if (showMissingCards) {
                dispatch(BinderActions.hideMissingCards());
            } else {
                dispatch(BinderActions.showMissingCards());
                // dispatch(BinderActions.createMissingInventory());
            }
        }
    }

    const closeBinderHandler = () => {
        send("pma-tcg:closeBinder");
        dispatch(BinderActions.closeBinder());
    }

    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value);
    }

    return (
        <div className={classes.binderOuter}>
            <div className={classes.binderMain}>
                <div className={classes.binderInner}>
                    <div className={classes.binderSection}>
                        <BinderInventory array={cardInventory.slice(currentPage * 18 - 18, currentPage * 18)} />
                    </div>
                    <div style={{ position: "absolute", zIndex: 25, left: "50%", bottom: "2%", transform: 'translate(-50%)', }}>
                        {cardInventory.length > 0 ?
                            <Pagination color='primary' variant="outlined" count={paginationSize} page={currentPage} onChange={handlePageChange} />
                            : <></>}
                    </div>
                </div>
            </div>
            <Box className={classes.sideButtons}>
                <Box style={{ border: 'solid 2px gray', borderRadius: '5px', width: '4vh' }}>
                    <button className={classes.exitButton} onClick={() => closeBinderHandler()}><CloseIcon /></button>
                </Box>
                {/* <BinderSettings showSettings={showSettings} setShowSettings={setShowSettings} /> */}
                <FilterSection handleSearchChange={handleSearchChange} handleIDFilter={handleIDFilter} handleNameFilter={handleNameFilter} handleQualityFilter={handleQualityFilter} handleFilterReset={handleFilterReset} />
                <BinderSettings showSettings={showSettings} setShowSettings={setShowSettings} handleSettingChange={handleSettingChange} showMissingCards={showMissingCards} />
            </Box>
        </div>
    )
}

export default Binder;