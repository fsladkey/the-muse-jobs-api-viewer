import React from 'react';
import { connect } from 'react-redux';
import styles from './styles/spinner.scss';

function Spinner({ fetching }) {
  const className = fetching ? "loader-container active" : "loader-container";
  return (
    <div className={ className }>
      <div className="loader"/>
    </div>
  )
}

function mapStateToProps({ fetching }) {
  return { fetching };
}

export default connect(mapStateToProps)(Spinner);
