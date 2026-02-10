import "./Header.css";
import { GiHamburgerMenu } from "react-icons/gi";

function Header({onToggleSideBar}) {
   
    return (
        <div className="Header">
            <div className="click"><GiHamburgerMenu onClick={(onToggleSideBar)} />
            </div>
            {/* <img className="logo" src={logo} alt="logo"></img> */}
            {/* <h3> تذاكر الدعم الفني </h3> */}
            <svg className="logos" xmlns="http://www.w3.org/2000/svg" width="50" height="100" viewBox="0 8 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M13 5v2"></path><path d="M13 17v2"></path><path d="M13 11v2"></path></svg>
           


        </div>
    )
}

export default Header