import {
  CHANGE_PAGE,
  TOGGLE_DESCENDING,
  CHANGE_COMPANY,
  TOGGLE_COLLECTION_ITEM,
} from '../actions/search_param_actions';
import { except } from '../utils/helpers';

const initialState = {
  page: 0,
  descending: false,
  company: "",
  category: {},
  level: {},
  location: {}
}

export default function searchParamsReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_PAGE:
      return { ...state, page: Math.max(0, state.page + action.direction) };
    case TOGGLE_DESCENDING:
      return { ...state, descending: !state.descending };
    case CHANGE_COMPANY:
      return { ...state, company: action.company };
    case TOGGLE_COLLECTION_ITEM:
      return {
        ...state,
        [action.collection]: collectionReducer(state[action.collection], action)
      };
    default:
      return state;
  }
}

function collectionReducer(state = {}, action) {
  switch (action.type) {
    case TOGGLE_COLLECTION_ITEM:
      return state[[action.item]] ?
        except(state, action.item) :
        { ...state, [action.item]: true };
    default:
      return state
  }
}
