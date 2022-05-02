import React from 'react';
import { makeStyles, styled } from '@mui/styles';

const styles = makeStyles((theme) => ({
    outer: {

    },
    inner: {

    }
}))

const InnerBar = (props: any) => {
    return (
        <div style={{
            width: props.barWidth,
            height: '100%',
            background: 'grey',
            marginLeft: 'auto',
        }}>

        </div>
    )
}

const OuterBar = (props: any) => {
    return (
        <div style={{
            width: props.barWidth,
            height: '30px',
            border: 'solid black 2px',
            backgroundColor: props.secondaryColor,
            background: 'linear-gradient(to right, red,orange,yellow,green)',
        }}>
            {props.children}
        </div>
    )
}

const RatingBar = ({ barWidth, secondaryColor, primaryColor }: any) => {
    return (
        <OuterBar secondaryColor={'grey'}>
            <InnerBar barWidth={barWidth} primaryColor={''} />
        </OuterBar>
    )
}

export default RatingBar;