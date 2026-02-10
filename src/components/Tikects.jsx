import { useState } from "react"
import "./Tikects.css";

function Tikects ({ticketsList, setTickets}) {
    // const [ticketsList, setTickets] = useState(tickets);

    const [formData, setformData] = useState({
        name: "",
        email: "",
        subject: "",
        description: "",
        createdAt: "",
        status: "",
        active: true  
    })
    const [showForm, setShowForm] = useState(false)
    const [editingTikects, setEditingTikects] = useState(null)

    const deleteTikects = (id) => {
        setTickets(ticketsList.filter((deleteitem) => deleteitem.id !== id))
    }

    const handleInputChange = (e) => {
        setformData({...formData, [e.target.name]: e.target.value})
    }

    const handlesubmit = (e) => {
        e.preventDefault();

        if (editingTikects) {
            // التعديل
            setTickets(
                ticketsList.map((item) =>
                    item.id === editingTikects
                        ? { ...item, ...formData }
                        : item
                )
            )
        } else {
            // الإضافة
            const newTicket = {
                id: ticketsList.length + 1,
                ...formData  // ← تشمل كل الحقول بما فيها active
            };
            setTickets([...ticketsList, newTicket])
        }
        closeAddForm()
    };

    const openAddForm = () => {
        setEditingTikects(null)
        setformData({
            name: "",
            email: "",
            subject: "",
            description: "",
            createdAt: "",
            status : "",
            active: true  // ← boolean
        })
        setShowForm(true)
    }

    const openEditForm = (tikect) => {
        setEditingTikects(tikect.id)
        setformData({
            name: tikect.name,
            email: tikect.email,
            subject: tikect.subject,
            description: tikect.description,
            createdAt: tikect.createdAt,
            status:tikect.status,
            active: tikect.active  // ← مهم! لازم ترجع
        });
        setShowForm(true)
    }

    const closeAddForm = () => {
        setEditingTikects(null)
        setformData({
            name: "",
            email: "",
            subject: "",
            description: "",
            createdAt: "",
            status : "",
            active: true
        })
        setShowForm(false)
    }

    // const calculateTotal = 
    return (
      <>
        {showForm && (
             <div className="Modal-overlay" >
                <div className="modal">
                    <h3>{editingTikects ? "تعديل تذكرة" : "إضافة تذكرة"}</h3>
                    <form onSubmit={handlesubmit}>
                        <div className="form-group">
                            <label>الاسم</label>
                            <input 
                                type="text" 
                                name="name" 
                                value={formData.name} 
                                onChange={handleInputChange} 
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>البريد الإلكتروني</label>
                            <input 
                                type="email" 
                                name="email" 
                                value={formData.email} 
                                onChange={handleInputChange} 
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>موضوع التذكرة</label>
                            <input 
                                type="text" 
                                name="subject" 
                                value={formData.subject} 
                                onChange={handleInputChange} 
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>الوصف</label>
                            <input 
                                type="text" 
                                name="description" 
                                value={formData.description} 
                                onChange={handleInputChange} 
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>التاريخ</label>
                            <input 
                                type="date" 
                                name="createdAt" 
                                value={formData.createdAt} 
                                onChange={handleInputChange} 
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>حالة التذكرة</label><br/>
                            <select 
                                className="custom-select" 
                                name="status" 
                                value={String(formData.status,
                            )}  // ← حولها string
                                onChange={(e) => {
                                    setformData({
                                        ...formData, 
                                        status: e.target.value
                                    })
                                }} 
                                required
                            >
                                <option value="">اختر الحالة</option>
                                <option value="مفتوحة">مفتوحة</option>
                                <option value="مغلقة">مغلقة</option>
                                <option value="قيد المعالجة">قيد المعالجة</option>

                            </select>
                        </div>
                        
                        <div className="form-btns">
                            <button type="submit" className="btn-Edit">
                                {editingTikects ? "تعديل" : "إضافة"}
                            </button>
                            <button type="button" className="btn-cancle" onClick={closeAddForm}>
                                إلغاء
                            </button>
                        </div>
                    </form>
                </div>
             </div>
        )}
        
        <div>
            <div className="page-header">
                <h1>📋 قائمة التذاكر</h1>
                <button className="btn-add" onClick={openAddForm}>إضافة تذكرة +</button>
            </div>

            <table className="Porduct-table" >
                <thead >
                    <tr >
                       <th>الاسم</th>
                       <th>الإيميل</th>
                       <th>الموضوع</th>
                       <th>الوصف</th>
                       <th>التاريخ</th>
                       <th className="status-col">الحالة</th>
                       <th className="active-col">الإجراء</th>
                    </tr>
                </thead>

                <tbody>
                    {ticketsList.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.subject}</td>
                            <td>{item.description}</td>
                            <td>{item.createdAt}</td>


                            <td>
                                {/* <span className={item.active ? "active-badge" : "inactive-badge"}>
                                    {item.active ? "مفتوحة" : "مغلقة"}
                                </span> */}

                                <span className={
                                    item.status === "مفتوحة" ? "active-badge" :
                                    item.status === "قيد المعالجة" ? "pending-badge" : "inactive-badge"
                                }>{item.status}</span>
                            </td>
                            <td>
                                <button className="edit-btn" onClick={() => openEditForm(item)}>
                                    تعديل
                                </button>
                                <button className="delete-btn" onClick={() => deleteTikects(item.id)}>
                                    حذف
                                </button>
                            </td>
                        </tr> 
                    ))}
                </tbody>
            </table>
        </div>
      </>
    )
}

export default Tikects;