import os
from db.connection import client

# print(client[os.getenv("DATABASE_NAME")])
database = client[os.getenv("DATABASE_NAME")]
pages_collection = database["pages"]
products_collection = database["products"]
blogs_collection = database["blogs"]
contact_collection = database["contacts"]
hire_collection = database["hires"]
