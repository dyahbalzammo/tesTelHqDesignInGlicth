import React from 'react'

import { Helmet } from 'react-helmet'

import './auth.css'

const Auth = (props) => {
  return (
    <div className="auth-container">
      <Helmet>
        <title>Auth - Mobillio Online Store</title>
        <meta property="og:title" content="Auth - Mobillio Online Store" />
      </Helmet>
      <div className="auth-container1">
        <div className="auth-container2">
          <h1 className="auth-text">
            <span>Gabung sekarang!</span>
            <br></br>
          </h1>
          <input
            type="text"
            required
            autoFocus
            placeholder="Email"
            className="auth-email-input input"
          />
          <input
            type="text"
            required
            autoFocus
            placeholder="Password"
            className="auth-password-input input"
          />
          <div className="auth-btn-group">
            <button className="button">Gabung</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth
