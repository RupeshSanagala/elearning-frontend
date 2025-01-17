import React from 'react';

const RegisterComp = () => {
  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: '100vh' }}
    >
      <form
        className="card p-4 shadow-lg"
        style={{ width: '400px', borderRadius: '10px' }}
      >
        <h3 className="text-center mb-4">Register</h3>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="form-control"
            placeholder="Enter your username"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className="btn btn-danger w-100">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterComp;
