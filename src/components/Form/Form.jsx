import scss from "./form.module.scss"
import Heading from "../UI/Heading/Heading"
import {useCallback, useEffect, useMemo, useState} from "react"
import RadioButtons from "../UI/RadioButtons/RadioButtons"
import UploadInput from "../UI/UploadInput/Upload"
import Button from "../UI/Button/Button"
import {SERVER} from "../../config"
import Preloader from "../UI/Preloader/Preloader"
import {textInputSchema, emailInputSchema, phoneInputSchema} from "./validation"
import InputText from "../UI/InputText/InputText"
import useInputText from "../UI/InputText/useInputText"
import useUpload from "../UI/UploadInput/useUpload"
import request from "../../api/api"
import classNames from "classnames"

const types = {
    "mobile": scss.mobile,
    "desktop": scss.desktop
}

const Form = ({type, onSignUpClick}) => {
    //state
    const [checked, setChecked] = useState("")
    const [userIsCreated, setUserIsCreated] = useState(false)
    const [radioList, setRadioList] = useState([])
    const {
        onChangeHandle: uploadChangeHandle,
        imageName,
        image: imageValue,
        clearInput: clearImageFile
    } = useUpload()
    const {
        handleChange: nameOnChangeHandle,
        clearInput: nameInputClear,
        textError: nameTextError,
        value: nameValue,
    } = useInputText({validationSchema: textInputSchema})

    const {
        handleChange: emailOnChangeHandle,
        clearInput: emailInputClear,
        textError: emailTextError,
        value: emailValue,
    } = useInputText({validationSchema: emailInputSchema})

    const {
        handleChange: phoneOnChangeHandle,
        clearInput: phoneInputClear,
        textError: phoneTextError,
        value: phoneValue,
    } = useInputText({validationSchema: phoneInputSchema})
    //computed
    const radioListIsCome = useMemo(() => !!radioList.length, [radioList])
    const formsIsValid = useMemo(() =>
        !emailTextError && !phoneTextError && !nameTextError && !!checked && !!imageName
        , [emailTextError, phoneTextError, nameTextError, checked, imageName])
    //events
    const radioOnChangeHandle = useCallback((id) => setChecked(id.toString()), [checked])

    const signUpOnClickHandle = useCallback(async (e) => {
        e.preventDefault()
        const status = await postUserData()
        onSignUpClick(status)
        setUserIsCreated(status)
        clearForm()
    }, [emailValue, nameValue, phoneValue, checked, imageValue])

    //
    const getRadioList = async () => {
        const {positions} = await request.get.positions()
        setRadioList([...positions])
    }
    const clearForm = () => {
        clearImageFile()
        nameInputClear()
        emailInputClear()
        phoneInputClear()
    }
    const postUserData = async () => {
        const formData = new FormData()
        formData.append("position_id", checked)
        formData.append("name", nameValue)
        formData.append("email", emailValue)
        formData.append("phone", phoneValue)
        formData.append("photo", imageValue)
        const token = await request.get.token()
        const {success} = await request.post.users(token.token, formData)
        return success
    }

    // onLoad
    useEffect(() => {
        getRadioList()
    }, [])
    return (
        <>
            {!userIsCreated ?
                <form className={classNames({
                    [scss.form]: true,
                    [types[type]]: !!type,
                    [types.desktop]: !type
                })}>
                    <Heading parentClass={scss.title}>Working with POST request</Heading>
                    <div className={scss.container}>
                        <div className={scss.input}>
                            <InputText
                                onChange={nameOnChangeHandle}
                                error={!!nameTextError}
                                helpText={nameTextError}
                                label="Name"
                            />

                        </div>
                        <div className={scss.input}>
                            <InputText
                                onChange={emailOnChangeHandle}
                                error={!!emailTextError}
                                helpText={emailTextError}
                                label="Email"
                            />
                        </div>
                        <div className={scss.input}>
                            <InputText
                                onChange={phoneOnChangeHandle}
                                error={!!phoneTextError}
                                helpText={phoneTextError}
                                label="Phone"
                            />
                        </div>
                        <div className={scss.radioButtons}>
                            {
                                radioListIsCome
                                    ? <RadioButtons
                                        onChange={radioOnChangeHandle}
                                        checked={checked}
                                        list={radioList}
                                        title="Select your position"
                                    />
                                    : <Preloader/>
                            }
                        </div>
                        <div className={scss.upload}>
                            <UploadInput
                                type="normal"
                                imageName={imageName}
                                onChange={uploadChangeHandle}
                            />
                        </div>
                        <Button
                            onClick={signUpOnClickHandle}
                            disabled={!formsIsValid}
                        >
                            Sign Up
                        </Button>
                    </div>
                </form>
                : <div className={scss.status}>
                    <Heading>User successfully registered</Heading>
                    <img className={scss.image} src={`${SERVER}/images/success-image.svg`} alt="#"/>
                </div>}
        </>
    )
}
export default Form