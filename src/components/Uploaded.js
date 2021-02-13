import React from 'react'
import checkIcon from '../assets/images/check.svg'
import '../assets/styles/uploaded.css'

import copyFromInput from '../utils/CopyFromInput'

const Uploaded = (props) => {
  return (
    <div className={'principal-container-uploaded'}>
      <img className={'checkIconImg'} src={checkIcon} alt="check icon" />
      <p className={'uploaded-label'}>Uploaded Successfully!</p>
      <img src={props.imageUrl} className={'uploaded-img'} alt="image" />
      <div className={'container-input-copy'}>
        <input
          type="text"
          name=""
          value={props.imageUrl}
          id="url-link-input"
          className={'copy-input'}
        />
        <button onClick={copyFromInput} className={'copy-button'}>
          Copy Link
        </button>
      </div>
    </div>
  )
}

export default Uploaded
