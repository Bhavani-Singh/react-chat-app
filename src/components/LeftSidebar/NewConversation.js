import React from "react";

// Component for creating a new conversation 
function NewConversation(props) {
  
  // Event handler for handling the click event
  let handleClick = () => {
    props.showNewConvoTab(true);
  };
  return (
    <div className="new-convo">
      <p>New Conversation</p>
      <span onClick={handleClick}>
        <i className="fas fa-plus"></i>
      </span>
    </div>
  );
}

export default NewConversation;
