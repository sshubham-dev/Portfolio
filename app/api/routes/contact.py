from fastapi import APIRouter, Form
from services.contact_service import create_contact

router = APIRouter()

@router.post("/contact")
async def post_contact(
    name: str = Form(),
    email: str = Form(),
    project_type: str = Form(),
    message: str = Form(),
):
    data = {
        "name": name,
        "email": email,
        "project_type": project_type,
        "message": message,
    }
    contact_response = create_contact(data)
    if contact_response:
        print("Contact created sucessful: ", contact_response)
        return contact_response