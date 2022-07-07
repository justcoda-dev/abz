import scss from "./heading.module.scss"
import classNames from "classnames"

const types = {
    "light": scss.light,
    "normal": scss.normal,
    "bold": scss.bold,
}

const Heading = ({type, children, parentClass}) => {
    return (
        <h1
            className={
                classNames({
                    [scss.title]: true,
                    [types[type]]: !!type,
                    [types.normal]: !type,
                    [parentClass]: !!parentClass
                })

            }>
            {children}
        </h1>
    )
}

export default Heading