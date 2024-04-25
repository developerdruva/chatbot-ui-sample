import './App.css';

import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import LoadingSpinner from './components/common/commonComps/LoadingSpinner';
import { reduxStore } from './components/redux/Store';
import RouterPage from './components/routes/RouterPage';
import WelcomePage from './components/main/WelcomePage';
import 'react-bootstrap';
import NavbarHeader from './components/main/NavbarHeader';

const store = reduxStore;

const App = () => {
  const [loggedIn, setLoggedIn] = useState(null);
  const [themeMode, setThemeMode] = useState(true);


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
      <div className="App" style={{ backgroundColor: themeMode ? 'white' : 'black' }}>
        <NavbarHeader setThemeMode={setThemeMode} themeMode={themeMode} />
        {/* {JSON.stringify('them variable ' + themeMode)} */}
        <RouterPage />
        <LoadingSpinner />
      </div>
    </Provider>
  )
}

export default App;

{/* {loggedIn ? <RouterPage /> : <WelcomePage />} */ }
{/* // <Login setLoggedIn={setLoggedIn} />} */ }
{/* {loggedIn ? 'hi there ' : <Login setLoggedIn={setLoggedIn} />} */ }
