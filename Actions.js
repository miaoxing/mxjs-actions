import React from 'react';

const Actions = ({children}) => {
  const actions = [];
  React.Children.map(children, (child) => {
    if (!child) {
      return;
    }
    actions.push(child, ' ');
  });
  return actions;
};

export default Actions;
