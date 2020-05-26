import React from "react";
import "./MessagesList.css";

const MessagesList = ({ messages }) => {
  return (
    <div className="MessagesList">
      <h3>Messages</h3>
      {messages.length === 0 && <p>Loading messages...</p>}
      {messages.map((entry) => {
        return (
          <div
            key={entry.timestamp}
            data-testid="message"
            className={`message ${entry.isPublic && "public"}`}
          >
            <p className="meta">
              {new Date(entry.timestamp).toLocaleTimeString("en-US")} -{" "}
              {entry.author}:
            </p>
            <p data-testid="message-content">{entry.content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default MessagesList;
