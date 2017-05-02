import { LOAD_DATA, STORE_DATA } from './constants';

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