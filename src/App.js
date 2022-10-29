import './components/styles/App.css';
import { Routes, Route, Link, Navigate } from 'react-router-dom';

// import Navbar from './components/Navbar';
import Help from "./components/Help.js";
import Header from './components/Header';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div>
      <nav className="navbar">
      <Link to="/">
          <div className="navbarItem">
            Home
          </div>
      </Link>
      <Link to="/help">
          <div className="navbarItem">
            Help
          </div>
      </Link>
      </nav>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <ToDoList />
          </>}/>
        <Route path="/help" element={<Help />} />
        <Route path="*" element={<Navigate to="/" />}/>
      </Routes>
    </div>
  );
}

export default App;
