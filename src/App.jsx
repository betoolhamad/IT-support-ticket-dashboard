import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DashboardLayout from './Layouts/DashboardLayout';
import { BrowserRouter , Routes, Route , Navigate } from "react-router-dom"
import Login from "./pages/Login"
// import Product from './components/Product';
import TicketsForm from "./pages/TicketsForm"




function App() {
    const [IsLoggedIn , setIsLoggedIn] = useState("false")

  return (
    <BrowserRouter>

      {/* Default redirect to dashboard */}
      <Route path="/" element={<Navigate to="/dashboard" replace />} />

      {/* Login page */}
      <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />

      {/* Dashboard, requires login */}
      <Route path="/dashboard" element={isLoggedIn ? <DashboardLayout /> : <Navigate to="/login" replace />} />

      {/* New Ticket page */}
      <Route path="/new-ticket" element={isLoggedIn ? <TicketsForm /> : <Navigate to="/login" replace />} />

      {/* Optional: redirect old paths */}
      <Route path="/LoginPage" element={<Navigate to="/login" replace />} />
      <Route path="/TicketsForm" element={<Navigate to="/new-ticket" replace />} />

       

         
        
        


       

      </Routes>

     </BrowserRouter>

  );
}

export default App
