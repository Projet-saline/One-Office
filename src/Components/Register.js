import React, { useState } from 'react';
import './styles.scss';

export const Register = () => {
  const [form, setForm] = useState({
    name: '',
    country: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation et traitement du formulaire
    console.log(form);
  };

  return (
    <div className="register-container">
      <h1 className="title">Register</h1>
      <div className="all-input">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label className="input-label">Name</label>
            <input className="input" name="name" value={form.name} onChange={handleChange} placeholder="Username" />
          </div>
          <div className="input-container">
            <label className="input-label">Country</label>
            <input className="input" name="country" value={form.country} onChange={handleChange} placeholder="Where do you leave ?" />
          </div>
          <div className="input-container">
            <label className="input-label">Email</label>
            <input className="input" type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" />
          </div>
          <div className="input-container">
            <label className="input-label">Password</label>
            <input className="input" type="password" name="password" value={form.password} onChange={handleChange} placeholder="Create your password" />
          </div>
          <div className="input-container">
            <label className="input-label">Confirm Password</label>
            <input className="input" type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} placeholder="Confirm it" />
          </div>
          <button className="button" type="submit">
            <span className="button-text">Create</span>
          </button>
        </form>
      </div>
    </div>
  );
};
