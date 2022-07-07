import TextField from '@mui/material/TextField';
import scss from './inputText.module.scss';

const InputText = ({ error, onChange, helpText, label, value }) => {
  return (
    <TextField
      error={error}
      onChange={onChange}
      className={scss.input}
      value={value}
      id={label}
      label={label}
      helperText={helpText}
      variant="outlined"
      fullWidth
      size={'normal'}
    />
  );
};
export default InputText;
