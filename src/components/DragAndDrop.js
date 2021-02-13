import React from 'react'
import { useCallback } from 'react'
import '../assets/styles/dragAndDrop.css'
import image from '../assets/images/image.svg'
import { useDropzone } from 'react-dropzone'
import validateExtension from '../utils/validateExtension'
import { uploadImage } from '../utils/api/upload'

const DragAndDrop = (props) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      acceptedFiles.forEach((file) => {
        if (validateExtension(file)) {
          const reader = new FileReader()

          reader.onabort = () => console.log('file reading was aborted')
          reader.onerror = () => console.log('file reading has failed')
          reader.onload = () => {
            const binaryStr = reader.result
            const config = {
              headers: { 'Content-Type': 'multipart/form-data' },
            }
            let data = new FormData()
            data.append(
              'image',
              new Blob([binaryStr], { type: 'image/jpeg' }),
              new Date().toJSON() + '.jpeg'
            )
            uploadImage(data, config, props.setters)
          }
          reader.readAsArrayBuffer(file)
        }
      })
    },
    [props.setters]
  )
  const { getRootProps, getInputProps } = useDropzone({ onDrop })

  return (
    <div className={'drop_zone'} {...getRootProps()}>
      <input {...getInputProps()} />
      {/* {isDragActive ? <p>agrega tus archivos</p> : <p>archivo</p>} */}
      <img src={image} alt="icon drag and drop" />
      <p>Drag and Drop your image here</p>
    </div>
  )
}

export default DragAndDrop
