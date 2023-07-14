import React from "react";
import "../stylesheets/rightSidebar.css";

// Component for displaying the welcome message when there are no conversations
function NoConvo() {
  return (
    <div className="no-chat-background">
      <h2 style={{ margin: "2rem", textAlign: "center", color: "yellowgreen"}}>Welcome to React chat app!</h2>
    </div>
  );
}

export default NoConvo;
