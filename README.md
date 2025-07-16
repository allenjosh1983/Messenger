🧾 Barkeep Messenger
A lightweight, real-time chat application built with Node.js, Express, and Socket.IO. Users can send and receive messages across browser tabs with live updates, all through a clean, minimalist interface.
Features Implemented
-  Real-time messaging across multiple clients using Socket.IO
-  Simple user interface with message input and username field
-  Broadcast messages with usernames tagged
-  Auto-scrolling chat window
-  Express server configured for static asset delivery

📁 Project Structure
barkeep/
├── public/
│   ├── index.html       // Frontend interface
│   ├── client.js        // Client-side socket logic
├── src/
│   └── server.js        // Server-side logic (Express + Socket.IO)



 Getting Started
- Install dependencies
Navigate to the project root and run:
npm install express socket.io
- Start the server
npm run dev
- Access the app
Open a browser and visit:
http://localhost:3000
- Test in multiple tabs
Open two browser windows and enter different usernames to see live message broadcasting.

🛠 Technologies Used
| Tech | Role | 
| Node.js | Server runtime | 
| Express | HTTP server + static file hosting | 
| Socket.IO | Real-time bidirectional messaging | 
| HTML/CSS | Frontend layout and styling | 




