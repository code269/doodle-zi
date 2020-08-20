import React from "react";
import Chatbox from "./Chatbox";
import { timeNow, greetingDate, greet, todaysDayOfWeek } from "./time";

const userName = "Jake Statefarm"; //Placeholder

function Welcome() {
  return (
    <div className="row welcome-box">
      <div className="col-lg-6">
        <h1 className="welcome-text">{greet + userName}!</h1>
        <img className="avatar" src="../images/avatar.png" alt="avatar" />
        <h1 className="welcome-msg">
          {todaysDayOfWeek}, {greetingDate}
        </h1>
        <h1 className="welcome-msg">Login Time: {timeNow}</h1>
      </div>
      <Chatbox />
    </div>
  );
}

export default Welcome;

//Notes:
//Include a moving time
