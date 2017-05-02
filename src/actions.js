import { LOAD_DATA, STORE_DATA } from './constants';

export function loadData() {
  return {
    type: LOAD_DATA,
  };
}

export function storeData(response) {
  return {
    type: STORE_DATA,
    data: response.MRData.ConstructorTable.Constructors,
  };
}