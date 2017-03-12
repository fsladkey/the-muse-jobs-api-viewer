import { RECEIVE_JOBS } from '../actions/job_actions';

export default function searchParamsReducer(state = [], action) {
  switch (action.type) {
    case RECEIVE_JOBS:
      return action.jobs;
    default:
      return state;
  }
}
