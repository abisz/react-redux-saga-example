import { createSelector } from 'reselect';

const getData = state => state.data;
const getDrivers = state => state.drivers;

export const getDataLength = createSelector([ getData ], (data) => data.length );

export const getDriversLength = createSelector([getDrivers],
  (drivers) => drivers.length);
