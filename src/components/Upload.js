import React from 'react'
import '../assets/styles/upload.css'
import { uploadImage } from '../utils/api/upload'
import validateExtension from '../utils/validateExtension'
import DragAndDrop from './DragAndDrop'

const Upload = (props) => {
  const onImageChange = (e) => {
    if (e.target.files[0] && validateExtension(e.target.files[0])) {
      let img = e.target.files[0]
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

      reader.readAsArrayBuffer(img)
    }
  }

  return (
    <div className={'principal-container'}>
      <div className={'title-container'}>Upload your image</div>
      <div className={'specs-container'}>File should be Jpeg, Png...</div>
      <DragAndDrop setters={props.setters} />
      <p>or</p>
      <div className="button-upload">
        <label htmlFor={'upload-image'}>choose a file</label>
        <input
          className={'input-file'}
          type="file"
          id="upload-image"
          onChange={onImageChange}
        />
      </div>
    </div>
  )
}

export default Upload
