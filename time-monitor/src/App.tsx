import React from 'react';
import './App.css';
import Board from './features/Board/Board';
import Navbar from './features/Navbar/Navbar.component';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Board>
        <Outlet />
      </Board>
    </div>
  );
}

export default App;
