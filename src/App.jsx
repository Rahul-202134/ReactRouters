import React from "react";
import Header from './Header/Header';
import Footer from './Footer/Footer.jsx'
import { Outlet } from 'react-router-dom';
import UserContextProvider from "./Context/UserContextProvider.jsx";
function App() {

  return (
    <>
      <UserContextProvider>
        <Header />
        <Outlet />
        <Footer />
      </UserContextProvider>
    </>
  )
}

export default App
