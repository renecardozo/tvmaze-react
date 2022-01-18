import React from 'react';
import {
  Link,
} from 'react-router-dom';

function App() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/shows">Shows</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default App;
