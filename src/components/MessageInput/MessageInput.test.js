import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import MessageInput from "./MessageInput";

afterEach(cleanup);

describe("<MessageInput />", () => {
  it("should send messages", () => {
    const fn = jest.fn();
    const { getByTestId } = render(<MessageInput handleSubmit={fn} />);
    const inputText = getByTestId("input-text");
    const btn = getByTestId("submit-btn");
    fireEvent.change(inputText, { target: { value: "last message" } });
    fireEvent.click(btn);
    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith({
      author: "User",
      isPublic: true,
      content: "last message",
    });
  });

  it("should send private messages", () => {
    const fn = jest.fn();
    const { getByTestId } = render(<MessageInput handleSubmit={fn} />);
    const inputText = getByTestId("input-text");
    const inputCheckbox = getByTestId("input-checkbox");
    const btn = getByTestId("submit-btn");
    fireEvent.change(inputText, { target: { value: "last private message" } });
    fireEvent.click(inputCheckbox);
    fireEvent.click(btn);
    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith({
      author: "User",
      isPublic: false,
      content: "last private message",
    });
  });

  it("should not send blank messages", () => {
    const fn = jest.fn();
    const { getByTestId } = render(<MessageInput handleSubmit={fn} />);
    const btn = getByTestId("submit-btn");
    fireEvent.click(btn);
    expect(fn).toHaveBeenCalledTimes(0);
  });
});
