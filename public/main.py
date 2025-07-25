from fastapi import FastAPI, WebSocket
from datetime import datetime

app = FastAPI()
clients = []

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket) -> None:
    """Handle WebSocket connections and broadcast messages with timestamps."""
    await websocket.accept()
    clients.append(websocket)

    while True:
        data = await websocket.receive_text()
        timestamp = datetime.now().strftime("%I:%M %p")
        message = f"[{timestamp}] {data}"

        for client in clients:
            await client.send_text(message)