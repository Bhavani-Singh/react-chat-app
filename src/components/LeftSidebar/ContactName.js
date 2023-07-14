import React from "react";

// Component for rendering the name of a contact
function ContactName({ name }) {
  return (
    <div>
      <p style={styles.contactText}>{name}</p>
    </div>
  );
}

// Inline styles for the ContactName component
const styles = {
  contactText: {
    fontSize: "16px",
    color: "#000",
    marginBottom: "3px",
  },
};
export default ContactName;
