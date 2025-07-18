import React,{useState} from 'react';
import './Signin.css';
import logo from "../img/logo.png";
import { Link ,useNavigate} from 'react-router-dom';  // <-- THIS IMPORT
import {toast} from 'react-toastify'
function Signin() {
    
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    

    const notifyA = (msg) => toast.error(msg)
    const notifyB = (msg) => toast.success(msg)
    
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const postData =()=>{
    // console.log({
    //   name,
    //   email,
    //   userName,
    //   password
    // })

    // sending data to server

    if (!emailRegex.test(email)) {
      notifyA("Invalid email")
      return
    }

    fetch("http://localhost:5000/signin", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password

      })
    }).then(res => res.json())
    .then(data =>{
      if (data.error) {
          notifyA(data.error)
        } else {
          notifyB(data.message)
          navigate("/")
        }
      console.log(data)})
  }
  return (
    <div className="signIn">
      <div>
        <div className="loginForm">
          <img className="signUpLogo" src={logo} alt="" />
          <div>
             <input type="email" name="email" id="email" value={email} placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} />
          </div>
          <div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => { setPassword(e.target.value) }}
            />
          </div>
          <input type="submit" id="login-btn" onClick={()=>{
            postData() }} value="Sign In" />
        </div>
        <div className="loginForm2">
          Don't have an account ?
          <Link to="/signup">
            <span style={{ color: "blue", cursor: "pointer" }}>Sign Up</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signin;
