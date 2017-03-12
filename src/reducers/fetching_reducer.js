import { RECEIVE_JOBS, REQUEST_JOBS } from '../actions/job_actions';

export default function searchParamsReducer(state = false, action) {
  switch (action.type) {
    case REQUEST_JOBS:
      return true;
    case RECEIVE_JOBS:
      return false;
    default:
      return state;
  }
}
