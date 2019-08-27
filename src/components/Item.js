import React from 'react';

function Item(props) {
  return (
    <div className="Main">
      <h1>Item Component</h1>
      <p>{props.match.params.id}</p>
    </div>
  );
}

export default Item;
