from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.responses import FileResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
from datetime import datetime
import json
import pathlib

app = FastAPI()
client_map = {}  # Maps WebSocket to sender name

# Mount static directory for HTML/CSS/JS
app.mount("/static", StaticFiles(directory="static"), name="static")

# Serve index.html at root
@app.get("/")
async def serve_index():
    return FileResponse(pathlib.Path("static/index.html"))

# Fallback for mistaken GET requests to WebSocket route
@app.get("/ws")
async def websocket_misroute():
    print("Received a mistaken GET request to /ws — expected a WebSocket.")
    return JSONResponse(
        content={"error": "This endpoint only accepts WebSocket connections."},
        status_code=400
    )

# WebSocket endpoint
@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()

    connected_sender = websocket.query_params.get("sender", "Anonymous")
    client_map[websocket] = connected_sender

    try:
        while True:
            try:
                data = await websocket.receive_text()
                payload = json.loads(data)

                # ✅ Use sender from payload for tagging
                sender = payload.get("sender", "Anonymous")
                content = payload.get("content", "")
                timestamp = datetime.now().strftime("%I:%M %p")
            except json.JSONDecodeError:
                continue  # Skip malformed messages

            # Broadcast to all connected clients
            for client, name in list(client_map.items()):
                is_self = (name == sender)
                structured_message = json.dumps({
                    "timestamp": timestamp,
                    "username": sender,
                    "content": content,
                    "is_self": is_self
                })
                try:
                    await client.send_text(structured_message)
                except Exception:
                    client_map.pop(client, None)

    except WebSocketDisconnect:
        client_map.pop(websocket, None)
    except Exception as e:
        print(f"WebSocket error: {e}")
        client_map.pop(websocket, None)