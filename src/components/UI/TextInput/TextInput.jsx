// import scss from "./textInput.module.scss"
// import {useCallback, useMemo, useRef, useState} from "react";
//
// const TextInput = ({error, helpText, onChange, value, label}) => {
//     const [focusInput, setFocus] = useState(false)
//     const $input = useRef()
//
//     const errorStatus = useMemo(() => !!error?.length, [error])
//     const valueStatus = useMemo(() => !!$input.current?.value.length, [$input.current?.value])
//     const onFocus = useCallback(() => setFocus(true), [focusInput])
//     const onBlur = useCallback(() => setFocus(false), [focusInput])
//
//     return (
//         <div className={scss.wrapper}>
//             <div className={scss.textInput}>
//                 <label htmlFor="text-input"
//                        className={`${scss.label}
//                        ${!valueStatus && !focusInput ? scss.showLabel : ""}`}
//                 >
//                     {label || "label"}
//                 </label>
//                 <div
//                     className={
//                         `${scss.textInputInner}
//                     ${focusInput || valueStatus ? scss.inputFocus : ""}
//                     ${errorStatus ? scss.error : ""}`
//                     }
//                 >
//                     <input
//                         onBlur={onBlur}
//                         onFocus={onFocus}
//                         ref={$input}
//                         onChange={onChange}
//                         defaultValue={value}
//                         placeholder=""
//                         id="text-input"
//                         className={scss.input}
//                         type="text"
//                     />
//                     <fieldset className={`${focusInput || valueStatus ? scss.focus : scss.hidden}`}>
//                         <legend className={scss.fieldLegend}>
//                             <span className={scss.fieldText}>{label || "label"}</span>
//                         </legend>
//                     </fieldset>
//                 </div>
//
//             </div>
//             <span
//                 className={`${scss.text} ${errorStatus ? scss.errorText : ""}`}>{errorStatus ? error : helpText}</span>
//         </div>
//     )
// }
// export default TextInput