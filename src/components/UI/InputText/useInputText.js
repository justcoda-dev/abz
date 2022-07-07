import {useState} from "react"
import {inputValidate} from "../../Form/validation";
import {useCallback} from "react";

const useInputText = ({initialStateText = "", validationSchema}) => {
    const [value, setValue] = useState(initialStateText)
    const [textError, setTextError] = useState("")
    const handleChange = useCallback(({target: {value}}) => {
        setValue(value)
        if (validationSchema) {
            setTextError(inputValidate(value, validationSchema))
        }
    }, [value, textError])
    const clearInput = () => {
        setValue("")
        setTextError("")
    }
    return {value, handleChange, clearInput, textError, setValue}
}
export default useInputText