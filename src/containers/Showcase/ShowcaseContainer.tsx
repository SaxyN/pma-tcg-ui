import React from 'react';
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux';
import { ShowCase } from '../../components/ShowCase';

export function ShowcaseContainer() {
    const dispatch = useDispatch();
    const showCaseVisible = useSelector((state: RootStateOrAny) => state.showcase.showcaseVisible);
    const showCaseData = useSelector((state: RootStateOrAny) => state.showcase.showcaseData);

    return (
        <ShowCase showCaseVisible={showCaseVisible} showCaseData={showCaseData} />
    )
}