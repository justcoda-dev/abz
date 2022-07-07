import CircularProgress from '@mui/material/CircularProgress'

const types = {
    "normal": {
        width: "48px",
        height: "48px"
    }
}

const Preloader = ({type}) => {

    return (
        <CircularProgress
            style={
                type
                    ? types[type]
                    : types.normal
            }
        />

    )
}
export default Preloader