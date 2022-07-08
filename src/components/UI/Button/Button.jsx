import classNames from 'classnames';
import scss from './button.module.scss';
const types = {
  yellow: scss.yellow,
};

const Button = ({ children, onClick, type, parentClass, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classNames({
        [scss.button]: true,
        [types[type]]: type,
        [types.yellow]: !type,
        [parentClass]: !!parentClass,
        [scss.disabled]: disabled,
      })}
    >
      {children}
    </button>
  );
};
export default Button;
