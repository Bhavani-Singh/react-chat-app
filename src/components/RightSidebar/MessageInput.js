import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";

// Component for the message input section
function MessageInput(props) {
  const { newMessageHandler } = props;
  const [message, setMessage] = useState("");

  // Reset input value when the contact component changes
  useEffect(() => {
    setMessage("");
  }, [setMessage, props]);

  // Event handler for input change
  let handleInputChange = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
  };

  // Event handler for form submission
  let handleSubmit = () => {
    if (message) {
      newMessageHandler(message);
    } else {
      alert("Type some message text before submitting");
    }
    setMessage("");
    // scroll to the bottom
  };
  return (
    <>
      <Row className="message-input">
        <Col xs={5} lg={5}>
          <input
            type="text"
            placeholder="Send message"
            value={message}
            onChange={handleInputChange}
          />
        </Col>
        <Col xs={3} lg={4}>
          <button className="send-button" onClick={handleSubmit}>
            Send
          </button>
        </Col>
      </Row>
    </>
  );
}

export default MessageInput;
