import { useCallback, useState } from 'react';

const useUpload = () => {
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState('');
  const [errorText, setErrorText] = useState('');
  const onChangeHandle = useCallback(
    ({ target: { files } }) => {
      setImage(files[0]);
      setImageName(files[0]?.name);
    },
    [image, imageName],
  );
  const clearInput = useCallback(() => {
    setImage(null);
    setImageName('');
    setErrorText('');
  }, [image]);
  return { image, onChangeHandle, clearInput, imageName, errorText };
};
export default useUpload;
