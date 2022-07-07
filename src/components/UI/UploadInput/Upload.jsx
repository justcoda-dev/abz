import scss from "./upload.module.scss"
import {useMemo, useRef} from "react"
import classNames from "classnames"

const types = {
    "normal": scss.normal
}

const Upload = ({type, onChange, imageName, imageTypes, errorText}) => {
    const fileInput = useRef()
    const fileName = useMemo(() => imageName ? imageName : "Upload your photo", [imageName])

    return (
        <div className={scss.wrapper}>

            <div className={classNames({
                    [scss.fileUploader]: true,
                    [scss.error]: !!errorText
                }
            )}>
                <label
                    className={classNames({
                        [scss.upload]: true,
                        [scss.uploadText]: !!errorText,
                        [types[type]]: !!type,
                        [types.normal]: !type
                    })}
                >
                    <span className={scss.uploadText}>
                        upload
                    </span>
                    <input
                        onChange={onChange}
                        ref={fileInput}
                        id="file"
                        className={scss.fileInput}
                        type="file"
                        accept={`image/*,${imageTypes || ""}`}
                    />
                </label>
                <span

                    className={classNames({
                        [scss.uploadStatus]: true,
                        [scss.filled]: !!fileName
                    })}
                >
                {fileName}
            </span>
            </div>
            <span className={scss.errorText}>{errorText}</span>
        </div>
    )
}
export default Upload