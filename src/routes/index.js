import React from 'react';
// import { Route , Routes } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from '../pages/homepage';
import Menu from '../pages/menu';
import Profile from '../pages/profile';
import Cart from '../pages/cart';
import Transaction from '../pages/transaction';
import Login from '../pages/login';
import Register from '../pages/register';
import Navbar from '../components/navbar';

function App() {
    return (
        <div>
         <Navbar />
         <Router> 
         <Routes>  
                <Route path="/" element={<Homepage />} />
                {/* <Route path="/login" element={Login} />  */}
                {/* <Route path="/register" element={Register} /> */}
         </Routes>
        </Router> 
        </div>
    )
}

export default App;