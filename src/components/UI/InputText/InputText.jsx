import TextField from '@mui/material/TextField'

const InputText = ({error, onChange, helpText, label}) => {
    return (
        <TextField
            error={error}
            onChange={onChange}
            id={label}
            label={label}
            helperText={helpText}
            variant="outlined"
            fullWidth
            size={"normal"}
        />
    )
}
export default InputText