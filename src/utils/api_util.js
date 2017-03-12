import { toQueryString } from './helpers';
import { BASE_URL } from '../constants/api_constants';

export function fetchJobs(searchParams) {
  const url = BASE_URL + "?" + toQueryString(searchParams);
  return fetch(url).then(response => response.json());
}
22
