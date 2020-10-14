import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from axios


function App() {
 useEffect(() => {
      axios.get('')
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Test
        </p>
      </header>
    </div>
  );
}

export default App;
