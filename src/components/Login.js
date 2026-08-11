import React, { useState }  from "react";
import { useNavigate } from "react-router-dom";
import "../Login.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate(); 
// console.log("email",email)

 function handleLogin(e) {
    e.preventDefault();

    const correctEmail = "test@gmail.com";
    const correctPassword = "Admin123";

    if(email === correctEmail && password === correctPassword){
      setError("");
      navigate("/dashboard");

    }
    else{
      setError("Invalid Email or Password ")
    }
    
  }
 return (
    <div className="login-container">
      
      <div className="login-box">
      <form  className="login-box" onSubmit={handleLogin}>
         <h1>Welcome back</h1>
        <p>Log in to manage your tasks</p>
        <label>Email</label>
        <input
          type="Email"
          placeholder="name@company.com"
          value={email}
          onChange={ (e)=>{ setEmail(e.target.value);

          }}
          required
        />
        <br></br>
        <br></br>
         <label>Password</label>
        <input
          type="Password"
          placeholder="Enter your password"
          value={password}
          onChange={ (e)=> { setPassword(e.target.value);
          }}
          required
        />

        {error && <p style={{ color:"red"}}>{error}</p>} 
         <div className="forgot">
          <a href="/">Forgot password?</a>
        </div>
        <br></br>
        {/* {error && <p style={{ color:"red"}}>{error}</p>}  */}
         <button type="submit">
          Login
        </button>
         <p className="signup">
          Don't have an account? <a href="/">Sign up</a>
        </p>
         </form>
      </div>
  
    </div>
  );
}

export default Login;