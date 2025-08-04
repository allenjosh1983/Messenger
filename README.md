<img width="3840" height="2160" alt="image" src="https://github.com/user-attachments/assets/a8398565-777a-4678-98f8-f3f49dd16b36" />

Barkeep Messenger
A lightweight, real-time chat application built with Python, FastAPI, and WebSocket. Users can send and receive messages across browser tabs with live updates, all through a clean, minimalist interface.
Features Implemented
- Real-time messaging across multiple clients using FastAPI WebSocket
- Simple user interface with message input and username field
- Broadcast messages with usernames and timestamps
- Auto-scrolling chat window
- FastAPI server configured for static asset delivery

Project Structure
<img width="3840" height="2160" alt="image" src="https://github.com/user-attachments/assets/80a43bce-d35a-4719-900c-f04440a97411" />


Getting Started
To set up and run Barkeep locally:
# Install dependencies- This installs required packages (fastapi, uvicorn)

pip install -r requirements.txt

# Launch server- this starts the app in live-reload mode 
uvicorn app.main:app --reload



# Access the app
Once running, open a browser and visit:
http://127.0.0.1:8000
This is the default URL for FastAPI apps running on localhost with port 8000. 


- Test in multiple tabs
Open two browser windows and enter different usernames to see live message broadcasting with timestamps.
<img width="3840" height="2160" alt="image" src="https://github.com/user-attachments/assets/71559050-e040-4b87-8f8d-6efaa6aa3a14" />


Technologies Used

## 🛠️ Technologies Used

| Tech       | Role                                                        |
|------------|-------------------------------------------------------------|
| Python     | Core programming language for backend logic                 |
| FastAPI    | Web framework for handling API requests and WebSocket routes|
| Uvicorn    | ASGI server to run the FastAPI app                          |
| HTML/CSS   | Structures and styles the user interface                    |
| JavaScript | Powers client-side WebSocket communication and UI behavior |




