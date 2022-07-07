import scss from "./cardsItem.module.scss"
import Text from "../UI/Text/Text"
import {SERVER} from "../../config"
import classNames from "classnames"

const CardsItem = ({item = {}, parentClass}) => {
    return (
        <li className={classNames(
            {
                [scss.item]: true,
                [parentClass]: !!parentClass
            }
        )}>
            <div className={scss.image}>
                <img
                    src={item?.photo?.length
                        ? item.photo
                        : `${SERVER}/images/photo-cover.svg`} alt=""
                />
            </div>
            <div className={scss.name}>
                <Text>{item.name}</Text>
            </div>
            <div className={scss.info}>
                <Text>{item.position}</Text>
                <Text>{item.email}</Text>
                <Text>{item.phone}</Text>
            </div>
        </li>
    )
}
export default CardsItem