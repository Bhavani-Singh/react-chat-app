import React, { useEffect, useState } from "react";
import LeftChatBubble from "./LeftChatBubble";
import { useDispatch } from "react-redux";
import RightChatBubble from "./RightChatBubble";
import MessageInput from "./MessageInput";
import { addNewMessage } from "../../actions/contact";
import ProfileHeader from "../LeftSidebar/ProfileHeader";

// Component for displaying the messages in a conversation
function MessageBox(props) {
  const [chat, setChat] = useState([]);
  const [length, setLength] = useState();
  const dispatch = useDispatch();

  // Set the initial chat log and length when the component receives new user prop
  useEffect(() => {
    setChat(props.user.chatlog);
    setLength(props.user.chatlog.length);
  }, [props]);

  // Function for adding a new message to the chat log
  let updateMesssages = (message) => {
    let object = {
      text: message,
      timestamp: "12:00",
      sender: "me",
      message_id: length + 1,
    };

    // Dispatch an action to add the new message to the Redux store
    dispatch(addNewMessage(object, props.user.id));

    // Update the chat log and length state with the new message
    setLength(object.message_id);

    setChat([...chat, object]);
  };

  return (
    <>
      <div className="message-box">
        <div className="message-box-header" xs={6} sm={7} md={8} lg={7} xl={8}>
          <ProfileHeader user={props.user} />
        </div>
        {chat.length === 0 && (
          <p className="no-message-alert">NO MESSAGES FOUND</p>
        )}
        {chat.length > 0 && (
          <div className="messages-section">
            {chat.map((m, index) =>
              m.sender === "me" ? (
                <RightChatBubble
                  message={m}
                  key={index}
                  name={"Bhavani Singh"}
                  image={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjzJjPa-3jdL6XAI0yqXBY8VzK_p5h0yQIkQ&usqp=CAU"
                  }
                />
              ) : (
                <LeftChatBubble
                  message={m}
                  key={index}
                  name={props.user.name}
                  image={props.user.image}
                />
              )
            )}
          </div>
        )}

        <MessageInput newMessageHandler={updateMesssages} user={props.user} />
      </div>
    </>
  );
}

export default MessageBox;
