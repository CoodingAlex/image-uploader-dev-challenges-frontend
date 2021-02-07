import React from 'react'
import '../assets/styles/upload.css'

import DragAndDrop from './DragAndDrop'

const Upload = () => {
  return (
    <div className={'principal-container'}>
      <div className={'title-container'}>Upload your image</div>
      <div className={'specs-container'}>File should be Jpeg, Png...</div>
      <DragAndDrop />
    </div>
  )
}

export default Upload
