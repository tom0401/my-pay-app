import React from 'react';
import {Outlet} from 'react-router-dom'
import './App.css';
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <Outlet/>
    </div>
  );
}

export default App;
