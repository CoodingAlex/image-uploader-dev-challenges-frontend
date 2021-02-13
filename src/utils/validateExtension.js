export default function validateExtension(file) {
  let filetypes = /jpeg|jpg|png|gif/
  let extension = file.name.split('.').pop()
  let validMimetype = filetypes.test(extension)

  return validMimetype ? true : false
}
