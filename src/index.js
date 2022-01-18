import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route, Navigate } from 'react-router-dom';
import Show from './components/Show';
import ShowItem from './components/ShowItem';
const rootElement = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/shows" element={<Show />}>
      </Route>
      <Route path="/shows/:id" element={<ShowItem />} />
      <Route path="*" element={<Navigate to="shows" />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
