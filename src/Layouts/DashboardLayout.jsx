import Sidebar from "../components/Sidebar"
import { useState , useEffect } from "react"
import Header from "../components/Header"
// import Product from "../components/Product";
import Maincontent from "../components/Maincontent";
import Statcard from "../components/Statcard";
import { useNavigate } from "react-router-dom";
import Login from "../pages/Login";
import { Route , Routes } from "react-router-dom";
import { tickets } from "/Users/betoolaljurish/dashboard/src/components/data/data.js";


function DashboardLayout() {
    const [showSideBar, setShowSideBar] = useState(false); //ظهور واخفاء السايد بار بالزر
    const [activePage, setActivePage] = useState("Home"); //أي صفحة أو أي عنصر حاليًا مفعّل (Active)


    const [ticketsList , setTickets] = useState(() => {
        const savedTickets = localStorage.getItem("ticketss");
        return savedTickets ? JSON.parse(savedTickets) : tickets; // ← هنا tickets import
    });
    
    
 
    useEffect(()=> {
        localStorage.setItem("ticketss", JSON.stringify(ticketsList));
    },[ticketsList]);
        const toggleSidebar = () => {
            setShowSideBar(!setShowSideBar);
        };

    const navigate = useNavigate();

    const toggleSideBar = ()=> { //function for opened state 
        setShowSideBar(!showSideBar) //open
    }

    const handlelog = () => {
        navigate("/Login")
    }


    return (
        
        <div className="layout">
            <div className="main-area">
                <Header onToggleSideBar={toggleSideBar}/>
            </div>


            <div className="page-wrapper">
                <Sidebar showSideBar={showSideBar} activePage={activePage} onPageChange={setActivePage} onLogout={handlelog} />
                
                <div className="main-content">
                     <Maincontent activePage={activePage} ticketsList={ticketsList} setTickets={setTickets} className="main-content2"/>
                </div>
</div>
    
        </div>

)

       

}

export default DashboardLayout