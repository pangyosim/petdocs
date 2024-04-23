import React from 'react';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Mainpage from "./layouts/pages/main";

function App() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/main"/>}/>
      <Route path="/main" element={<Mainpage/>}/>
    </Routes>
  );
}

export default App;
