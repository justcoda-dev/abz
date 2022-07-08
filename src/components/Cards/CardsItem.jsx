import classNames from 'classnames';
import { SERVER } from '../../config';
import Text from '../UI/Text/Text';
import scss from './cardsItem.module.scss';

const CardsItem = ({ item = {}, parentClass }) => {
  return (
    <li
      className={classNames({
        [scss.item]: true,
        [parentClass]: !!parentClass,
      })}
    >
      <div className={scss.image}>
        <img
          src={
            item?.photo?.length
              ? item.photo
              : `${SERVER}/images/photo-cover.svg`
          }
          alt="#"
        />
      </div>
      <div>
        <Text parentClass={scss.text}>{item.name}</Text>
      </div>
      <div className={scss.info}>
        <Text parentClass={scss.text}>{item.position}</Text>
        <Text parentClass={scss.text}>{item.email}</Text>
        <Text parentClass={scss.text}>{item.phone}</Text>
      </div>
    </li>
  );
};
export default CardsItem;
