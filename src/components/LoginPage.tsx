import React from 'react';
import { useHistory } from 'react-router-dom';
import './Style.css';

const LoginPage: React.FC = () => {
  const history = useHistory();

  const handleSubmit = () => {
    // Perform login logic here
    history.push('/dashboard'); // Navigate to the dashboard route
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h1>Log in</h1>
        <div className="input-box">
          <input type="email" placeholder="E-mail" required />
          <i className='bx bxs-user'></i>
        </div>
        <div className="input-box">
          <input type="password" placeholder="password" required />
          <i className='bx bxs-lock-alt'></i>
        </div>
        <div className="remember-forgot">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <a href="#">forgot password</a>
        </div>
        <button type="submit" className="btn">Log in</button>
      </form>
    </div>
  );
};

export default LoginPage;
