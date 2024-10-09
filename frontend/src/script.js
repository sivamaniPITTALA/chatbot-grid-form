const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input button");
const chatbox = document.querySelector(".chatbox");

let userMessage;

// Array of predefined responses
const responses = [
  { keywords: ["hello", "hi"], response: "Hello! How can I assist you today?" },
  { keywords: ["help"], response: "Sure, I am here to help you! What do you need assistance with?" },
  { keywords: ["thank you", "thanks"], response: "You're welcome! If you have any more questions, feel free to ask." },
  { keywords: ["bye", "goodbye"], response: "Goodbye! Have a great day!" },
  { keywords: ["how are you"], response: "I'm just a program, but thanks for asking! How can I help you?" },
  { keywords: ["your name", "who are you"], response: "I'm a simple chatbot created to assist you!" },
  { keywords: [], response: "I'm sorry, I don't understand that." }, // Fallback response
];

// Function to create chat message list item (li)
const createChatLi = (message, className) => {
  const chatLi = document.createElement("li");
  chatLi.classList.add("chat", className);
  let chatContent = `<p>${message}</p>`;
  chatLi.innerHTML = chatContent;
  return chatLi;
};

// Function to generate a dynamic response
const generateResponse = (incomingChatLi) => {
  const messageElement = incomingChatLi.querySelector("p");
  let botResponse = "I'm not sure how to respond to that.";

  // Check the userMessage against the keywords for a matching response
  for (const entry of responses) {
    if (entry.keywords.some(keyword => userMessage.toLowerCase().includes(keyword))) {
      botResponse = entry.response;
      break;
    }
  }

  // Display the AI response
  messageElement.textContent = botResponse;

  // Auto-scroll to the latest message
  chatbox.scrollTo(0, chatbox.scrollHeight);
};

// Function to handle sending chat messages
const handleChat = () => {
  userMessage = chatInput.value.trim();
  if (!userMessage) {
    return;
  }

  // Append user's message to chatbox
  chatbox.appendChild(createChatLi(userMessage, "chat-outgoing"));
  chatbox.scrollTo(0, chatbox.scrollHeight);

  // Display AI "Thinking..." message, then call generateResponse
  setTimeout(() => {
    const incomingChatLi = createChatLi("Thinking...", "chat-incoming");
    chatbox.appendChild(incomingChatLi);
    chatbox.scrollTo(0, chatbox.scrollHeight);
    generateResponse(incomingChatLi);
  }, 600);
};

// Event listener for the send button
sendChatBtn.addEventListener("click", handleChat);

// Function to handle chatbot cancelation
function cancel() {
  let chatbotComplete = document.querySelector(".chatBot");
  if (chatbotComplete && chatbotComplete.style.display !== "none") {
    chatbotComplete.style.display = "none";

    // Display last message when chat is canceled
    let lastMsg = document.createElement("p");
    lastMsg.textContent = "Thanks for using our Chatbot!";
    lastMsg.classList.add("lastMessage");
    document.body.appendChild(lastMsg);
  }
}
