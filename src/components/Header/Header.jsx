import classNames from 'classnames';
import { SERVER } from '../../config';
import Button from '../UI/Button/Button';
import Logo from '../UI/Logo/Logo';
import scss from './header.module.scss';

const Header = ({ type, parentClass }) => {
  const types = {
    desktop: scss.desktop,
    mobile: scss.mobile,
  };

  const logoSrc = `${SERVER}/images/Logo.svg`;
  return (
    <header
      className={classNames({
        [scss.header]: true,
        [types[type]]: !!type,
        [types.desktop]: !type,
        [parentClass]: !!parentClass,
      })}
    >
      <div className={scss.logo}>
        <Logo logoSrc={logoSrc} />
      </div>
      <div className={scss.buttons}>
        <Button>users</Button>
        <Button parentClass={scss.buttonSignUp}>Sign up</Button>
      </div>
    </header>
  );
};
export default Header;
