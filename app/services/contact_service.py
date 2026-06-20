from db.database import contact_collection
from models.contact_model import ContactSchema

def create_contact(data: ContactSchema):
    print(data)
    new_contact = contact_collection.insert_one(data)
    if not new_contact:
        return "Error Creating Contact"
    print(type(new_contact))
    return new_contact