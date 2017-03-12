import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleCollectionItem } from '../actions/search_param_actions';
import { activeTerms } from '../selectors/selectors';
import { capitalize } from '../utils/helpers';

const preventDefault = e => e.preventDefault();

class MultipleChoiceInput extends Component {
  constructor(props) {
    super(props);
    this.state = { terms: [], searchTerm: "" };
    this.addTerm = this.addTerm.bind(this);
    this.removeTerm = this.removeTerm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  addTerm(e) {
    e.preventDefault()
    if (!this.state.searchTerm) return;
    this.props.toggleItem(this.state.searchTerm);
    this.setState({ searchTerm: '' });
  }

  removeTerm(term) {
    return e => this.props.toggleItem(term);
  }

  handleChange(e) {
    this.setState({ searchTerm: e.currentTarget.value });
  }

  render() {
    const { type } = this.props;
    return (
      <section>
        <label htmlFor={ type }>{ capitalize(type) }</label>
        <form onSubmit={ this.addTerm }>
          <input
            id={ type }
            onChange={ this.handleChange }
            onBlur={ this.addTerm }
            value={ this.state.searchTerm }
            />
        </form>
        <ul>
          {
            this.props.terms.map((term, i) =>
              <li key={ term + i }>
                <button onClick={ this.removeTerm(term) } className="active">
                  { term } - ⨉
                </button>
              </li>
            )
          }
        </ul>
      </section>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return { terms: activeTerms(state, ownProps.type) };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    toggleItem: item => {
      return dispatch(toggleCollectionItem(ownProps.type, item))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MultipleChoiceInput);
