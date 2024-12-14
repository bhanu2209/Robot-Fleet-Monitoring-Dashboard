from fastapi import FastAPI, WebSocket
from fastapi.middleware.cors import CORSMiddleware
from fake_data import generate_robot_data
import asyncio

app = FastAPI()

# CORS middleware to allow requests from frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# In-memory data store
robot_data = generate_robot_data()

@app.get("/robots")
def get_robots():
    return robot_data

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    while True:
        for robot in robot_data:
            robot.update_status()  # Update mock data dynamically
        await websocket.send_json(robot_data)
        await asyncio.sleep(5)