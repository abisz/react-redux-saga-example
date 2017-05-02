import { LOAD_DATA, STORE_DATA, LOAD_DRIVERS, STORE_DRIVERS } from './constants';

export function loadData(offset) {
  return {
    type: LOAD_DATA,
    offset,
  };
}

export function storeData(response) {
  return {
    type: STORE_DATA,
    data: response.MRData.ConstructorTable.Constructors,
  };
}

export function loadDrivers(id) {
  return {
    type: LOAD_DRIVERS,
    id,
  };
}

export function storeDrivers(drivers) {
  return {
    type: STORE_DRIVERS,
    drivers,
  };
}
