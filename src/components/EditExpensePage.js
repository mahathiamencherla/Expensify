import React from 'react';

const EditExpensePage = (props) => (
  <div>
    This is from my edit expense component
    {props.match.params.id}
  </div>
);

export default EditExpensePage;
