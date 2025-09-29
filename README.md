<<img width="3840" height="2160" alt="Image" src="https://github.com/user-attachments/assets/021e7638-0844-4164-86f2-6cf75483e33c" />/>

Barkeep Messenger is
A lightweight, real-time chat application built with Python, FastAPI, and WebSocket. Users can send and receive messages across browser tabs with live updates, all through a clean, minimalist interface.
Features Implemented
- Real-time messaging across multiple clients using FastAPI WebSocket
- Simple user interface with message input and username field
- Broadcast messages with usernames and timestamps
- Auto-scrolling chat window
- FastAPI server configured for static asset delivery

Project Structure
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


Getting Started
<<<<<<< HEAD
# Install dependencies (fast api, uvicorn)
```
pip install -r requirements.txt
```
=======
# Install dependencies fastapi uvicorn
```
pip install -r requirements.txt
 ```


# Launch server
``` 
uvicorn app.main:app --reload
 ```



# Access the app
http://127.0.0.1:8000
This is the default URL for FastAPI apps running on localhost with port 8000. 


- Test in multiple tabs
Open two browser windows and enter different usernames to see live message broadcasting with timestamps.
<img width="3840" height="2160" alt="Image" src="https://github.com/user-attachments/assets/075396b6-d61a-4028-b571-80b35acbbb84" />


Technologies Used

## 🛠️ Technologies Used

| Tech       | Role                                                        |
|------------|-------------------------------------------------------------|
| Python     | Core programming language for backend logic                 |
| FastAPI    | Web framework for handling API requests and WebSocket routes|
| Uvicorn    | ASGI server to run the FastAPI app                          |
| HTML/CSS   | Structures and styles the user interface                    |
| JavaScript | Powers client-side WebSocket communication and UI behavior |




