import React from 'react';
import { connect } from 'react-redux';
import JobItem from './job_item';
import Spinner from './spinner';
import styles from './styles/job_list.scss';

function JobList({ jobs, fetching }) {
  jobs = jobs.map(job =>
    <JobItem key={ job.id } job={ job }/>
  );

  return (
    <section className="jobs-list">
      <Spinner />
      { jobs }
    </section>
  )
}

function mapStateToProps({ jobs, fetching }) {
  return { jobs, fetching };
}

export default connect(mapStateToProps)(JobList);
