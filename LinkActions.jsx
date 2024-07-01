import {Divider} from 'antd';
import Actions from './Actions';

const LinkActions = (props) => {
  return (
    <Actions divider={<Divider type="vertical"/>} {...props}/>
  );
};

export default LinkActions;
