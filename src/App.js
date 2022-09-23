import React from 'react';
import { Outlet, Link } from 'react-router-dom'

function App() {
  return (
    <>
      <div className='App'>
        <ul>
          <Outlet />
          <li><Link to="/login">login</Link></li>
          <li><Link to="/home">home</Link></li>
          <li><Link to="/invoices">invoices</Link></li>
        </ul>
      </div>
    </>
  )
}

export default App;
