import { createSelector } from 'reselect';

const getConstructors = state => state.data;
const getDrivers = state => state.drivers;
const getFilter = state => state.filter;

export const getDataLength = createSelector([getConstructors], (data) => data.length );

export const getDriversLength = createSelector([getDrivers],
  (drivers) => drivers.length);

export const getItemList = createSelector(
  [getConstructors, getFilter],
  (constructors, filter) => constructors.filter((c) => c.name.toLowerCase().startsWith(filter.toLowerCase()))
);
