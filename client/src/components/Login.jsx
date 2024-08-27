import React, { useState } from 'react'
import '../css/Login.css';
import axios from 'axios'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('admin')

  axios.defaults.withCredentials = true
  const handleSubmit = () => {
    
    axios.post('http://localhost:3001/auth/login', {username, password, role})
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  return (
    <div className='login-page'>
      <div className='login-container'>
        <h2>Login</h2> <br />
        <div className='form-group'>
          <label htmlFor="username">Username</label>
          <input type="text" placeholder='Enter Username'
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor="password">Password</label>
          <input type="password" placeholder='Enter Password'
           onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div className='form-group'>
          <label htmlFor="role">Role</label>
          <select name="role" id="role"
           onChange={(e) => setRole(e.target.value)}>
            <option value="admin">Admin</option>
            <option value="student">Student</option>
          </select>
        </div>
        <button className='btn-login' onClick={handleSubmit}>Login</button>
      </div>
    </div>
  )
}

export default Login
