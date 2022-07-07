import scss from "./radioButtons.scss"
import RadioButton from "./RadioButton"

const RadioButtons = ({checked, onChange, list = [], title = ""}) => {
    return (
        <div className={scss.radioButtons}>
            <p className={scss.title}>{title || ""}</p>
            {list.map(item =>
                <RadioButton
                    key={item.id}
                    positionId={item.id}
                    value={item.name}
                    onChange={onChange}
                    checked={checked === item.id.toString()}
                />)}

        </div>
    )
}
export default RadioButtons