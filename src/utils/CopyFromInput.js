export default function CopyFromInput() {
  let copyText = document.getElementById('url-link-input')

  copyText.select()
  copyText.setSelectionRange(0, 99999) /* For mobile devices */

  document.execCommand('copy')
}
