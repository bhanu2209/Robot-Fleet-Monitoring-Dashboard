import random
from datetime import datetime

class Robot:
    def __init__(self, id):
        self.id = id
        self.status = random.choice([True, False])
        self.battery = random.randint(10, 100)
        self.cpu = random.randint(10, 90)
        self.ram = random.randint(10, 90)
        self.location = (round(random.uniform(-90, 90), 6), round(random.uniform(-180, 180), 6))
        self.last_updated = datetime.now().isoformat()

    def update_status(self):
        self.status = random.choice([True, False])
        self.battery = max(0, self.battery - random.randint(0, 10))
        self.last_updated = datetime.now().isoformat()

def generate_robot_data(num_robots=10):
    return [Robot(f"robot-{i}") for i in range(1, num_robots + 1)]
