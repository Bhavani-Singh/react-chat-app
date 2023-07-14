import React from "react";

// Component for rendering the right chat bubble
function RightChatBubble({ message, name, image }) {
  return (
    <>
      <div className="message-bubble mbr">
        <img src={image} style={styles.avatar} alt="sender-pic" />{" "}
        <div className="right-bubble ">
          <div className="text-message">
            <p className="name">{name}</p>
            <p className="message">{message.text}</p>
            <span className="message-timestamp">{message.timestamp}</span>
          </div>
          <div className="bubble-arrow bubble-arrow-alt"></div>
        </div>
      </div>
    </>
  );
}

// Inline styles for the RightChatBubble component
const styles = {
  avatar: {
    width: "49px",
    height: "49px",
    borderRadius: "50%",
    margin: "0 10px",
  },
};
export default RightChatBubble;
