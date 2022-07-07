import scss from './logo.module.scss';

const Logo = ({ logoSrc = '' }) => {
  return (
    <div className={scss.logo}>
      <img src={logoSrc} alt="#" />
    </div>
  );
};
export default Logo;
