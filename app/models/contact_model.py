from pydantic import BaseModel, EmailStr, Field

class ContactSchema(BaseModel):
    name: str = Field(strict=True)
    email: EmailStr = Field()
    project_type: str = Field(strict=True)
    message: str = Field(min_length="50")