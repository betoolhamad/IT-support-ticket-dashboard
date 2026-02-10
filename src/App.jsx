import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DashboardLayout from './Layouts/DashboardLayout';
import { BrowserRouter , Routes, Route , Navigate } from "react-router-dom"
import Login from "./pages/Login"
// import Product from './components/Product';
import TicketsForm from "./pages/new-ticket"




function App() {
    const [IsLoggedIn , setIsLoggedIn] = useState("false")

  return (
    <BrowserRouter>

      <Routes>

         <Route path="/" element={<Navigate to="/dashboard" />} />


         <Route path="/Login" element={<Navigate to="/Login" replace />} />


         <Route path="/new-ticket" element={<Navigate to="/TicketsForm" replace />} />




         <Route path="/Login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}>

         </Route>
         
         <Route path="/dashboard" element={IsLoggedIn ? <DashboardLayout/> : <Navigate to="/Login"/>}></Route>

         <Route path="/new-ticket" element={<TicketsForm />} />
       

         
        
        


       

      </Routes>

     </BrowserRouter>

  );
}

export default App
