class LoginForm {
  constructor (container, flash) {
    this.flash = flash
    this.form = document.createElement('form')
    this.heading = document.createElement('h1')
    this.heading.textContent = 'Student Login'
    this.regNoField = document.createElement('input')
    this.regNoField.placeholder = 'Registration Number'
    this.passwordField = document.createElement('input')
    this.passwordField.placeholder = 'Password'
    this.loginButton = document.createElement('button')
    this.loginButton.textContent = 'Login'

    //Attach the elements to the form
    this.form.appendChild(this.heading)
    this.form.appendChild(this.regNoField)
    this.form.appendChild(this.passwordField)
    this.form.appendChild(this.loginButton)

    //Attach form to #container div
    this.container = document.getElementById(container)
    this.container.appendChild(this.form)

    this.loginButton.addEventListener('click', e => {
      e.preventDefault()
      this.#login(this.regNoField.value, this.passwordField.value)
    })
  }

  async #login (regNo, password) {
    if (!regNo || !password) {
      //Display error in a flash message
      return this.flash.showFlashMessage('All field are required')
    }

    try {
      //Send the data to server
      const response = await fetch(
        'http://localhost:5600/api/v1/student/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            registration_number: regNo,
            password: password
          })
        }
      )

      if (!response.ok)
      {
        throw new Error(response.statusText)
      }

      const result = await response.json()
      console.log(result)


      this.flash.flashContainer.style.backgroundColor = '#4caf50'
      return this.flash.showFlashMessage('Login successfull')
    } catch (error)
    {

      //Display error in a flash message
      return this.flash.showFlashMessage(error.message)
    }
  }
}
