"use client";
import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import { cn } from "../../lib/utils";
 

function Sidebar2() {
  const navigate = useNavigate();
  
  return (
    <div className="sidebar">
      <h2>AI Troubleshooter</h2>
      <nav>
        <ul>
          <li><button onClick={() => navigate('/')}>Dashboard</button></li>
          <li><button onClick={() => navigate('/Issues')}>Issues</button></li>
          <li><button onClick={() => navigate('/Reports')}>Reports</button></li>
          <li><button onClick={() => navigate('/Settings')}>Settings</button></li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar2;
