import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8001/signs/login', {
        userId: username,
        password: password,
      });

      console.log(response.data);
      
      window.location.href = "/page1";

    } catch (error) {
      console.log('Login failed:', error.response.data);
      if (error.response && error.response.status === 401) {
        setErrorMessage(error.response.data.error);
      }
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Login</h2>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <form className="form5" onSubmit={handleSubmit}>
          <div className="form5-group">
            <label className="label5" htmlFor="username">
              Username:
            </label>
            <input
              className="input5"
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form5-group">
            <label className="label5" htmlFor="password">
              Password:
            </label>
            <input
              className="input5"
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <br />
          <button className="button5" type="submit">
            Login
          </button>
        </form>
        <p>
          Don't have an account? <Link className="a6" to="sign">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
