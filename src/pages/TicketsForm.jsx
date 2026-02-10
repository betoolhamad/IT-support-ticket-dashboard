import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./tikectsForm.css";

function TicketsForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    idNumber: "",
    fullName: "",
    email: "",
    phone: "",
    mainCategory: "",
    subCategory: "",
    subject: "",
    description: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage("✅ تم إرسال التذكرة بنجاح!");
    setFormData({
      idNumber: "",
      fullName: "",
      email: "",
      phone: "",
      mainCategory: "",
      subCategory: "",
      subject: "",
      description: "",
    });
  };

  return (
    <div className="ticket-page">
        <div className="background">
      <h2> الدعم الفني</h2>
        <p className="ticket-intro">
            نهتم بمساعدتك في حالة وجود أي عائق، عليك فقط إرسال طلب إلينا وسنقوم بالرد في أقرب فرصة.
        </p>
      </div>
      <form className="ticket-form" onSubmit={handleSubmit}>
        <h3>إنشاء تذكرة جديدة</h3>

        {successMessage && <div className="success-msg">{successMessage}</div>}

    

        <label>الاسم الكامل *</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="أدخل الاسم الكامل"
          required
        />

        <label>البريد الإلكتروني *</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="أدخل البريد الإلكتروني"
          required
        />


        <label>التاريخ</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          placeholder="أدخل البريد الإلكتروني"
          required
        />


        <label>موضوع التذكرة *</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="أدخل موضوع التذكرة"
          required
        />

        <label>الوصف *</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="أدخل الوصف"
          maxLength={300}
          required
        ></textarea>

        <button type="submit">إرسال التذكرة</button>
      </form>
    </div>
  );
}

export default TicketsForm;
