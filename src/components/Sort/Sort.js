/* eslint-disable no-unused-vars */
import React from 'react';

// this will sort in descending order because data is reverse sorted before it is rendered
export default function Sort({ children }) {
  // const sorted = React.Children.toArray(children).sort((a, b) => {
  //   console.log(a); // eslint-disable-line
  //   return b.props.order - a.props.order;
  // });

  // return sorted;
  return children;
}
