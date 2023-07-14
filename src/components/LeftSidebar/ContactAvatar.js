import React from "react";

// Component for rendering a contact avatar
function ContactAvatar({ image }) {
  return (
    <div>
      <img src={image} alt="user-avatar" className="avatar" />
    </div>
  );
}

export default ContactAvatar;
