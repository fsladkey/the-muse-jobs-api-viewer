import * as APIUtil from '../utils/api_util';
export const RECEIVE_JOBS = "RECEIVE_JOBS";
export const REQUEST_JOBS = "REQUEST_JOBS";

export function requestJobs() {
  return { type: REQUEST_JOBS };
}

export function receiveJobs(jobs) {
  return { type: RECEIVE_JOBS, jobs };
}

export function fetchJobs() {
  return (dispatch, getState) => {
    dispatch(requestJobs());
    return APIUtil.fetchJobs(getState().searchParams)
      .then(res => dispatch(receiveJobs(res.results)));
  }
}
