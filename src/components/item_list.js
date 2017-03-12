import React from 'react';
import TermItem from './term_item';

export default function ItemList({ type, items }) {
  items = items.map((item, i) =>
    <TermItem type={ type } item={ item } key={ i }/>
  );

  return (
    <ul>
      { items }
    </ul>
  );
}
