import React from 'react';
import { connect } from 'react-redux';
import { toggleCollectionItem } from '../actions/search_param_actions';
import { preventDefault } from '../utils/helpers';

function TermItem({ item, addTerm, active }) {
  const className = active ? "term-item active" : "term-item"
  const content = active ?  `${item.name} - ⨉` : item.name
  return (
    <li onClick={ preventDefault }>
      <button className={ className } onClick={ addTerm }>
        { content }
      </button>
    </li>
  );
}

function mapStateToProps({ searchParams }, { type, item: { name } }) {
  return { active: searchParams[type][name] }
}

function mapDispatchToProps(dispatch, { type, item: { name } }) {
  return {
    addTerm() {
      return dispatch(toggleCollectionItem(type, name));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TermItem);
