import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../pages/Login.css"
function Login ({setIsLoggedIn}) {
    const [email, setEmail] = useState("")
    const [password, setpassword] = useState("")
    const [error, setError] = useState("") 
    const navigate = useNavigate()

    const handlelogin = (e) => {
        e.preventDefault(); //تمنع ان القيمة الافتراضية تكون فاضية

        if (email=== "admin@support.com" && password=== "12345") {
            setIsLoggedIn(true);
            navigate("/dashboard")
    
        }   else {
            setError(" اسم المستخدم أو كلمة المرور غير صحيحة")
        }
    }
    return (
        <div className="login-page" >
             <div className="login-card">
             <svg className="login-logo" xmlns="http://www.w3.org/2000/svg" width="50" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ticket h-5 w-5 text-primary-foreground"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M13 5v2"></path><path d="M13 17v2"></path><path d="M13 11v2"></path></svg>

                <h2>تسجيل الدخول</h2>
                <form onSubmit={handlelogin} >
                {error && <p className="error-meassage">{error}</p> }
                    <div className="group-form">
                        <lable>البريد الإلكتروني</lable><br></br>
                        <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="أدخل عنوان البريد الإلكتروني"></input>  
                    </div>
                    <br></br>
                    <div className="group-form">
                    <lable>كلمة المرور</lable><br></br>
                    <input type="password" value={password} onChange={(e)=> setpassword(e.target.value)} placeholder="أدخل كلمة المرور"></input>  
                        
                    </div>
                    <button type="sumbit" className="login-btn">تسجيل دخول</button>
        
            </form>

            </div>
        </div>
       
    )
}

export default Login