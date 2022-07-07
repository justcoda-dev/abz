

const types = {
  mobile: scss.mobile,
  desktop: scss.desktop,
};

const Form = ({ type, onSignUpClick }) => {
  const [checked, setChecked] = useState('');
  const [userIsCreated, setUserIsCreated] = useState(false);
  const [radioList, setRadioList] = useState([]);
  const {
    onChangeHandle: uploadChangeHandle,
    imageName,
    image: imageValue,
    clearInput: clearImageFile,
  } = useUpload();
  const {
    handleChange: nameOnChangeHandle,
    clearInput: nameInputClear,
    textError: nameTextError,
    value: nameValue,
  } = useInputText({ validationSchema: textInputSchema });

  const {
    handleChange: emailOnChangeHandle,
    clearInput: emailInputClear,
    textError: emailTextError,
    value: emailValue,
  } = useInputText({ validationSchema: emailInputSchema });

  const {
    handleChange: phoneOnChangeHandle,
    clearInput: phoneInputClear,
    textError: phoneTextError,
    value: phoneValue,
  } = useInputText({ validationSchema: phoneInputSchema });

  const radioListIsCome = useMemo(() => !!radioList.length, [radioList]);
  const formsIsValid = useMemo(
    () =>
      nameValue &&
      emailValue &&
      phoneValue &&
      !emailTextError &&
      !phoneTextError &&
      !nameTextError &&
      !!checked &&
      !!imageName,
    [
      nameValue,
      emailValue,
      phoneValue,
      emailTextError,
      phoneTextError,
      nameTextError,
      checked,
      imageName,
    ],
  );

  const radioOnChangeHandle = useCallback(
    (id) => setChecked(id.toString()),
    [checked],
  );

  const signUpOnClickHandle = useCallback(
    async (e) => {
      e.preventDefault();
      const status = await postUserData();
      onSignUpClick(status);
      setUserIsCreated(status);
      if (status) {
        clearForm();
      }
    },
    [emailValue, nameValue, phoneValue, checked, imageValue],
  );

  const getRadioList = async () => {
    try {
      const { positions } = await request.get.positions();
      setRadioList(positions);
    } catch (e) {
      console.error(e);
    }
  };
  const clearForm = useCallback(() => {
    clearImageFile();
    nameInputClear();
    emailInputClear();
    phoneInputClear();
    setChecked('');
  }, [emailValue, nameValue, phoneValue, checked, imageName]);

  const postUserData = async () => {
    try {
      const formData = new FormData();
      formData.append('position_id', checked);
      formData.append('name', nameValue);
      formData.append('email', emailValue);
      formData.append('phone', phoneValue);
      formData.append('photo', imageValue);
      const { token } = await request.get.token();
      const { success } = await request.post.users(token, formData);
      return success;
    } catch (e) {
      console.error(e);
      return false;
    }
  };

  useEffect(() => {
    getRadioList();
  }, []);

  return (
    <>
      {!userIsCreated ? (
        <form
          className={classNames({
            [scss.form]: true,
            [types[type]]: !!type,
            [types.desktop]: !type,
          })}
        >
          <Heading parentClass={scss.title}>Working with POST request</Heading>
          <div className={scss.container}>
            <div className={scss.input}>
              <InputText
                onChange={nameOnChangeHandle}
                error={!!nameTextError}
                helpText={nameTextError}
                label="Name"
                value={nameValue}
              />
            </div>
            <div className={scss.input}>
              <InputText
                onChange={emailOnChangeHandle}
                error={!!emailTextError}
                helpText={emailTextError}
                label="Email"
                value={emailValue}
              />
            </div>
            <div className={scss.input}>
              <InputText
                onChange={phoneOnChangeHandle}
                error={!!phoneTextError}
                helpText={phoneTextError}
                label="Phone"
                value={phoneValue}
              />
            </div>
            <div className={scss.radioButtons}>
              {radioListIsCome ? (
                <RadioButtons
                  onChange={radioOnChangeHandle}
                  checked={checked}
                  list={radioList}
                  title="Select your position"
                />
              ) : (
                <Preloader />
              )}
            </div>
            <div className={scss.upload}>
              <UploadInput
                type="normal"
                imageName={imageName}
                onChange={uploadChangeHandle}
              />
            </div>
            <Button onClick={signUpOnClickHandle} disabled={!formsIsValid}>
              Sign Up
            </Button>
          </div>
        </form>
      ) : (
        <div className={scss.status}>
          <Heading>User successfully registered</Heading>
          <img
            className={scss.image}
            src={`${SERVER}/images/success-image.svg`}
            alt="#"
          />
        </div>
      )}
    </>
  );
};
export default Form;
