import {
  CHANGE_PAGE,
  TOGGLE_DESCENDING,
  CHANGE_COMPANY,
  TOGGLE_COLLECTION_ITEM,
} from '../actions/search_param_actions';

const initialState = {
  page: 0,
  descending: false,
  company: null,
  category: {},
  level: {},
  location: {}
}

export default function searchParamsReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_PAGE:
      return { ...state, page + action.direction };
    case TOGGLE_DESCENDING:
      return { ...state, descending: !this.state.descending };
    case CHANGE_COMPANY:
      return { ...state, company: action.company };
    case TOGGLE_COLLECTION_ITEM:
      return {
        ...state,
        [action.collection]: collectionReducer(state[action.collection])
      };
    default:
      return state;
  }
}

function collectionReducer(state = {}, action) {
  switch (action.type) {
    case TOGGLE_COLLECTION_ITEM:
      if (state[action.item]) {
        const { [action.item], ...collection } = state;
        return collection;
      } else {
        return { ...state, action.company };
      }
    default:
      return state
  }
}
