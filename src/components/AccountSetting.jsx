import React, { useState } from "react";
import "./AccountingSetting.css";

function Settings() {
  // بيانات المستخدم
  const [user, setUser] = useState({
    name: "بتول حمد",
    email: "admin@support.com",
  });

  // رسائل حفظ الحساب
  const [profileMessage, setProfileMessage] = useState("");

  // بيانات كلمة المرور
  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  // رسائل كلمة المرور
  const [passwordError, setPasswordError] = useState("");
  const [passwordSuccess, setPasswordSuccess] = useState("");

  // تغيير بيانات الحساب
  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  // حفظ بيانات الحساب
  const saveProfile = (e) => {
    e.preventDefault();
    setProfileMessage("✅ تم حفظ بيانات الحساب بنجاح");
  };

  // تغيير كلمة المرور
  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswords({ ...passwords, [name]: value });
  };

  const changePassword = (e) => {
    e.preventDefault();
    setPasswordError("");
    setPasswordSuccess("");

    if (passwords.new !== passwords.confirm) {
      setPasswordError("❌ كلمة المرور الجديدة غير متطابقة");
      return;
    }

    setPasswordSuccess("🔒 تم تغيير كلمة المرور بنجاح");
    setPasswords({ current: "", new: "", confirm: "" });
  };

  return (
    <div className="settings-page">
      <h2>⚙️ الإعدادات</h2>

      {/* معلومات الحساب */}
      <form className="settings-card" onSubmit={saveProfile}>
        <h4>👤 معلومات الحساب</h4>

        {profileMessage && (
          <div className="success-msg">{profileMessage}</div>
        )}

        <label>الاسم</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleUserChange}
        />

        <label>الإيميل</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleUserChange}
        />

        <button type="submit">حفظ التغييرات</button>
      </form>

      {/* تغيير كلمة المرور */}
      <form className="settings-card" onSubmit={changePassword}>
        <h4>🔑 تغيير كلمة المرور</h4>

        {passwordError && (
          <div className="error-msg">{passwordError}</div>
        )}

        {passwordSuccess && (
          <div className="success-msg">{passwordSuccess}</div>
        )}

        <label>كلمة المرور الحالية</label>
        <input
          type="password"
          name="current"
          value={passwords.current}
          onChange={handlePasswordChange}
        />

        <label>كلمة المرور الجديدة</label>
        <input
          type="password"
          name="new"
          value={passwords.new}
          onChange={handlePasswordChange}
        />

        <label>تأكيد كلمة المرور</label>
        <input
          type="password"
          name="confirm"
          value={passwords.confirm}
          onChange={handlePasswordChange}
        />

        <button type="submit">تغيير كلمة المرور</button>
      </form>
    </div>
  );
}

export default Settings;
