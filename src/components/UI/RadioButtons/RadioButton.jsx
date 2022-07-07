import scss from "./radioButton.module.scss"
import randomId from "../../../functions/id"
import {useMemo} from "react"

const RadioButton = ({onChange, checked, value, positionId}) => {
    const id = useMemo(() => randomId(), [value])
    const handle = () => onChange(positionId)

    return (
        <div className={scss.item}>
            <div className={scss.radioButton}>
                <input
                    className={scss.input}
                    id={id}
                    onChange={handle}
                    type="radio"
                    checked={checked}
                    value={value}
                />
                <label
                    className={scss.label}
                    htmlFor={id}/>
            </div>
            <span className={scss.text}>{value}</span>
        </div>
    );
};

export default RadioButton