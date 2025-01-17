import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginComp = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="card p-4 shadow-lg" style={{ width: '400px' }}>
        <h2 className="text-center mb-4">Login</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input type="text" className="form-control" id="username" name="username" placeholder="Enter your username" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" name="password" placeholder="Enter your password" />
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginComp;
