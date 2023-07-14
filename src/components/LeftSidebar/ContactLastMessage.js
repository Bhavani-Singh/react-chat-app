import React from "react";

// Component for rendering the last message of a contact
function ContactLastMessage(props) {
  return (
    <div className="contactText">
      <p> {props.chatlog.text}</p>
    </div>
  );
}

export default ContactLastMessage;
