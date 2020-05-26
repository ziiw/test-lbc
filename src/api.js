// This file contain the methods in order
// to mock an external API
// We presume the API contain a unique endpoint
// related to the consumption of messages objects

// Initial data
let MESSAGES_HISTORY = [
  {
    content: "Hey !",
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
  {
    content: "👋",
    author: "Mike",
    isPublic: true,
    timestamp: 1590507536804,
  },
  {
    content: "What's up?",
    author: "Alice",
    isPublic: true,
    timestamp: 1590507537304,
  },
  {
    content: "Not much",
    author: "John",
    isPublic: true,
    timestamp: 1590507538304,
  },
  {
    content: "Surfing 🏄‍♂️",
    author: "Mike",
    isPublic: true,
    timestamp: 1590507539304,
  },
];

// Represent the data model layer
// used to build models and stay consistent
// with data sent to the API
const messageFactory = (message) => {
  return {
    ...message,
    timestamp: Date.now(),
  };
};

export const get = async () => {
  return new Promise((resolve, reject) => {
    // Simulate call to server
    setTimeout(() => {
      resolve(MESSAGES_HISTORY);
    }, 1000);
  });
};

export const post = async (message) => {
  return new Promise((resolve, reject) => {
    const obj = messageFactory(message);
    // Simulate call to server
    setTimeout(() => {
      resolve({ status: 200, message: obj });
    }, 250);
  });
};
