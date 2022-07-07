import classNames from 'classnames';
import scss from './text.module.scss';

const Text = ({ children, parentClass }) => {
  return (
    <p
      className={classNames({
        [scss.text]: true,
        [parentClass]: !!parentClass,
      })}
    >
      {children}
    </p>
  );
};
export default Text;
