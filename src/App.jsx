import React from 'react';
import Sidebar2 from './components/Sidebar2';
import Dashboard from './components/Dashboard';
import AuroraBackgroundDemo from './components/Settings'
import Issues from './components/Issues';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'


function App() {
  return (
    <Router>
      <Routes>

      <Route path="/settings" element={<AuroraBackgroundDemo/>}/>
      </Routes>
      <div className="app-container">
        <Sidebar2 />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/issues" element={<Issues/>}/>
            
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;