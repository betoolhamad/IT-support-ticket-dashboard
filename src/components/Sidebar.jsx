import "./Sidebar.css";
import { Link, NavLink } from "react-router-dom";
import { Routes, Route } from "react-router-dom";



function Sidebar({activePage, onPageChange , showSideBar, onLogout}) {
    const navItems = [
        {id : "dashboard", label: "لوحة التحكم"},
        {id : "tickets", label: "التذاكر"},
        {id : "report", label: "التقارير"},
        {id : "settings", label: "الإعدادات"},
    ];
    

    return (
        <aside className={`sidebar ${showSideBar ? "show" : ""}`}>
        <h3>لوحة تحكم تذاكر الدعم الفني </h3>

        <nav>
            <ul className="nav-list">
                {navItems.map((item) => (
                     //هذي تسوي لوب على العناصر ونحط لها كي ونطبع اللايبل داخل li
                // <li key = {item.id}>  
                //     <Link to={`/${item.id}`}               
                //     className={activePage===item.id ? "nav-item active" : "nav-title"} 
                //     onClick={() => onPageChange(item.id)}>
                //         {item.label}
               
                //     </Link>
                // </li>
               
                  <li key = {item.id}                 
                    className={activePage===item.id ? "nav-item active" : "nav-title"} 
                    onClick={() => onPageChange(item.id)}
                    >{item.label}
               
                    </li> 
              
                
                ))}
                    <button className="log-btn" onClick={onLogout}>تسجيل خروج</button>

            </ul>
        </nav>
        </aside>


    )
}

export default Sidebar