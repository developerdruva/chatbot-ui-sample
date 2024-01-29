import './App.css';

import React, { useEffect, useState } from 'react'
import Login from './components/authentication/login/Login';
import { Provider } from 'react-redux';
import { reduxStore } from './components/redux/Store';
import LoadingSpinner from './components/common/commonComps/LoadingSpinner';

const store = reduxStore;

const App = () => {
  const [loggedIn, setLoggedIn] = useState(null);

  const getTokenFromLogin = () => {
    reduxStore?.dispatch({ type: 'SHOW_SPINNER' })
    let token = localStorage.getItem("token");
    if (token !== null && token !== "" && token !== undefined) {
      setLoggedIn(true)
    } else {
      setLoggedIn(false)
    }
    reduxStore?.dispatch({ type: 'HIDE_SPINNER' });
  }

  useEffect(() => {
    getTokenFromLogin()
  }, [loggedIn])
  return (
    <Provider store={store}>
      <div className="App">
        {loggedIn ? 'hi there ' : <Login setLoggedIn={setLoggedIn} />}
      </div>
      <LoadingSpinner />
    </Provider>
  )
}

export default App;
