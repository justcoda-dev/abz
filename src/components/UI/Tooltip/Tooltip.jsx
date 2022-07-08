import Tip from '@mui/material/Tooltip/Tooltip';
import scss from './tooltip.module.scss';
const types = {
  normal: scss.normal,
};
const Tooltip = ({ title, children, type }) => {
  return (
    <Tip classes={{ popper: type ? types[type] : types.normal }} title={title}>
      {children}
    </Tip>
  );
};
export default Tooltip;
