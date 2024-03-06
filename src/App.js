import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Insert from './Components/Insert.js';
import Display from './Components/Display.js';
import Displayid from './Components/Displayid.js';
import Update from './Components/Update.js';
import Delete from './Components/Delete.js';
import Deleteid from './Components/Deleteid.js';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/Insert">Insert</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/Display">Display</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Displayid">Displayid</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Update">Update</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Delete">Delete</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Deleteid">Deleteid</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/Displayid" element={<Displayid />} />
          <Route path="/Insert" element={<Insert />} />
          <Route path="/Display" element={<Display />} />
          <Route path="/Update" element={<Update />} />
          <Route path="/Delete" element={<Delete />} />
          <Route path="/Deleteid" element={<Deleteid />} />
          <Route path="/" element={<Navigate to="/Greet" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
