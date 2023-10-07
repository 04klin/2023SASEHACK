import { useState } from 'react'

const Login = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div>
      <h1>Login</h1>

      <form action="">
        <p>User</p>
        <input 
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          required
              />
        <p>Pass</p>
        <input 
          type="text"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
              />
      </form>
    </div>
  )

}

export default Login