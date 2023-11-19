import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Components/Home/Home';
import { Login } from './Components/Login/Login';
import { Navbar } from './Components/Navbar/Navbar';
import { PageNotFound } from './Components/PageNotFound/PageNotFound';
import { Register } from './Components/Register/Register';
import { jwtDecode } from 'jwt-decode';
import { useState, useEffect } from 'react';
import { Services } from './Components/Services/Services';
import { Footer } from './Components/Footer/Footer';
import FAQContainer from './Components/FAQItem/FAQContainer';
import { Work } from './Components/Work/Work';
// import { Contact } from './Components/Contact/Contact';

function App() {
  const [user, setUser] = useState(null);

  function saveCurrentUser() {
    let token = localStorage.getItem('userToken');
    let decoded = jwtDecode(token); 
    // console.log(decoded)
    setUser(decoded) //store data
  }

   useEffect( ()=>{
      if (localStorage.getItem('userToken')){
        saveCurrentUser();
      }

   })
  return (
    <>
      <Navbar user={user} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='info' element={<Work />} />
        <Route path='login' element={<Login info={saveCurrentUser} />} />
        <Route path='register' element={<Register />} />
        <Route path='services' element={<Services />} />
         {/* <Route path='contact' element={<Contact/>} /> */}
         <Route path='popular' element={<FAQContainer/>}/>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
