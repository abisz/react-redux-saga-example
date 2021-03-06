import {
  LOAD_DATA, STORE_DATA, LOAD_DRIVERS,
  STORE_DRIVERS, INPUT_CHANGE, UPDATE_VALUE,
  UPDATE_AUTOCOMPLETE, FILTER_AUTOCOMPLETE,
} from './constants';

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

export function inputChange(value) {
  return {
    type: INPUT_CHANGE,
    value,
  };
}

export function updateValue(value) {
  return {
    type: UPDATE_VALUE,
    value,
  };
}

export function updateAutocomplete(value) {
  return {
    type: UPDATE_AUTOCOMPLETE,
    value,
  };
}

export function filterAutocomplete(value) {
  return {
    type: FILTER_AUTOCOMPLETE,
    value,
  }
}