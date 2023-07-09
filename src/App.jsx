// import React from 'react';
import './App.css';
import Row from './Row';
import requests from './request';


function App() {
  return (
    <div className='App'>
      <h1>hey gurleen!Let us build netflix clone</h1>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
    </div>
  );
}

export default App;
