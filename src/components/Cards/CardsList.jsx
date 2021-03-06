import { useMemo } from 'react';
import Preloader from '../UI/Preloader/Preloader';
import CardsItem from './CardsItem';
import scss from './cardsList.module.scss';

const CardsList = ({ list = [] }) => {
  const listIsCome = useMemo(() => !!list.length, [list]);

  return (
    <ul className={scss.list}>
      {listIsCome ? (
        list.map((item) => <CardsItem key={item.id} item={item} />)
      ) : (
        <Preloader />
      )}
    </ul>
  );
};
export default CardsList;
