<img width="3840" height="2160" alt="image" src="https://github.com/user-attachments/assets/a8398565-777a-4678-98f8-f3f49dd16b36" />

Barkeep Messenger is
A lightweight, real-time chat application built with Python, FastAPI, and WebSocket. Users can send and receive messages across browser tabs with live updates, all through a clean, minimalist interface.
Features Implemented
- Real-time messaging across multiple clients using FastAPI WebSocket
- Simple user interface with message input and username field
- Broadcast messages with usernames and timestamps
- Auto-scrolling chat window
- FastAPI server configured for static asset delivery

Project Structure
<<<<<<< HEAD
<img width="3840" height="2160" alt="image" src="https://github.com/user-attachments/assets/80a43bce-d35a-4719-900c-f04440a97411" />
=======

```plaintext
├── .gitignore  # Git exclusions
├── README.md  # Project documentation
├── app/
│   ├── main.py  # FastAPI app with WebSocket routes
├── filetree.md  # Markdown file
├── requirements.txt  # Python dependencies
├── static/
│   ├── index.html  # Chat UI
│   ├── script.js  # WebSocket client logic
│   ├── style.css  # CSS stylesheet
│   ├── test-client.html  # HTML file
├── treegen.py  # Python module
```

>>>>>>> f82cd61 (updated readme and requirements.txt)


Getting Started
# Install dependencies (fast api, uvicorn)
```pip install -r requirements.txt```

# Launch server
uvicorn app.main:app --reload



# Access the app
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




