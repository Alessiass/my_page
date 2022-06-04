import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Navigation from './Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import HomePage from './pages/HomePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <div class="appContent">
            <Navigation />
            <div className="mainContainer">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/about_me" element={<AboutMe />} />
                </Routes>
            </div>
          </div>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
