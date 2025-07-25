Barkeep Messenger
A lightweight, real-time chat application built with Python, FastAPI, and WebSocket. Users can send and receive messages across browser tabs with live updates, all through a clean, minimalist interface.
Features Implemented
- Real-time messaging across multiple clients using FastAPI WebSocket
- Simple user interface with message input and username field
- Broadcast messages with usernames and timestamps
- Auto-scrolling chat window
- FastAPI server configured for static asset delivery

barkeep/
├── app/
│   └── main.py             # Server-side logic (FastAPI + WebSocket)
├── static/
│   ├── index.html          # Frontend interface
│   ├── test-client.html    # Client-side sandbox
│   └── style.css           # Styling for UI
└── README.md

Getting Started
- Install dependencies
Navigate to the project root and run:
pip install fastapi uvicorn


- Start the server
uvicorn app.main:app --reload


- Access the app
Open a browser and visit:
http://localhost:8000


- Test in multiple tabs
Open two browser windows and enter different usernames to see live message broadcasting with timestamps.
Technologies Used

## 🛠️ Technologies Used

| Tech       | Role                                                        |
|------------|-------------------------------------------------------------|
| Python     | Core programming language for backend logic                 |
| FastAPI    | Web framework for handling API requests and WebSocket routes|
| Uvicorn    | ASGI server to run the FastAPI app                          |
| HTML/CSS   | Structures and styles the user interface                    |
| JavaScript | Powers client-side WebSocket communication and UI behavior |




