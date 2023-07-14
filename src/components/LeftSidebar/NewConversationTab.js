import React from "react";
import ContactTab from "./ContactTab";

// Component for the new conversation tab
function NewConversationTab({ contacts, showNewConvoTab }) {
  // Event handler for closing the new conversation tab
  let handleClose = () => {
    showNewConvoTab(false);
  };
  return (
    <>
      <div className="new-convo-tab">
        <div className="nct-header">
          <p>Select Contact</p>
          <span onClick={handleClose}>
            <i className="fas fa-2x fa-times-circle"></i>
          </span>
        </div>
        <div className="nct-list" onClick={handleClose}>
          {contacts.map((contact, index) => (
            <ContactTab contact={contact} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}

export default NewConversationTab;
