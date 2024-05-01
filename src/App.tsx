import React from 'react';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Mainpage from "./layouts/pages/main";
import TestPage from './pages/TestPage/testPage';
import TestPage2 from './pages/TestPage2/testPage2';

function App() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/main"/>}/>
      <Route path="/main" element={<Mainpage/>}/>
      <Route path="/test" element={<TestPage/>}/>
      <Route path="/test/2" element={<TestPage2/>}/>

    </Routes>
  );
}

export default App;
