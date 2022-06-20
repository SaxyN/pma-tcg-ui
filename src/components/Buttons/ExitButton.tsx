import React from 'react';
import { makeStyles } from '@mui/styles';
import CloseIcon from '@mui/icons-material/Close';

const styles = makeStyles((theme) => ({
    exitButton: {
        position: 'absolute',
        top: '85vh',
        right: '13.5%',
        borderTopRightRadius: '5px',
        borderBottomRightRadius: '5px',
        border: 'none',
        backgroundColor: 'grey',
        zIndex: 2,
        padding: '0.75vh 0.5vh 0.5vh 0.5vh',
        transition: 'ease 250ms',
        '&:hover': {
            backgroundColor: 'lightgrey',
        }
    }
}))

const ExitButton = () => {
    const classes = styles();
    return (
        <div>
            <button className={classes.exitButton}><CloseIcon /></button>
        </div>
    )
}

export default ExitButton;