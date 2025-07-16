// Connect to the server using Socket.IO
const socket = io();

socket.on('connect', () => {
  console.log('Connected to server!');
});

// DOM elements
const usernameInput = document.getElementById('usernameInput');
const messageInput = document.getElementById('messageInput');
const sendBtn = document.getElementById('sendBtn');
const chatWindow = document.getElementById('chatWindow');


// Send message to server when user clicks "Send"
sendBtn.addEventListener('click', () => {
  const username = usernameInput.value.trim();
  const message = messageInput.value.trim();
  if (username && message) {
    const formattedMsg = `${username}: ${message}`;
    socket.emit('chatMessage', formattedMsg);  // send to server
    messageInput.value = '';                      // clear input
  }
});

// Receive message from server and display it
socket.on('chatMessage', (msg) => {
  const messageElement = document.createElement('p');
  messageElement.textContent = msg;
  chatWindow.appendChild(messageElement);
  chatWindow.scrollTop = chatWindow.scrollHeight; // auto-scroll to bottom
});