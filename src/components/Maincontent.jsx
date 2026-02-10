// import Product from "./Product";
import Tikects from "./Tikects"
import Statcard from "./Statcard"
import Reports from "./Reports";
import "./Statcard.css";
import { tickets } from "./data/data";
// import TikectsStatus from "./TikectsStatus";
import StatusofTikects from "./StatusofTikects";
import RepeatedSubject from "./RepeatedSubject";
import AccountSettings from "./AccountSetting";

function Maincontent({activePage ,ticketsList , setTickets}) {

    const totalTickets = ticketsList.length;
    const totalTicketsOpen = ticketsList.filter((tikect) => tikect.status ==="مفتوحة").length;
    const totalTicketsPending = ticketsList.filter((tikect) => tikect.status ==="قيد المعالجة").length;
    const totalTicketsClose = ticketsList.filter((tikect) => tikect.status ==="مغلقة").length;


    

    if (activePage==="tickets") {
        return (
        <main className="main">
            <Tikects ticketsList={ticketsList} setTickets={setTickets} />
        </main>
        );
    }

    if (activePage==="report") {
        return (
        <main className="main">
            <Reports  />
        </main>
        );
    }


    if (activePage==="settings") {
        return (
        <main className="main">
            <AccountSettings />   
        </main>
        );
    }

    return (
        <main className="main-content">
          
            <h2>نظرة عامة</h2>
            <div className="carddata">

                <Statcard title={"عدد التذاكر"} value={totalTickets} />
                <Statcard title={"التذاكر المفتوحة"} value={totalTicketsOpen} />
                <Statcard title={"التذاكر قيد المعالجة"} value={totalTicketsPending} />
                <Statcard title={"التذاكر المغلقة"} value={totalTicketsClose} />

            </div>
            <div className="statistic main-content" >
                <StatusofTikects tikectss={ticketsList}/>
                <RepeatedSubject  />
            </div>
            
        </main>
    );
}

export default Maincontent