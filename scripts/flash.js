class Flash {
  constructor (flashContainer, flashMessage) {
    this.flashMessage = document.getElementById(flashMessage)
    this.flashContainer = document.getElementById(flashContainer)

    this.hideFlashMessage()
  }

  showFlashMessage (message) {
    this.flashMessage.innerText = message
    this.flashContainer.style.visibility = 'visible'
  }

  hideFlashMessage () {
    this.flashMessage.innerText = ''
    this.flashContainer.style.visibility = 'hidden'
  }
}
