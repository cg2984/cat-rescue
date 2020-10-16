import React from 'react';
import './App.css';
import CatCard from "./components/cat-card.js";
import EventCard from "./components/event-card.js";
import Header from "./components/header.js";
import CatSection from "./components/cat-section.js";
import Events from "./components/events.js";
import About from "./components/about.js";


function App() {
 /*useEffect(() => {
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
  });*/
  return (
    <div className="App">
      <div className = "AppWrapper">
        <Header/>
        <CatSection/>
        <Events/>
        <About/>
      </div>
    </div>
  );
}

export default App;
