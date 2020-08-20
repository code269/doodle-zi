import React from "react";
import Welcome from "./Welcome";
import Notifications from "./Notifications";
import Dates from "./Dates";

function Home() {
  return (
    <div>
      <section id="welcome" className="top-half">
        <Welcome />
      </section>
      <section id="notifications" className="bottom-half">
        <div className="row">
          <Notifications />
          <Dates />
        </div>
      </section>
    </div>
  );
}

export default Home;
