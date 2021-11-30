import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './containers/Home/Home';
import Details from './containers/Details/Details';
import Units from './containers/Units/Units';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
    <div className ="outline">
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/units" element={<Units />} />
          <Route path="/details" >
            <Route path=":unitId" element={<Details />} />
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "5rem" }}>
                <p>Oops! This page doesn't exist yet!</p>
                <Link to="/">Go to the homepage</Link>
              </main>
            }
          />
        </Route>
      </Routes>
      </div>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
