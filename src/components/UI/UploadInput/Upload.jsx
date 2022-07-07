import scss from "./upload.module.scss"
import {useCallback, useMemo, useRef, useState} from "react";

const types = {
    "normal": scss.normal
}

const Upload = ({type}) => {
    const [filesArr, setFilesArr] = useState([])
    const [errorText, setErrorText] = useState("")

    const fileInput = useRef()

    const uploadHandle = useCallback(({target: {files}}) => {
        const arr = []
        const formData = new FormData()
        for (let i = 0; i < files.length; i++) {
            formData.append("files", files[i])
            arr.push(files[i].name)
        }
        setFilesArr([...arr])
    }, [])

    const fileName = useMemo(() =>
            filesArr?.[0]
                ? filesArr[0]
                : "Upload your photo",
        [filesArr])


    return (
        <div className={scss.wrapper}>
            <div className={`${scss.fileUploader} ${errorText && scss.error}`}>
                <label
                    className={`${scss.upload} ${errorText && scss.uploadError} ${type ? types[type] : types.normal}`}
                >
                    <span className={scss.uploadText}>upload</span>
                    <input
                        onChange={uploadHandle}
                        ref={fileInput}
                        id="file"
                        className={scss.fileInput}
                        type="file"
                        multiple
                    />
                </label>
                <span
                    className={`${scss.uploadStatus} ${filesArr.length && scss.filled}`}
                >
                {fileName}
            </span>
            </div>
            <span className={scss.errorText}>{errorText}</span>
        </div>
    )
}
export default Upload