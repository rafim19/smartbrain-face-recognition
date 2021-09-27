import React from 'react';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmailInput: '',
      signInPasswordInput: ''
    }
  }

  onInputChange = (event) => {
    if (event.target.id === 'email-address') {
      this.setState(() => {
        return { signInEmailInput: event.target.value }
      })
    } else if (event.target.id === 'password') {
      this.setState(() => {
        return { signInPasswordInput: event.target.value }
      })
    } else {
      console.log('Something error in onInputChange SignIn.js. Got called from', event.target)
    }
  }

  onSignInButton = () => {
    fetch('https://dry-mesa-11594.herokuapp.com/signin', 
      {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(this.state)
      }
    )
      .then(res => res.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user)
          this.props.onRouteStateChange('home')
        } else {
          alert("Error logging in")
        }
      })
  }

  render() {
    const { onRouteStateChange } = this.props;
    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <div className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f4 fw6 ph0 mh0" style={{ backgroundColor: 'black', color: 'white', padding: '0.5rem' }}>Sign In</legend>
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
              <input className="b br2 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib sign-in-btn" type="submit" value="Sign in" onClick={this.onSignInButton}/>
            </div>
            <div className="lh-copy mt3">
              <a href="#" className="f6 link dim black db" onClick={() => onRouteStateChange('register')}>Register</a>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default SignIn;