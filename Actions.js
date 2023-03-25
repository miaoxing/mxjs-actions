import {Children, Fragment} from 'react';
import propTypes from 'prop-types';
import {filterChildren} from '@mxjs/auth';

const Actions = ({divider = ' ', empty = null, children}) => {
  const result = filterChildren(children);

  const actions = [];
  const max = Children.count(result) - 1;
  Children.forEach(result, (child, index) => {
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
