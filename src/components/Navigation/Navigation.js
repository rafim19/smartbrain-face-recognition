import React from 'react';

const Navigation = ({ signInStatus, routeChange }) => {
  if (signInStatus) {
    return (
      <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <p className="f3 link dim black underline pa3 pointer sign-out-btn" onClick={() => routeChange('signIn')}>Sign Out</p>
      </nav>
    );
  } else {
    return (
      <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <p className="f3 link dim black underline pa3 pointer sign-out-btn" onClick={() => routeChange('signIn')}>Sign In</p>
        <p className="f3 link dim black underline pa3 pointer sign-out-btn" onClick={() => routeChange('register')}>Register</p>
      </nav>
    );
  }
}

export default Navigation;