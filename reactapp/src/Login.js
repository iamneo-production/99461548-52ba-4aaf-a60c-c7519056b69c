import './login.css';
import React from 'react';


function Login() {
    
  return (
    <div  id="loginBox">
      <div>
      <h><b>CYBER HEALTH</b></h>
          <h1>LOGIN</h1>
            <div id="email">
              <input type="text" placeholder="Email" className="name"/>
            </div>

            <div className="second-input" id="password">  
              <input type="password" placeholder="Password" className="name"/>
            </div>

            <div className="login-button" >
              <button id="loginButton" onclick="userHome"><a href="./Home">Login</a></button>
            </div>
            
              <p className="link">
              
                  <span>New user? </span><button1> <a href="./Signup" id="signupLink">SignUp</a></button1>
           
              </p> 
        
      </div>
    </div>
  );
}
export default Login;