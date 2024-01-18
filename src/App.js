import React from 'react';
import './App.css';
import Header from './common/header/Header';
import {
  BrowserRouter as Router,
  Switch,
  // Route,
  // Link
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
      <Header/>
          {/* <Route path="/" exact>
              <About />
            </Route> */}
      </Router>
    </>
  );
}

export default App;
