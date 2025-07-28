const nameInput = document.getElementById("nameInput");
const input = document.getElementById("messageInput");
const messageList = document.getElementById("messageList");

let socket;
let senderName = "Anonymous";

function scrollToBottom() {
  messageList.scrollTop = messageList.scrollHeight;
}

function initializeSocket() {
  senderName = nameInput.value.trim() || "Anonymous";
  socket = new WebSocket(`ws://localhost:8000/ws?sender=${encodeURIComponent(senderName)}`);

    socket.onmessage = function(event) {
        try {
            const data = JSON.parse(event.data);
            console.log("Message incoming:", data);

            const container = document.createElement("li");
            container.className = data.is_self ? "message-container outgoing" : "message-container incoming";

            const username = document.createElement("div");
            username.className = "message-username";
            username.textContent = data.username || "Unknown";

            const bubble = document.createElement("div");
            bubble.className = "message-bubble";
            bubble.textContent = data.content || "[No Content]";

            const timestamp = document.createElement("div");
            timestamp.className = "message-timestamp";
            timestamp.textContent = data.timestamp || "Timestamp Missing";

            container.appendChild(username);
            container.appendChild(bubble);
            container.appendChild(timestamp);
            messageList.appendChild(container);
        } catch (err) {
            console.error("Failed to parse message:", event.data, err);
        }
    };
}

function sendMessage() {
  const content = input.value.trim();
  if (content !== "" && socket && socket.readyState === WebSocket.OPEN) {
    socket.send(JSON.stringify({
      sender: senderName,
      content: content
    }));
    input.value = "";
  }
}

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
});

nameInput.addEventListener("change", initializeSocket);

window.addEventListener("load", () => {
  if (nameInput.value.trim()) {
    initializeSocket();
  }
});