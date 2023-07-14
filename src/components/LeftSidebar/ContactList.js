import React from "react";
import ContactTab from "./ContactTab";

// Component for rendering a list of contacts
function ContactList({ contacts }) {
  // Render a list of ContactTab components based on the provided contacts
  return (
    <>
      <div style={styles.contactList} className="contactscreen">
        {contacts.map((contact, index) => (
          <ContactTab contact={contact} key={index} />
        ))}
      </div>
    </>
  );
}

// Inline styles for the ContactList component
const styles = {
  contactList: {
    overflowY: "scroll",
    height: "80vh",
    zIndex: "2",
    backgroundColor: "#fff",
  },
};
export default ContactList;
