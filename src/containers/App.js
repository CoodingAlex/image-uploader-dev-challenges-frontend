import React from 'react'

import Upload from '../components/Upload'
import Loading from '../components/Loading'
import Uploaded from '../components/Uploaded'

import '../assets/styles/App.css'

const App = (props) => {
  return (
    <div className={'container'}>
      <Upload />
    </div>
  )
}

export default App
