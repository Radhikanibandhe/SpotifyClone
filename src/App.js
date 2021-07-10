import React, { useEffect } from 'react'
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';

function App() {

useEffect(() => {
  const [token, setToken] = useState(null);

  const hash = getTokenFromUrl();
  window.location.hash = "";

  const _token = hash.access_token;

  if (_token) {
    setToken(_token);
  }

  console.log("Token: ",token);
}, []);

  return (
    <div className="app">

      {
        token ? (
          <Player />
        ) : (
          <Login />
        )
      }

      {/* Login */}
      <Login />
    
    </div>
  )
}

export default App



