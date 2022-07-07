import { useCallback, useState } from 'react';
import { inputValidate } from '../../Form/validation';

const useInputText = ({ initialStateText = '', validationSchema }) => {
  const [value, setValue] = useState(initialStateText);
  const [textError, setTextError] = useState('');

  const handleChange = useCallback(
    ({ target: { value } }) => {
      setValue(value);
      if (validationSchema) {
        setTextError(inputValidate(value, validationSchema));
      }
    },
    [value, textError],
  );

  const clearInput = useCallback(() => {
    setValue('');
    setTextError('');
  }, [value, textError]);

  return { value, handleChange, clearInput, textError, setValue };
};
export default useInputText;
