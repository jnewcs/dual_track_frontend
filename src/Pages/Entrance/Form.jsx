import React from 'react';

const Form = ({ localEmail, setEmail, loading, password, setPassword, onClick, primaryText }) => (
  <form>
    <div className='field'>
      <label className='label' htmlFor='email'>Email</label>
      <div className='control'>
        <input
          className='input'
          autoComplete='email'
          required
          type='text'
          id='email'
          disabled={loading}
          value={localEmail}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
    </div>

    <div className='field'>
      <label className='label' htmlFor='password'>Password</label>
      <div className='control'>
        <input
          className='input'
          autoComplete='current-password'
          required
          type='password'
          id='password'
          disabled={loading}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
    </div>

    <button
      type='submit'
      className={`button is-primary mt-5 ${loading ? 'is-loading' : undefined}`}
      onClick={onClick}
      disabled={loading}
    >
      {primaryText}
    </button>
  </form>
);

export default Form;
