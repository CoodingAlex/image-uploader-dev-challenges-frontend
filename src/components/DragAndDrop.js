import React from 'react'
import { useState, useCallback } from 'react'
import '../assets/styles/dragAndDrop.css'
import { useDropzone } from 'react-dropzone'
import axios from 'axios'

const DragAndDrop = () => {
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
        const binaryStr = reader.result
        setImage(binaryStr)
        const config = {
          headers: { 'Content-Type': 'multipart/form-data' },
        }
        let data = new FormData()
        data.append(
          'image',
          new Blob([binaryStr], { type: 'image/jpeg' }),
          new Date().toJSON() + '.jpeg'
        )
        axios.post('http://localhost:3001/upload', data, config)
      }
      reader.readAsArrayBuffer(file)
    })
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <div className={'drop_zone'} {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? <p>agrega tus archivos</p> : <p>archivo</p>}
    </div>
  )
}

export default DragAndDrop
