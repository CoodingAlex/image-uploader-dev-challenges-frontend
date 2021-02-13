import axios from 'axios'

const URL = process.env.API_URL

export function uploadImage(data, config, setters) {
  setters.setIsLoading(true)
  axios.post(URL, data, config).then((response) => {
    setters.setImageUrl(response.data.url)
    setters.setIsLoading(false)
    setters.setIsUploaded(true)
  })
}
