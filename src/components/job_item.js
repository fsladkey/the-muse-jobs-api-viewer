import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeCompany } from '../actions/search_param_actions';
import { preventDefault } from '../utils/helpers';
import ItemList from './item_list';

class JobItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { job, active, changeCompany } = this.props;
    changeCompany(active ? "" : job.company.name);
  }

  render() {
    const { job, active } = this.props;
    const className = active ? "active" : "";
    return (
      <li className="job-item">
        <a href={ job.refs.landing_page }>
          <ul className="table-row">
            <li className="col" onClick={ preventDefault }>
              <button className={ className } onClick={ this.handleClick }>
                { job.company.name }
              </button>
            </li>
            <li className="col">
              { job.name }
            </li>
            <li className="col">
              <ItemList type="category" items={ job.categories }/>
            </li>
            <li className="col">
              <ItemList type="level" items={ job.levels }/>
            </li>
            <li className="col">
              <ItemList type="location" items={ job.locations }/>
            </li>
          </ul>
        </a>
      </li>
    );
  }
}

function mapStateToProps({ searchParams: { company } }, { job }) {
  return { active: job.company.name === company }
}

export default connect(mapStateToProps, { changeCompany })(JobItem);
