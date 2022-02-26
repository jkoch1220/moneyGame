import { Button } from '@material-ui/core'
import React, { useRef } from 'react'
import styles from './FileUploadButton.module.scss'

interface FileUploadButtonProps {
  name: string
  onChange: (file: File) => void
  text: string
}

function FileUploadButton(props: FileUploadButtonProps): JSX.Element {
  const inputFile = useRef<HTMLInputElement>(null)

  const onFileSelected = (files: FileList | null) => {
    if (files != null && files[0] != null) {
      props.onChange(files[0])
    }
  }

  const onUploadButtonClicked = () => {
    if (inputFile !== null && inputFile.current !== null) {
      inputFile.current.click()
    }
  }

  return (
    <div className={styles.uploadButtonWrapper}>
      <div className={styles.fileUploadButton}>
        <input
          hidden
          id={props.name}
          ref={inputFile}
          type="file"
          onChange={e => onFileSelected(e.target.files)}
          accept=".csv"
        />
        <Button
          className={styles.uploadButton}
          onClick={onUploadButtonClicked}
          classes={{ label: styles.uploadButtonLabel }}
        >
          {props.text}
        </Button>
      </div>
    </div>
  )
}

export default FileUploadButton
