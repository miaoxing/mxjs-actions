import {Children, Fragment} from 'react';
import propTypes from 'prop-types';

const Actions = ({divider = ' ', empty = null, children}) => {
  const actions = [];
  const max = Children.count(children) - 1;
  Children.forEach(children, (child, index) => {
    if (!child) {
      return;
    }

    actions.push(child);
    if (max !== index) {
      actions.push(
        typeof divider === 'string' ? divider : <Fragment key={index}>{divider}</Fragment>,
      );
    }
  });

  return 0 === actions.length ? empty : actions;
};

Actions.propTypes = {
  divider: propTypes.node,
  empty: propTypes.node,
};

export default Actions;
