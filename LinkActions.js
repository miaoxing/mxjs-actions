import { Children } from 'react';
import {Divider} from 'antd';

const LinkActions = ({children}) => {
  const actions = [];
  Children.map(children, (child, i) => {
    if (!child) {
      return;
    }
    actions.push(child, <Divider key={i} type="vertical"/>);
  });
  actions.pop();
  return actions;
};

export default LinkActions;
