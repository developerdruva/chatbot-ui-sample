import './App.css';

import React from 'react'
import Login from './components/authentication/login/Login';

const App = () => {
  return (
    <div className="App">
      {localStorage?.getItem('token') ? 'hi there ' : <Login />}
    </div>
  )
}

export default App;
