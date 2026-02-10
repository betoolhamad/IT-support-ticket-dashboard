import { tickets } from "./data/data"
import React, { useState , useRef , useEffect} from "react";
import { LuDownload } from "react-icons/lu";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "./Report.css";
function Reports () {
    // const [ticketsList, setTickets] = useState(tickets);
    const [search, setSearch] = useState('') 
    const [tickets, setTickets] = useState([]); //for API

    const reportPDF = useRef();

    const downloadPDF = async () => {
        const element = reportPDF.current;
      
        const canvas = await html2canvas(element, {
          scale: 2, 
          useCORS: true,
        });
      
        const imgData = canvas.toDataURL("image/png");
      
        const pdf = new jsPDF("p", "mm", "a4");
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      
        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("IT-Support-Tickets.pdf");
      };



    const downloadSinglePDF = async (ticket) => {
        // إنشاء جدول مؤقت
        const tempTable = document.createElement("table");
        tempTable.style.width = "100%";
        tempTable.style.borderCollapse = "collapse";
        tempTable.innerHTML = `
            <thead>
                <tr>
                    <th style="border:1px solid #000; padding:5px">الاسم</th>
                    <th style="border:1px solid #000; padding:5px">الإيميل</th>
                    <th style="border:1px solid #000; padding:5px">الموضوع</th>
                    <th style="border:1px solid #000; padding:5px">الوصف</th>
                    <th style="border:1px solid #000; padding:5px">التاريخ</th>
                    <th style="border:1px solid #000; padding:5px">الحالة</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="border:1px solid #000; padding:5px">${ticket.name}</td>
                    <td style="border:1px solid #000; padding:5px">${ticket.email}</td>
                    <td style="border:1px solid #000; padding:5px">${ticket.subject}</td>
                    <td style="border:1px solid #000; padding:5px">${ticket.description}</td>
                    <td style="border:1px solid #000; padding:5px">${ticket.createdAt}</td>
                    <td style="border:1px solid #000; padding:5px">${ticket.status}</td>
                </tr>
            </tbody>
        `;
    
        // نضيفه مؤقتًا للـ DOM
        document.body.appendChild(tempTable);
    
        // نحول الجدول لـ PDF
        const canvas = await html2canvas(tempTable, { scale: 2, useCORS: true });
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF();
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save(`Ticket-${ticket.id}.pdf`);
    
        // نزيل الجدول المؤقت
        document.body.removeChild(tempTable);
    };

    useEffect(() => {
        fetch("https://6989e276c04d974bc6a0baf9.mockapi.io/IT-Support-Tickets/Tickets")
          .then(res => res.json())
          .then(data => {
            const fixedData = data.map(ticket => {
              const { subject, description } = randomSubjectAndDescription();
              return {
                ...ticket,
                subject,
                description,
                status: randomStatus()
              };
            });
            setTickets(fixedData);
          });
      }, []);
      
    
      const randomSubjectAndDescription = () => {
        const map = [
          { subject: "مشكلة تسجيل الدخول", description: "لا أستطيع تسجيل الدخول إلى حسابي" },
          { subject: "نسيت كلمة المرور", description: "لم يصلني رمز إعادة تعيين كلمة المرور" },
          { subject: "تعطل النظام", description: "النظام لا يستجيب عند محاولة الدخول" },
          { subject: "خطأ في التحديث", description: "تظهر رسالة خطأ عند تحديث البيانات" },
          { subject: "فشل في إرسال البريد", description: "لم يصلني البريد الإلكتروني التأكيدي" }
        ];    
        
        
        return map[Math.floor(Math.random() * map.length)];
        };
      
    
      const randomStatus = () => {
        const statuses = ["مفتوحة", "قيد المعالجة", "مغلقة"];
        return statuses[Math.floor(Math.random() * statuses.length)];
      };

      

   
    return (
        
        <>
            {/* <form className="search-bar">
                <lable>بحث تذكرة</lable>
                <input type="text" value={search} onChange={(e)=> setSearch(e.target.value)}></input>
            </form>

           <div className="export-btn">
                <button className="all-downlowd-btn" type = "button" onClick={downloadPDF} >تنزيل PDF</button>
           </div> */}

            <div className="search-export-wrapper">
                <form className="search-bar">
                    <label>بحث تذكرة</label>
                    <input
                    type="text"
                    placeholder=" ابحث بالاسم أو الموضوع أو الحالة أو التاريخ"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    />
                </form>

  
            </div>


            <div className="page-header">
                <h1>📋 قائمة التذاكر</h1>
                <button className="all-downlowd-btn" type="button" onClick={downloadPDF}>
                    تنزيل PDF
                </button>
            </div>
            <div ref={reportPDF} style={{width: '100%'}}>
                <table className="Porduct-table"  >
                    <thead >
                        <tr >
                        <th>الاسم</th>
                        <th>الإيميل</th>
                        <th>الموضوع</th>
                        <th>الوصف</th>
                        <th>التاريخ</th>
                        <th className="status-col">الحالة</th>
                        <th>تصدير</th>

                        </tr>
                    </thead>

                    <tbody>
                        {tickets.filter((item) => {
                            return search === "" ? item : item.name.includes(search) || item.createdAt.includes(search) || item.subject.includes(search) || item.status.includes(search)
                            }).map((item) => (
                                
                        
                                <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.subject}</td>
                                <td>{item.description}</td>
                                <td>{item.createdAt}</td>


                                <td>
                                 

                                    <span className={
                                        item.status === "مفتوحة" ? "active-badge" :
                                        item.status === "قيد المعالجة" ? "pending-badge" : "inactive-badge"
                                    }>{item.status}</span>
                                </td>

                                <td> 
                                   <button className="downlowad-btn" onClick={() => downloadSinglePDF(item)}>{<LuDownload />}</button>
                                    </td>


                            </tr> 
                            )
                        )}
                
                        
                        
                    </tbody>
                </table>
            </div>
        
        </>
    )
}

export default Reports