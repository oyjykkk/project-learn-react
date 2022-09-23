import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './home/home'
import Login from './login/login'
import Invoice from './invoice/invoice';
import Invoices from './invoices/invoices'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='login' element={<Login />} />
        <Route path='home' element={<Home />} />
      </Route>
      <Route path='invoices' element={<Invoices />}>
        <Route path=':invoiceId' element={<Invoice />}></Route>
      </Route>
      <Route path='*' element={<App />}></Route>
    </Routes>
  </BrowserRouter> 
  , document.getElementById('root'))
