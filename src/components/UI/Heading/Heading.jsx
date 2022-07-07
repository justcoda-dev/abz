import scss from "./heading.module.scss"

const lightStyle = {
    fontWeight: "300"
}
const normalStyle = {
    fontWeight: "400"
}
const boldStyle = {
    fontWeight: "800"
}

const types = {
    "light": lightStyle,
    "normal": normalStyle,
    "bold": boldStyle,
}

const Heading = ({type, children}) => {
    return (
        <h1 style={type ? types[type] : types.normal} className={scss.title}>
            {children}
        </h1>
    )
}
export default Heading