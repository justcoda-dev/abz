import scss from "./tooltip.module.scss"
import Tip from '@mui/material/Tooltip'

const types = {
    "normal": scss.normal
}
const Tooltip = ({title, children, type}) => {
    return (
        <Tip
            classes={{popper: type ? types[type] : types.normal}}
            title={title}
        >
            {children}
        </Tip>
    )
}
export default Tooltip