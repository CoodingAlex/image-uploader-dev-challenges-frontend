import React from 'react'
import '../assets/styles/loading.css'

const Loading = () => {
  return (
    <div className={'principal-container-loading'}>
      <p className={'loading-label'}>Uploading...</p>
      <div className="progress">
        <div className="indeterminate"></div>
      </div>
    </div>
  )
}

export default Loading
