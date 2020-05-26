import React from "react";
import { render, cleanup } from "@testing-library/react";
import MessagesList from "./MessagesList";

const messages = [
  {
    content: "Hey",
    author: "John",
    isPublic: true,
    timestamp: 1590507536304,
  },
  {
    content: "Hello !",
    author: "Carla",
    isPublic: true,
    timestamp: 1590507536404,
  },
];

afterEach(cleanup);

describe("<MessagesList />", () => {
  it("should render all messages", () => {
    const { getAllByTestId } = render(<MessagesList messages={messages} />);
    const elems = getAllByTestId("message");
    expect(elems).toHaveLength(messages.length);
  });

  it("should render the content", () => {
    const { getAllByTestId } = render(<MessagesList messages={messages} />);
    const elems = getAllByTestId("message-content");
    const content = elems.map((e) => e.innerHTML);
    expect(content).toStrictEqual(messages.map((e) => e.content));
  });
});
