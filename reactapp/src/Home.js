import './home.css';
import React, {useState} from 'react';
import user from "./user.png";

function Home() {
  const [date,setDate]=useState();
  console.log("Date" , date);

  const [time,setTime]=useState();
  console.log("Time",time);

  return (
    <body>
      <div class="topnav">
        <h>CYBER HEALTH</h>
  <div id="logoutButton"><a href="#">Logout</a></div>
  <div id="reportButton"><a href="#">Report</a></div>
  <div id="casePrescriptionButton"><a href="#">Presciption</a></div>
  <div id="homeButton"><a class="active" href="#">Home</a></div>
</div>

<div class="userHome">
  <button ><div id="grid1">
  <img src={user} width="60" height="60"/>
    <b><p>Dr.ABC</p><p>HEART SPECIALIST</p><p>ABC HOSPITAL </p></b></div>
    </button>
<button>  <div id="grid2">
  <img src={user} width="60" height="60"/>
    <p>Dr.ABCE</p><p>LUNG SPECIALIST</p><p>ABCE HOSPITAL </p></div>
    </button>
  <button><div id="grid3">
  <img src={user} width="60" height="60"/>
  <p>Dr.ABCF</p><p>EYE SPECIALIST</p><p>ABC HOSPITAL </p></div>  
  </button>
 <button> <div id="grid4">
  <img src={user} width="60" height="60"/>
  <p>Dr.ABCQ</p><p>HEART SPECIALIST</p><p>ABC HOSPITAL </p></div>
  </button>
  <button><div id="grid5">
  <img src={user} width="60" height="60"/>
  <p>Dr.ABCG</p><p>EYE SPECIALIST</p><p>ABC HOSPITAL </p></div>
  </button>
  <button><div id="grid6"><img src={user} width="60" height="60"/>
  <p>Dr.ABCV</p><p>LUNG SPECIALIST</p><p>ABC HOSPITAL </p></div>
  </button>
  <div class="b1">
  <p>Add Booking</p>
  <img src={user} width="60" height="60"/>



  <p>Choose the date: {date}</p>
  <div id='selectDate'><input type="date" onchange={e=>setDate(e.target.value)}/>
  </div>
  <br></br>
  <p>Choose the slot:{time}</p>
  <div id='selectSlot'><input type="time" onchange={e=>setTime(e.target.value)}/>
  </div>
  <br></br>
  <button type="submit" id="submitButton">Submit</button>
  </div>
  </div>

    </body>
  );
}
export default Home;