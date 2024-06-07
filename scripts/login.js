class LoginForm {
  constructor (container) {
    

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

  #login (regNo, password) {
    if (!regNo || !password) {
      //Display error in a flash message
    }

    try {
      //Send the data to server
    } catch (error) {
      //Display error in a flash message
    }
  }
}
