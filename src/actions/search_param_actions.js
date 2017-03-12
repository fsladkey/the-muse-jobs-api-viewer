export const CHANGE_PAGE = "CHANGE_PAGE";
export const TOGGLE_DESCENDING = "TOGGLE_DESCENDING";
export const CHANGE_COMPANY = "CHANGE_COMPANY";
export const TOGGLE_COLLECTION_ITEM = "TOGGLE_COLLECTION_ITEM";
export const RECEIVE_COLLECTION = "RECEIVE_COLLECTION";

export function incrementPage() {
  return { type: CHANGE_PAGE, direction: 1 };
}

export function decrementPage() {
  return { type: CHANGE_PAGE, direction: -1 };
}

export function toggleDescending() {
  return { type: TOGGLE_DESCENDING };
}

export function changeCompany(company) {
  return { type: CHANGE_COMPANY, company };
}

export function toggleCollectionItem(collection, item) {
  return { type: TOGGLE_COLLECTION_ITEM, collection, item };
}

export function receiveCollection(collection) {
  return { type: TOGGLE_COLLECTION_ITEM, collection, item };
}
