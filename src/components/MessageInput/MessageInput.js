import React, { useState } from "react";
import "./MessageInput.css";

const MessageInput = (props) => {
  const [content, setContent] = useState("");
  const [isPublic, setIsPublic] = useState(true);

  const sendMessage = () => {
    if (content.length > 0) {
      props.handleSubmit({ author: "User", content, isPublic });
      setContent("");
    }
  };

  return (
    <div className="MessageInput">
      <input
        type="text"
        data-testid="input-text"
        value={content}
        placeholder={"Type your message"}
        onChange={(e) => setContent(e.target.value)}
      />
      <input
        type="checkbox"
        data-testid="input-checkbox"
        name="isPublic"
        defaultChecked={isPublic}
        onChange={() => setIsPublic(!isPublic)}
      />
      <button
        onClick={sendMessage}
        disabled={props.isLoading}
        data-testid="submit-btn"
      >
        Send {isPublic ? "public" : "private"}
      </button>
    </div>
  );
};

export default MessageInput;
