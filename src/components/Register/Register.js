import React from 'react';

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      registerNameInput: '',
      registerEmailInput: '',
      registerPassInput: ''
    }
  }

  onInputChange = (event) => {
    if (event.target.id === 'name') {
      this.setState(() => {
        return { registerNameInput: event.target.value }
      })
      // console.log(this.state.registerNameInput)
    } else if (event.target.id === 'email-address') {
      this.setState(() => {
        return { registerEmailInput: event.target.value }
      })
      // console.log(this.state.registerEmailInput)
    } else if (event.target.id === 'password') {
      this.setState(() => {
        return { registerPassInput: event.target.value }
      })
      // console.log(this.state.registerPassInput)
    } else {
      console.log('Something error in onInputChange Register.js. Got called from', event.target)
    }
  }

  onRegisterButton = () => {
    const { registerNameInput, registerEmailInput, registerPassInput } = this.state;
    if (registerNameInput && registerEmailInput && registerPassInput) {
      fetch('http://localhost:3000/register', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(this.state)
      })
        .then(res => res.json())
        .then(user => {
          if (user) {
            this.props.loadUser(user)
            this.props.buttonRegister('home')
          } else {
            alert("Error logging in")
          }
        })
    } else {
      alert('Please fill all of the fields correctly')
    }
  }

  render() {
    const { buttonRegister } = this.props;
    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <div className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f4 fw6 ph0 mh0" style={{ backgroundColor: 'black', color: 'white', padding: '0.5rem' }}>Register</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                <input 
                  className="pa2 input-reset ba b--black bg-transparent hover-bg-black hover-white w-100" 
                  type="text" 
                  name="name" 
                  id="name" 
                  onChange={this.onInputChange}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input 
                  className="pa2 input-reset ba b--black bg-transparent hover-bg-black hover-white w-100" 
                  type="email" 
                  name="email-address" 
                  id="email-address" 
                  onChange={this.onInputChange}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input 
                  className="b pa2 input-reset ba b--black bg-transparent hover-bg-black hover-white w-100" 
                  type="password" 
                  name="password" 
                  id="password" 
                  onChange={this.onInputChange}
                />
              </div>
            </fieldset>
            <div className="">
              <input className="b br2 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib sign-in-btn" type="submit" value="Register" onClick={this.onRegisterButton}/>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default Register;