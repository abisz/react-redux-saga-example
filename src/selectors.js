import { createSelector } from 'reselect';

const getData = state => state.data;

export const getDataLength = createSelector([ getData ], (data) => data.length );