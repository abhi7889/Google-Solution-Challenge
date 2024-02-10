import React, { useState } from "react";
import "./DashboardPage.css";
import Dashboard from "../../components/Dashboard/Dashboard";
import Analytics from "../../components/Analytics/Analytics";

export default function DashboardPage() {
  const [activeButton, setActiveButton] = useState(null);


  let activeComponent;

  switch (activeButton) {
    case "button1":
      activeComponent = <Dashboard />;
      break;
    case "button2":
      activeComponent = <Analytics />;
      break;
    default:
      activeComponent = <Dashboard />;
  }

  return (
    <div className="main--box">
      <div className="left--side">
        <h2 className="heading--sidebar">AutoIlluminator</h2>
        <div className="sidebar--items">
          <button
            className={`sidebar--item ${
              activeButton === "button1" ? "active" : ""
            }`}
            onClick={() => setActiveButton("button1")}
          >
            Dashboard
          </button>
          <button
            className={`sidebar--item ${
              activeButton === "button2" ? "active" : ""
            }`}
            onClick={() => setActiveButton("button2")}
          >
            Analytics
          </button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "124px",
              height: "2px",
              backgroundColor: "black",
              marginLeft: "65px",
              marginBottom: "20px",
            }}
          ></div>
          <button className="logout--button">Logout</button>
        </div>
      </div>
      <div className="right--side">
        {/* Render the active component */}
        {activeComponent}
      </div>
    </div>
  );
}
