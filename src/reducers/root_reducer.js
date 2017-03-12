import { combineReducers } from 'redux';
import searchParams from './search_params_reducer';
import jobs from './jobs_reducer';
import fetching from './fetching_reducer';

export default combineReducers({ searchParams, jobs, fetching });
