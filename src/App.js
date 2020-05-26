import React, { useEffect, useState } from "react";
import "./App.css";
import MessagesList from "./components/MessagesList/MessagesList";
import MessageInput from "./components/MessageInput/MessageInput";
import { get, post } from "./api";

function App() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchMessages() {
      try {
        const messages = await get();
        setMessages(messages);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    }

    fetchMessages();
  }, []);

  const sendMessage = async (message) => {
    setIsLoading(true);
    try {
      const resp = await post(message);
      resp.status === 200 &&
        setMessages((messages) => [...messages, resp.message]);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <MessagesList messages={messages} />
      <MessageInput handleSubmit={sendMessage} isLoading={isLoading} />
    </div>
  );
}

export default App;
