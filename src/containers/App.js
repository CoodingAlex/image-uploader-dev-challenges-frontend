import React from 'react'
import { useState } from 'react'

import Upload from '../components/Upload'
import Loading from '../components/Loading'
import Uploaded from '../components/Uploaded'

import '../assets/styles/App.css'

const App = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isUploaded, setIsUploaded] = useState(false)
  const [imageUrl, setImageUrl] = useState()

  return (
    <div className={'container'}>
      {!isLoading && !isUploaded && (
        <Upload setters={{ setImageUrl, setIsLoading, setIsUploaded }} />
      )}
      {isLoading && !isUploaded && <Loading />}
      {!isLoading && isUploaded && <Uploaded imageUrl={imageUrl} />}
    </div>
  )
}

export default App
