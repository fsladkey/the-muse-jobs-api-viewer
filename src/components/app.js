import React from 'react';
import SearchOptions from './search_options';
import JobList from './job_list';
import TableHeaders from './table_headers';
import URLPreview from './url_preview';
import Logo from './logo';
import styles from './styles/shared.scss';

export default function App(props) {
  return (
    <main>
      <Logo />
      <h1>Search Jobs</h1>
      <URLPreview />
      <section className="search-options">
        <SearchOptions />
      </section>
      <TableHeaders />
      <JobList />
    </main>
  )
}
