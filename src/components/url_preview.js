import React from 'react';
import { connect } from 'react-redux';
import { BASE_URL } from '../constants/api_constants';
import { toQueryString } from '../utils/helpers';
import styles from './styles/url_preview.scss';

function URLPreview({ searchParams }) {
  return (
    <section className="url-preview">
      <p>{ BASE_URL + "?" + toQueryString(searchParams) }</p>
    </section>
  )
}

function mapStateToProps({ searchParams }) {
  return { searchParams };
}

export default connect(mapStateToProps)(URLPreview);
