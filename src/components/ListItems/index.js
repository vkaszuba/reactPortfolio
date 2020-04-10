import React from 'react';

const ListItems = props => (
  <ul className="list-group">

    {props.items.map((item, index) => (
      <li
        className="list-group-item"
        key={index}>{item}
      </li>
    ))}

  </ul>
);

export default ListItems;