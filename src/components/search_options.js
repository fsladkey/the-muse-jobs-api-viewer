import React, { Component } from 'react';
import { connect } from 'react-redux'
import MultipleChoiceInput from './multiple_choice_input';
import styles from './styles/search_options.scss';
import { fetchJobs } from '../actions/job_actions';
import {
  incrementPage,
  decrementPage,
  toggleDescending,
  changeCompany,
  toggleCollectionItem,
  receiveCollection
} from '../actions/search_param_actions';

class SearchOptions extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.state = { company: "" };
  }

  componentDidMount() {
    this.props.fetchJobs();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ company: nextProps.searchParams.company });
    this.props.fetchJobs();
  }

  handleInput(e) {
    if (this.timeoutID) clearInterval(this.timeoutID);
    const company = e.currentTarget.value;
    this.setState({ company })
    this.timeoutID = setTimeout(() => this.props.changeCompany(company), 500);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchJobs();
  }

  render() {
    const {
      fetchJobs,
      changeCompany,
      toggleDescending,
      searchParams,
      incrementPage,
      decrementPage
    } = this.props;

    return (
      <section>
        <form onSubmit={ this.handleSubmit }>
          <label htmlFor="company-input">Company</label>
          <input
            id="company-input"
            onChange={ this.handleInput }
            value={ this.state.company }
            />
          <label htmlFor="descending-input">Descending</label>
          <input
            id="descending-input"
            type="checkbox"
            onChange={ e => toggleDescending(e.currentTarget.checked) }
            checked={ searchParams.descending }
            />
        </form>
        <section className="multi-choice-inputs">
          <MultipleChoiceInput type="category"/>
          <MultipleChoiceInput type="level"/>
          <MultipleChoiceInput type="location"/>
        </section>
        <section className="page-buttons">
          <button onClick={ decrementPage }>
          Prev Page
          </button>
          <p>Page: { searchParams.page }</p>
          <button onClick={ incrementPage }>
            Next Page
          </button>
        </section>
      </section>
    );
  }
}

function mapStateToProps({ searchParams }) {
  return { searchParams };
}

export default connect(mapStateToProps, {
  incrementPage,
  decrementPage,
  toggleDescending,
  changeCompany,
  fetchJobs
})(SearchOptions);
